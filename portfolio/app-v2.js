'use strict';

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const previewImages = {
  allcode: 'assets/allcode-launch-light-poster.jpg',
  voxvitals: 'assets/project-previews/voxvitals.webp',
  auriva: 'assets/project-previews/auriva.webp',
  gradintel: 'assets/project-previews/gradintel.webp'
};

const tracks = $$('.project-index .track');
const plainText = html => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent.trim();
};
const node = (tag, className, text) => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
};

// The original project controls still open the same complete case studies.
// Hover/focus also previews the project in the Elena-style showcase.
function previewProject(id) {
  const project = PROJECTS[id];
  if (!project) return;
  const track = tracks.find(el => el.dataset.id === id);
  tracks.forEach(el => el.classList.toggle('selected', el === track));
  $('#projectPanel').dataset.id = id;
  $('#projectPanel').setAttribute('aria-label', `Open ${project.title} case study`);
  $('#panelCategory').textContent = track ? [...track.querySelectorAll('.track-meta span')].map(span => span.textContent).join(' ') : project.tags.join(' · ');
  $('#panelNumber').textContent = project.num;
  const art = $('#panelArt');
  art.replaceChildren();
  if (previewImages[id]) {
    const img = node('img');
    img.src = previewImages[id];
    img.alt = `${project.title} — existing project preview`;
    img.width = 1440; img.height = 1000;
    art.append(img);
  } else {
    const presentation = node('div', 'panel-fallback');
    presentation.append(node('span', '', project.tags.join(' · ')), node('h3', '', track ? track.querySelector('.track-t').textContent : project.title), node('p', '', plainText(project.oneliner)));
    art.append(presentation);
  }
  let description = $('#projectPanel .panel-description');
  if (!description) {
    description = node('p', 'panel-description');
    $('#projectPanel').insertBefore(description, $('#projectPanel .panel-bottom'));
  }
  description.innerHTML = track ? track.querySelector('.track-d').innerHTML : project.oneliner;
}
tracks.forEach(track => {
  track.addEventListener('mouseenter', () => previewProject(track.dataset.id));
  track.addEventListener('focus', () => previewProject(track.dataset.id));
});
previewProject('aria');

let motionPaused = false;

const caseStudy = $('#projectDialog');
let projectTrigger = null;
function openModal(id, trigger) {
  const project = PROJECTS[id];
  if (!project) return;
  projectTrigger = trigger || document.activeElement;
  $('#mNum').textContent = project.num;
  $('#mTitle').textContent = project.title;
  $('#mOneliner').innerHTML = project.oneliner;
  $('#mTags').replaceChildren(...(project.tags || []).map(tag => node('span', '', tag)));
  $('#mBody').innerHTML = project.body;
  $('#mFoot').replaceChildren(...(project.links || []).map(link => {
    const a = node('a', link.primary ? '' : 'alt', link.label.replace(/↗\uFE0F?/g, '\u2197\uFE0E'));
    a.href = link.url; a.target = '_blank'; a.rel = 'noopener';
    return a;
  }));
  $('#hoverPreview').classList.remove('show');
  caseStudy.showModal();
  caseStudy.scrollTop = 0;
  document.body.classList.add('locked');
  $('#mClose').focus({preventScroll: true});
}
function closeModal() { caseStudy.close(); }
document.addEventListener('click', event => {
  const trigger = event.target.closest('[data-id]');
  if (trigger) openModal(trigger.dataset.id, trigger);
});
$('#mClose').addEventListener('click', closeModal);
caseStudy.addEventListener('click', event => {
  if (event.target !== caseStudy) return;
  const rect = caseStudy.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeModal();
});
caseStudy.addEventListener('close', () => {
  caseStudy.querySelectorAll('video').forEach(video => video.pause());
  document.body.classList.remove('locked');
  projectTrigger?.focus({preventScroll: true});
});

const drawer = $('#mobileDrawer');
const navToggle = $('#navToggle');
navToggle.addEventListener('click', () => {
  drawer.showModal();
  navToggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('locked');
  $('#menuClose').focus();
});
$('#menuClose').addEventListener('click', () => drawer.close());
drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.close()));
drawer.addEventListener('close', () => {
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('locked');
});

const tooltip = $('#hoverPreview');
if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
  $$('.compact-row').forEach(row => {
    row.addEventListener('mouseenter', () => {
      const project = PROJECTS[row.dataset.id];
      $('#hpEyebrow').textContent = project.num;
      $('#hpTitle').textContent = project.title;
      $('#hpDesc').textContent = plainText(project.oneliner).slice(0, 220);
      tooltip.classList.add('show');
    });
    row.addEventListener('mousemove', event => {
      const rect = tooltip.getBoundingClientRect();
      const x = Math.min(event.clientX + 20, innerWidth - rect.width - 16);
      const y = Math.max(16, Math.min(event.clientY + 20, innerHeight - rect.height - 16));
      tooltip.style.left = `${x}px`; tooltip.style.top = `${y}px`;
    });
    row.addEventListener('mouseleave', () => tooltip.classList.remove('show'));
  });
}

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    $$('#mobileDrawer a').forEach(a => {
      if (a.hash === `#${entry.target.id}`) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
  });
}, {rootMargin: '-15% 0px -65% 0px'});
$$('main section[id]').forEach(section => sectionObserver.observe(section));

if (!reducedMotion.matches) {
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); revealObserver.unobserve(entry.target);
    }
  }), {threshold: .05});
  $$('.page-section>h2, .about-body, .exp-card, .showcase, .edu-grid').forEach(el => {
    el.classList.add('reveal'); revealObserver.observe(el);
  });
}

let lastY = 0, framePending = false;
addEventListener('scroll', () => {
  if (framePending) return;
  framePending = true;
  requestAnimationFrame(() => {
    const y = scrollY;
    const header = $('#siteHeader');
    header.classList.toggle('scrolled', y > 100);
    if (Math.abs(y - lastY) > 4) header.classList.toggle('nav-hidden', y > 180 && y > lastY && !drawer.open);
    if (!reducedMotion.matches && !motionPaused && y < innerHeight) $('.hero-portrait').style.transform = `translateY(${y * .08}px)`;
    else $('.hero-portrait').style.transform = '';
    lastY = y; framePending = false;
  });
}, {passive:true});
