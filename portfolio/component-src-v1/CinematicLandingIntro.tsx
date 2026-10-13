import * as React from 'react';
import { gsap } from 'gsap';

// Adapted from the saved Cinematic Landing Hero by jahed.
// Retains its blur/clip text reveal, followed by the portrait reveal on entry.
// The page uses normal document scrolling throughout.

export function CinematicLandingIntro({ reduced }: { reduced: boolean }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (reduced) return;
    const ctx = gsap.context(() => {
      const first = container.querySelector('.cinematic-first');
      const last = container.querySelector('.cinematic-last');
      const photo = container.querySelectorAll('.hero-portrait img');
      const supportingCopy = container.querySelectorAll('.cinematic-card-copy>p');
      gsap.set(first, { autoAlpha: 0, y: 60, scale: 0.85, filter: 'blur(20px)', rotationX: -20 });
      gsap.set(last, { clipPath: 'inset(0 100% 0 0)' });
      gsap.set(photo, { autoAlpha: 0, y: 35, scale: 1.035, clipPath: 'inset(0 0 100% 0)' });
      gsap.set(supportingCopy, { autoAlpha: 0, y: 20 });
      gsap.timeline({ delay: 0.1 })
        .to(first, { duration: 1.1, autoAlpha: 1, y: 0, scale: 1, filter: 'blur(0px)', rotationX: 0, ease: 'expo.out' })
        .to(last, { duration: 0.95, clipPath: 'inset(0 0% 0 0)', ease: 'power4.inOut' }, 0.3)
        .to(supportingCopy, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, 0.65)
        .to(photo, { autoAlpha: 1, y: 0, scale: 1, clipPath: 'inset(0 0 0% 0)', duration: 1.25, ease: 'power3.out' }, 0.7);
    }, container);
    return () => ctx.revert();
  }, [reduced]);

  return <div ref={containerRef} className={'cinematic-intro' + (reduced ? ' cinematic-static' : '')}>
    <div className="cinematic-grid" aria-hidden="true" />
    <div className="cinematic-photo-card">
      <div className="hero-portrait" aria-hidden="true">
        <img className="portrait-base" src="assets/portrait.webp" alt="" width="1254" height="1254" fetchPriority="high" />
        <img className="portrait-natural" src="assets/portrait.webp" alt="" width="1254" height="1254" fetchPriority="high" />
      </div>
      <div className="cinematic-photo-shade" aria-hidden="true" />
      <div className="cinematic-card-copy">
        <h1 className="cinematic-name"><span className="cinematic-first">Anshul</span><span className="cinematic-last">Raman</span></h1>
        <p>writes software with an adversarial lens — studying how systems break.</p>
      </div>
    </div>
    <div className="hero-bottom"><a className="hero-browse" href="#work">Browse the projects <span aria-hidden="true">↘</span></a><span className="hero-caption">Cincinnati · OH</span></div>
  </div>;
}
