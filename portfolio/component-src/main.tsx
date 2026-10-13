import * as React from 'react';
import { createRoot } from 'react-dom/client';
import GlassFolder from './vendor/glass-folder-cards';
import { CinematicLandingIntro } from './CinematicLandingIntro';
import { startReferenceMotion } from './ReferenceMotion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const portfolio = (window as any).portfolioV2;
const { projects, featured, images } = portfolio;

function useReducedMotion() {
  const [reduced, setReduced] = React.useState(matchMedia('(prefers-reduced-motion: reduce)').matches);
  React.useEffect(() => {
    const query = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return reduced;
}

function Landing() {
  const reduced = useReducedMotion();
  return <CinematicLandingIntro reduced={reduced} />;
}

function ProjectFolder({ item, index, compact = false }: { item: any; index: number; compact?: boolean }) {
  const cardRef = React.useRef<HTMLElement>(null);
  const maximumWidth = compact ? 160 : 270;
  const measureRef = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(maximumWidth);
  const [open, setOpen] = React.useState(false);
  const project = projects[item.id];
  React.useLayoutEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      // Reference portfolio panels rise into view as scrolling advances.
      // Animate the outer card only; the folder and its files keep their transforms.
      card.dataset.scrollEntrance = 'ready';
      const tween = gsap.fromTo(card, {opacity:0,y:compact ? 36 : 72}, {
        opacity:1,y:0,ease:'power2.inOut',
        scrollTrigger:{trigger:card,start:'top 95%',end:'top 65%',scrub:.45,invalidateOnRefresh:true}
      });
      const revealFocused = () => {
        tween.scrollTrigger?.kill();tween.kill();
        gsap.set(card,{clearProps:'transform,opacity,visibility'});
      };
      card.addEventListener('focusin',revealFocused,{once:true});
      return () => {card.removeEventListener('focusin',revealFocused);delete card.dataset.scrollEntrance;};
    });
    return () => media.revert();
  }, [compact]);
  React.useEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setWidth(Math.min(maximumWidth, entry.contentRect.width - 32)));
    observer.observe(el);
    return () => observer.disconnect();
  }, [maximumWidth]);
  const files = React.useMemo(() => [
    { name: 'Case study', meta: item.title, image: images[item.id] },
    ...project.links.map((link: any) => ({ name: link.label.replace(/\s*[↗→]$/, ''), meta: item.title, href: link.url, image: images[item.id] }))
  ], [item.id]);
  return <article ref={cardRef} className={'v2-project-card' + (compact ? ' v1-mini-project' : '') + (open ? ' folder-open' : '')} aria-labelledby={`v2-title-${item.id}`}>
    {!compact && <div className="v2-card-top"><span>{String(index + 1).padStart(2, '0')}</span><span>{item.category}</span></div>}
    <div className="v2-folder-stage" ref={measureRef}>
      <GlassFolder label={item.title} meta={`${files.length} resources`} tone="light" art="none" image={images[item.id]} appear={false}
        style={{
          '--gf-hover-lift': `${(compact ? -30 : -55) * 340 / width}px`,
          '--gf-open-lift': `${(compact ? -80 : -140) * 340 / width}px`,
          '--gf-open-spread': `${(compact ? 22 : 50) * 340 / width}px`,
          '--gf-open-stack': `${(compact ? 20 : 31) * 340 / width}px`
        } as React.CSSProperties}
        files={files} action="none" width={width} open={open} onOpenChange={setOpen}
        onFileSelect={(file) => {
          if (!file.href) portfolio.open(item.id, document.activeElement);
        }} />
    </div>
    <div className="v2-card-copy">
      <h3 id={`v2-title-${item.id}`}>{item.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: item.description }} />
    </div>
    <button type="button" className="v2-case-link" data-id={item.id} aria-label={`Open ${item.title} case study`}>
      {compact ? 'Case study' : 'Open full case study'} <span className="v2-project-arrow" aria-hidden="true">{'\u2197\uFE0E'}</span>
    </button>
  </article>;
}

function FeaturedProjects() {
  React.useLayoutEffect(() => {
    document.body.classList.add('v2-folders-ready');
    return () => document.body.classList.remove('v2-folders-ready');
  }, []);
  return <>
    <div className="v2-featured-grid">
      {featured.map((item: any, index: number) => <ProjectFolder key={item.id} item={item} index={index} />)}
    </div>
    <section className="v1-other-projects" aria-labelledby="v1-other-title">
      <div className="v1-other-heading">
        <h3 id="v1-other-title">More projects</h3>
      </div>
      <div className="v1-other-grid" data-layout="shelf">
        {portfolio.additional.map((item: any, index: number) => <ProjectFolder key={item.id} item={item} index={index + featured.length} compact />)}
      </div>
    </section>
  </>;
}

class ComponentBoundary extends React.Component<React.PropsWithChildren<{ fallback: string }>, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error: Error) { console.error('Portfolio component:', error); }
  render() { return this.state.failed ? <p className="v2-component-error">{this.props.fallback}</p> : this.props.children; }
}

function mount() {
  if (!portfolio) return;
  const showcase = document.querySelector('.showcase');
  if (!showcase) return;
  const hero = document.querySelector('#hero');
  if (hero) {
    hero.classList.add('cinematic-hero');
    createRoot(hero).render(<ComponentBoundary fallback="Anshul Raman"><Landing /></ComponentBoundary>);
  }
  const host = document.createElement('div');
  host.id = 'v2Featured';
  showcase.before(host);
  createRoot(host).render(<ComponentBoundary fallback=""><FeaturedProjects /></ComponentBoundary>);
  document.fonts.ready.then(() => requestAnimationFrame(startReferenceMotion));
}
// The classic scripts populate the original data and dialogs first.
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
else mount();
