'use strict';
const fs = require('node:fs');
const path = require('node:path');
const template = fs.readFileSync(path.join(__dirname, 'contact-email.html'), 'utf8');
const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

module.exports = function contactEmail({name, email, subject, message}) {
  const title = subject ? `Portfolio: ${subject}` : `Portfolio message from ${name}`;
  const subjectLabel = subject || 'New portfolio message';
  const values = {
    title: escape(title), name: escape(name), email: escape(email), subject: escape(subjectLabel),
    emailUrl: escape(`mailto:${encodeURIComponent(email)}`),
    replyUrl: escape(`mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(`Re: ${subjectLabel}`)}`),
    preheader: escape(`${name}: ${message.replace(/\s+/g, ' ').slice(0, 160)}`),
    message: message.replace(/\r\n?/g, '\n').split(/\n{2,}/).map(paragraph =>
      `<p style="margin:0 0 16px">${escape(paragraph).replace(/\n/g, '<br>')}</p>`).join(''),
  };
  return {
    subject: title,
    html: template.replace(/\{\{(\w+)\}\}/g, (_, key) => values[key]),
    text: `Portfolio contact form\n\nFrom: ${name}\nEmail: ${email}\nSubject: ${subjectLabel}\n\n${message}\n\nReply to: ${email}\nSent through https://www.anshulraman.com/portfolio/v2.html`,
  };
};
