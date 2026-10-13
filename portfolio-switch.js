// Animate the return A; preserve normal anchors, modified clicks and reduced motion.
(() => {
  const key = 'portfolio-return-entry';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let entered = false;
  try {
    entered = sessionStorage.getItem(key) === 'original';
    sessionStorage.removeItem(key);
  } catch {}
  if (entered && !reduced.matches) {
    document.documentElement.dataset.portfolioEntry = 'original';
    addEventListener('DOMContentLoaded', () => {
      setTimeout(() => delete document.documentElement.dataset.portfolioEntry, 1100);
    }, { once: true });
  }
  let outgoing = null;
  let pending = false;
  const restore = () => { outgoing?.cancel(); outgoing = null; pending = false; };
  addEventListener('pageshow', restore);
  addEventListener('DOMContentLoaded', () => {
    const link = document.querySelector('.portfolio-return');
    if (!link) return;
    link.addEventListener('click', event => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || (link.target && link.target !== '_self') || reduced.matches || !document.body.animate) return;
      event.preventDefault();
      if (pending) return;
      pending = true;
      const target = link.href;
      outgoing = document.body.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 240, easing: 'ease-in', fill: 'forwards'
      });
      outgoing.finished.then(() => {
        if (!pending) return;
        try { sessionStorage.setItem(key, 'original'); } catch {}
        location.assign(target);
      }).catch(() => {});
    });
    addEventListener('keydown', event => {
      if (event.key === 'Escape' && pending) restore();
    });
  }, { once: true });
})();
