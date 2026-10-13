'use strict';

const { createHash } = require('node:crypto');
const contactEmail = require('../lib/contact-email.cjs');
const MAX_BYTES = 64 * 1024;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const EMAIL = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
// Best-effort abuse protection per warm function instance, not a global limit.
const attempts = new Map();
// Fast local deduplication; Resend also enforces the request's idempotency key
// across function instances for 24 hours.
const accepted = new Map();

function reply(res, status, error) {
  res.setHeader('Cache-Control', 'no-store');
  return res.status(status).json(error ? { ok: false, error } : { ok: true, accepted: true });
}

function sameOrigin(req) {
  try {
    const origin = new URL(req.headers.origin);
    const host = req.headers.host;
    return typeof host === 'string' && origin.host.toLowerCase() === host.toLowerCase()
      && origin.origin === req.headers.origin
      && (origin.protocol === 'https:' || (origin.protocol === 'http:'
        && ['localhost', '127.0.0.1', '[::1]'].includes(origin.hostname)));
  } catch { return false; }
}

async function readBody(req) {
  if (Number(req.headers['content-length']) > MAX_BYTES) throw new Error('large');
  let body = req.body;
  if (body === undefined) {
    const chunks = [];
    let bytes = 0;
    for await (const chunk of req) {
      bytes += Buffer.byteLength(chunk);
      if (bytes > MAX_BYTES) throw new Error('large');
      chunks.push(Buffer.from(chunk));
    }
    body = Buffer.concat(chunks).toString('utf8');
  }
  if (Buffer.isBuffer(body)) body = body.toString('utf8');
  if (typeof body === 'string') {
    if (Buffer.byteLength(body) > MAX_BYTES) throw new Error('large');
    body = JSON.parse(body);
  } else if (Buffer.byteLength(JSON.stringify(body) || '') > MAX_BYTES) throw new Error('large');
  if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error('invalid');
  return body;
}

function limited(req) {
  const now = Date.now();
  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  for (const [key, value] of attempts) if (now >= value.until) attempts.delete(key);
  let bucket = attempts.get(ip);
  if (!bucket) {
    if (attempts.size >= 1000) return true;
    bucket = { until: now + 10 * 60 * 1000, count: 0 };
    attempts.set(ip, bucket);
  }
  if (bucket.count >= 5) return true;
  bucket.count++;
  return false;
}

module.exports = async function contact(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return reply(res, 405, 'Please submit the contact form to send a message.');
  }
  if (!sameOrigin(req)) return reply(res, 403, 'Please send your message from this website.');
  if (!/^application\/json(?:\s*;|$)/i.test(req.headers['content-type'] || '')) {
    return reply(res, 415, 'Please submit the contact form again.');
  }
  let body;
  try { body = await readBody(req); }
  catch (error) {
    return reply(res, error.message === 'large' ? 413 : 400,
      error.message === 'large' ? 'Your message is too long. Please shorten it.' : 'Please check your message and try again.');
  }
  if (body.website) return reply(res, 400, 'Unable to send this message.');
  const field = (key) => typeof body[key] === 'string' ? body[key].trim() : '';
  const name = field('name');
  const email = field('email');
  const subject = field('subject');
  const message = field('message');
  const requestId = field('requestId');
  if (!name || name.length > 120 || /[\r\n]/.test(name)
    || !EMAIL.test(email) || email.length > 254 || /[\r\n]/.test(email)
    || subject.length > 160 || /[\r\n]/.test(subject)
    || (body.subject !== undefined && typeof body.subject !== 'string')
    || !message || message.length > 6000 || !UUID.test(requestId)) {
    return reply(res, 400, 'Please enter your name, a valid email, and a message of up to 6,000 characters.');
  }
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return reply(res, 503, 'The contact form is not ready to send yet. Please email ramanal@mail.uc.edu directly for now.');
  }
  const fingerprint = createHash('sha256').update(JSON.stringify({ name, email, subject, message })).digest('hex');
  const cacheId = requestId.toLowerCase();
  for (const [key, value] of accepted) if (Date.now() >= value.until) accepted.delete(key);
  const previous = accepted.get(cacheId);
  if (previous) return previous.fingerprint === fingerprint ? reply(res, 200)
    : reply(res, 409, 'This message changed. Please reopen the form before submitting it.');
  if (limited(req)) return reply(res, 429, 'Too many messages. Please wait a few minutes before trying again.');
  try {
    const emailContent = contactEmail({ name, email, subject, message });
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'Idempotency-Key': `portfolio-contact/${cacheId}`,
      },
      body: JSON.stringify({
        from: 'Anshul Raman Portfolio <contact@resend.anshulraman.com>',
        to: ['ramanal@mail.uc.edu'],
        reply_to: email,
        ...emailContent,
      }),
      signal: AbortSignal.timeout(10000),
    });
    const result = await response.json();
    if (response.ok && typeof result.id === 'string' && result.id) {
      if (accepted.size >= 2000) accepted.delete(accepted.keys().next().value);
      accepted.set(cacheId, { fingerprint, until: Date.now() + 10 * 60 * 1000 });
      return reply(res, 200);
    }
    if (response.status === 409) return reply(res, 409, 'This message changed. Please reopen the form before submitting it.');
    return reply(res, 502, 'Your message could not be sent. Please try again or email ramanal@mail.uc.edu directly.');
  } catch {
    return reply(res, 502, 'We could not confirm your message was accepted. It may have gone through; please email ramanal@mail.uc.edu directly if needed.');
  }
};
