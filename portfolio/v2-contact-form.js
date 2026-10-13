(() => {
  const dialog = document.getElementById('contactFormDialog');
  const open = document.getElementById('contactFormOpen');
  const form = document.getElementById('contactForm');
  if (!dialog || !open || !form) return;
  const status = document.getElementById('contactFormStatus');
  const send = document.getElementById('contactFormSend');
  const sendLabel = send.querySelector('span:last-child');
  let pending = false, lastPayload = '', requestId = '', sent = false, dirty = false;
  form.addEventListener('input', () => { dirty = true; });
  addEventListener('beforeunload', event => {
    if (dirty && !sent) { event.preventDefault(); event.returnValue = ''; }
  });
  open.addEventListener('click', () => {
    if (sent) { form.reset(); status.textContent = ''; delete status.dataset.state; sent = false; }
    dialog.showModal();
    document.body.classList.add('locked');
    // Keep phone keyboards closed until the visitor chooses a field.
    document.getElementById('contactFormClose').focus({preventScroll:true});
  });
  document.getElementById('contactFormClose').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) {
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  }});
  dialog.addEventListener('close', () => {
    if (!document.querySelector('dialog[open]')) document.body.classList.remove('locked');
    open.focus({preventScroll:true});
  });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (pending || !form.reportValidity()) return;
    const fields = Object.fromEntries(new FormData(form));
    const fingerprint = JSON.stringify(fields);
    if (fingerprint !== lastPayload) { requestId = crypto.randomUUID(); lastPayload = fingerprint; }
    pending = true; send.disabled = true; form.setAttribute('aria-busy','true');
    sendLabel.textContent = 'Sending…'; status.textContent = ''; delete status.dataset.state;
    try {
      const response = await fetch(form.action, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body:JSON.stringify({...fields,requestId}), signal:AbortSignal.timeout(20000)
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.ok !== true) throw new Error(result?.error || 'Your message could not be sent. Please try again or use the email address shown here.');
      sent = true; dirty = false; lastPayload = ''; requestId = '';
      status.dataset.state = 'success';
      status.textContent = 'Message sent. Thank you for reaching out.';
      form.reset();
    } catch (error) {
      status.dataset.state = 'error';
      status.textContent = error.name === 'TimeoutError' ? 'Sending timed out. We could not confirm delivery. Please try again or email me directly.' : error instanceof TypeError ? 'Could not connect. Please try again or email me directly.' : error.message;
    } finally {
      pending = false; send.disabled = false; form.removeAttribute('aria-busy'); sendLabel.textContent = 'Send message';
    }
  });
})();
