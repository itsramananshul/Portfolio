// V2 only. Adapted layout ideas from 21st's Experience Timeline (28334),
// Impact Experience (18893), Vertical Tabs (10473), Accessible Accordion (34656),
// Feature Bento (18898), and Scrollable Card Stack (25296). Content is moved intact.
(() => {
  const section = document.querySelector('#experience');
  const timeline = section.querySelector('.exp-timeline');
  const cards = [...timeline.querySelectorAll('.exp-card')];
  const companies = cards.map(card => card.querySelector('.exp-company')?.textContent.trim() || card.querySelector('.exp-org').textContent.split(' · ')[0].trim());
  const firstRoles = cards.map(card => card.querySelector('.exp-role').textContent.trim());
  cards.forEach((card, index) => {
    const identity = document.createElement('div');
    identity.className = 'v2-exp-identity';
    const image = card.querySelector('.exp-logo');
    if (image) {
      const frame = document.createElement('div');
      frame.className = 'v2-exp-brand' + (index === 0 ? ' v2-exp-brand--openprem' : index === 1 ? ' v2-exp-brand--batch' : '');
      frame.append(image);
      identity.append(frame);
    }
    const employer = card.querySelector('.exp-employer');
    if (employer) identity.append(employer);
    else {
      const name = document.createElement('h3');
      name.className = 'exp-company';
      name.textContent = companies[index];
      identity.append(name);
    }
    const details = document.createElement('div');
    details.className = 'v2-exp-details';
    details.append(...card.childNodes);
    const roleHeader = document.createElement('div');
    roleHeader.className = 'v2-exp-role-header';
    const firstHead = details.querySelector(':scope > .exp-head');
    const firstRole = details.querySelector(':scope > .exp-role');
    firstHead.before(roleHeader);
    roleHeader.append(firstHead, firstRole);
    const compactSummary = document.createElement('div');
    compactSummary.className = 'v2-exp-compact-summary';
    const period = document.createElement('span');
    period.textContent = details.querySelector('.exp-period').textContent;
    const role = document.createElement('strong');
    role.textContent = firstRoles[index];
    compactSummary.append(period, role);
    const teaser = document.createElement('p');
    teaser.className = 'v2-exp-teaser';
    teaser.textContent = details.querySelector('.exp-pts li').textContent;
    const disclosure = document.createElement('details');
    disclosure.className = 'v2-exp-disclosure';
    const summary = document.createElement('summary');
    summary.textContent = 'View role details +';
    summary.setAttribute('aria-label', `${companies[index]} role details`);
    disclosure.append(summary, details);
    disclosure.addEventListener('toggle', () => {
      card.dataset.expanded = String(disclosure.open);
      summary.textContent = disclosure.open ? 'Hide role details −' : 'View role details +';
    });
    card.append(identity, compactSummary, teaser, disclosure);
    const companyHeading = identity.querySelector('.exp-company');
    companyHeading.setAttribute('role', 'heading');
    companyHeading.setAttribute('aria-level', '3');
    card.id = `v2-exp-panel-${index}`;
    card.querySelectorAll('.exp-role').forEach(role => {
      role.setAttribute('role', 'heading');
      role.setAttribute('aria-level', '4');
    });
  });
  const options = document.createElement('div');
  options.className = 'v2-exp-options';
  options.setAttribute('role', 'group');
  options.setAttribute('aria-label', 'Experience layout');
  const modes = ['showcase', 'cards', 'accordion', 'stack', 'timeline', 'editorial', 'tabs'];
  const tablist = document.createElement('div');
  tablist.className = 'v2-exp-tabs';
  tablist.setAttribute('role', 'tablist');
  tablist.setAttribute('aria-label', 'Companies and organizations');
  let active = 0;
  const deckControls = document.createElement('div');
  deckControls.className = 'v2-exp-deck-controls';
  const previous = document.createElement('button');
  previous.type = 'button';previous.textContent = '← Previous';
  previous.setAttribute('aria-label', 'Previous employer');
  const counter = document.createElement('span');
  counter.setAttribute('aria-live', 'polite');
  const next = document.createElement('button');
  next.type = 'button';next.textContent = 'Next →';next.setAttribute('aria-label', 'Next employer');
  deckControls.append(previous, counter, next);
  let mode = 'timeline';
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  const motionViewport = matchMedia('(min-height: 700px)');
  let motionEnabled = false;
  let motionFrame = 0;
  let rowCurrent = 0, lastMotionTime = 0;
  let scrollStart = 0, scrollEnd = 1, rowStart = 0, rowEnd = 0;
  const updateShowcaseMotion = (time = performance.now()) => {
    motionFrame = 0;
    if (!motionEnabled) return;
    const progress = Math.max(0, Math.min(1, (scrollY - scrollStart) / (scrollEnd - scrollStart)));
    // Finish the traverse before sticky release, leaving a short final-card hold.
    const traverse = Math.min(1, progress / .88);
    const target = rowStart + (rowEnd - rowStart) * traverse;
    const elapsed = lastMotionTime ? Math.min(64, time - lastMotionTime) : 16;
    lastMotionTime = time;
    rowCurrent += (target - rowCurrent) * (1 - Math.exp(-elapsed / 85));
    if (Math.abs(target - rowCurrent) < .1) rowCurrent = target;
    timeline.style.transform = `translate3d(${rowCurrent}px,0,0)`;
    if (rowCurrent !== target) motionFrame = requestAnimationFrame(updateShowcaseMotion);
  };
  const queueShowcaseMotion = () => {
    if (motionEnabled && !motionFrame) motionFrame = requestAnimationFrame(updateShowcaseMotion);
  };
  const measureShowcaseMotion = () => {
    motionEnabled = mode === 'showcase' && !motionPreference.matches && motionViewport.matches;
    section.dataset.showcaseMotion = String(motionEnabled);
    cancelAnimationFrame(motionFrame);motionFrame = 0;lastMotionTime = 0;
    timeline.style.removeProperty('transform');
    if (!motionEnabled) return;
    timeline.scrollLeft = 0;
    const top = section.getBoundingClientRect().top + scrollY;
    scrollStart = top - innerHeight * .2;
    scrollEnd = Math.max(scrollStart + 1, top + section.offsetHeight - innerHeight);
    // The reference's start percentage assumes 27vw cards. Our retained cards
    // are wider: use the viewport edge so entry does not traverse empty space.
    rowStart = content.clientWidth * (innerWidth > 1025 ? 1.05 : 1.15);
    rowEnd = Math.min(0, content.clientWidth - timeline.scrollWidth);
    const progress = Math.max(0, Math.min(1, (scrollY - scrollStart) / (scrollEnd - scrollStart)));
    rowCurrent = rowStart + (rowEnd - rowStart) * Math.min(1, progress / .88);
    updateShowcaseMotion();
  };
  const scrollToCompany = index => {
    if (!motionEnabled) {
      cards[index].scrollIntoView({block:'nearest', inline:'center', behavior:motionPreference.matches ? 'instant' : 'smooth'});
      return;
    }
    // Seek the same scroll-driven track for buttons and keyboard navigation.
    const targetX = content.clientWidth / 2 - cards[index].offsetLeft - cards[index].offsetWidth / 2;
    const progress = Math.max(0, Math.min(1, (rowStart - targetX) / (rowStart - rowEnd)));
    window.scrollTo({top:scrollStart + progress * .88 * (scrollEnd - scrollStart), behavior:'smooth'});
  };
  const selectCompany = (index, focus = false, scroll = false) => {
    active = index;
    [...tablist.children].forEach((button, i) => {
      button.setAttribute('aria-selected', String(i === active));
      button.tabIndex = i === active ? 0 : -1;
      cards[i].hidden = (mode === 'tabs' || mode === 'stack') && i !== active;
      cards[i].dataset.highlighted = String(i === active);
    });
    if (focus) tablist.children[index].focus();
    counter.textContent = `${active + 1} / ${cards.length} · ${companies[active]}`;
    if (scroll && mode === 'showcase') scrollToCompany(index);
  };
  previous.addEventListener('click', () => selectCompany((active + cards.length - 1) % cards.length, false, true));
  next.addEventListener('click', () => selectCompany((active + 1) % cards.length, false, true));
  cards.forEach((card, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.id = `v2-exp-tab-${index}`;
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-controls', card.id);
    const name = document.createElement('span');
    name.textContent = companies[index];
    const role = document.createElement('small');
    role.textContent = firstRoles[index];
    button.append(name, role);
    button.addEventListener('click', () => selectCompany(index));
    button.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % cards.length;
      else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + cards.length - 1) % cards.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = cards.length - 1;
      if (next !== undefined) { event.preventDefault(); selectCompany(next, true); }
    });
    tablist.append(button);
  });
  const choose = (next, remember = false) => {
    mode = next;
    section.dataset.experienceLayout = mode;
    tablist.hidden = mode !== 'tabs';
    deckControls.hidden = mode !== 'stack' && mode !== 'showcase';
    if (mode === 'showcase') {
      timeline.tabIndex = 0;
      timeline.setAttribute('role', 'region');
      timeline.setAttribute('aria-label', 'Experience cards, scroll down or use arrow keys to browse');
    } else {
      timeline.removeAttribute('tabindex');timeline.removeAttribute('role');timeline.removeAttribute('aria-label');
    }
    options.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.layout === mode)));
    cards.forEach((card, index) => {
      if (mode === 'tabs') {
        card.setAttribute('role', 'tabpanel');
        card.setAttribute('aria-labelledby', `v2-exp-tab-${index}`);
        card.tabIndex = 0;
      } else {
        card.removeAttribute('role');card.removeAttribute('aria-labelledby');card.removeAttribute('tabindex');
      }
      const folded = mode === 'cards' || mode === 'accordion' || mode === 'showcase';
      card.querySelector('.v2-exp-disclosure').open = !folded;
      card.dataset.expanded = String(!folded);
    });
    selectCompany(active);
    if (remember) {
      const url = new URL(location.href);
      url.searchParams.set('experienceLayout', mode);
      history.replaceState(history.state, '', url);
    }
    measureShowcaseMotion();
  };
  for (const layout of modes) {
    const button = document.createElement('button');
    button.type = 'button';button.dataset.layout = layout;
    button.textContent = layout[0].toUpperCase() + layout.slice(1);
    button.addEventListener('click', () => choose(layout, true));
    options.append(button);
  }
  const head = document.createElement('div');
  head.className = 'v2-exp-heading';
  head.append(section.querySelector('.section-h'), options);
  timeline.before(head);
  const content = document.createElement('div');
  content.className = 'v2-exp-content';
  timeline.before(content);content.append(tablist,deckControls,timeline);
  cards.forEach((card, index) => {
    card.addEventListener('pointerenter', () => { if (mode === 'showcase') selectCompany(index); });
    card.addEventListener('focusin', () => {
      if (mode !== 'showcase') return;
      selectCompany(index);
      const bounds = card.getBoundingClientRect();
      const frame = content.getBoundingClientRect();
      if (motionEnabled && (bounds.left < frame.left || bounds.right > frame.right)) scrollToCompany(index);
    });
  });
  timeline.addEventListener('keydown', event => {
    if (mode !== 'showcase' || event.target !== timeline) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();selectCompany((active + (event.key === 'ArrowRight' ? 1 : cards.length - 1)) % cards.length, false, true);
    }
  });
  window.addEventListener('scroll', queueShowcaseMotion, {passive:true});
  window.addEventListener('resize', measureShowcaseMotion);
  window.addEventListener('v2-layout-settled', measureShowcaseMotion);
  motionPreference.addEventListener('change', measureShowcaseMotion);
  motionViewport.addEventListener('change', measureShowcaseMotion);
  // Font/image layout settles after the initial DOM adapter has run.
  document.fonts.ready.then(measureShowcaseMotion);
  window.addEventListener('load', measureShowcaseMotion, {once:true});
  const requested = new URLSearchParams(location.search).get('experienceLayout');
  choose(modes.includes(requested) ? requested : 'timeline');
})();
