(() => {
  const second = location.pathname.endsWith('/v2.html');
  const style = document.createElement('style');
  style.textContent = `
    .version-switcher{position:absolute;z-index:12;top:94px;left:var(--gutter,4vw);display:flex;padding:4px;gap:2px;border:1px solid #ffffff40;border-radius:100px;background:#15100dea;box-shadow:0 4px 24px #0002;backdrop-filter:blur(16px)}
    .version-switcher a{display:grid;place-items:center;min-width:44px;min-height:44px;border-radius:100px;font:500 15px var(--font,Arial);color:#fff;text-decoration:none;transition:background .2s,color .2s}
    .version-switcher a:hover{background:#ffffff26}
    .version-switcher a[aria-current=page]{background:#f5f4f0;color:#17120f}
    .version-switcher a:focus-visible{outline:3px solid #fff;outline-offset:5px}
    body.locked .version-switcher{visibility:hidden}
    @media(max-width:600px){.version-switcher{top:80px;padding:3px}.version-switcher a{min-width:44px;min-height:44px}}
    @media(prefers-reduced-motion:reduce){.version-switcher a{transition:none}}
  `;
  document.head.append(style);
  const nav = document.createElement('nav');
  nav.className = 'version-switcher';
  nav.setAttribute('aria-label', 'Portfolio version');
  for (const version of [1, 2]) {
    const link = document.createElement('a');
    link.textContent = version;
    link.href = (version === 1 ? './index.html' : './v2.html') + location.search + location.hash;
    link.setAttribute('aria-label', `View version ${version}`);
    link.title = `Version ${version}`;
    if ((version === 2) === second) link.setAttribute('aria-current', 'page');
    nav.append(link);
  }
  const updateLinks = () => {
    [...nav.children].forEach((link, index) => link.href = (index ? './v2.html' : './index.html') + location.search + location.hash);
  };
  window.addEventListener('hashchange', updateLinks);
  document.body.append(nav);
})();
