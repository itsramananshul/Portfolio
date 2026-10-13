import * as React from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

// Elena Voss public preview: diagonal image reveal first, character copy at 1s,
// supporting lines at 1.5s. Keep the existing portrait pixels and normal scrolling.

export function CinematicLandingIntro({ reduced }: { reduced: boolean }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (reduced) return;
    gsap.registerPlugin(SplitText);
    let cancelled = false;
    let ctx: gsap.Context | undefined;
    const splits: SplitText[] = [];
    const photo = container.querySelector<HTMLElement>('.cinematic-image-reveal')!;
    const name = container.querySelector<HTMLElement>('.cinematic-name')!;
    const supportingCopy = container.querySelector<HTMLElement>('.cinematic-card-copy>p')!;
    const start = () => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        const nameSplit = SplitText.create(name,{type:'lines,chars',mask:'chars',charsClass:'cinematic-copy-char'});
        const lineSplit = SplitText.create(supportingCopy,{type:'lines',mask:'lines'});
        splits.push(nameSplit,lineSplit);
        nameSplit.masks.forEach(mask=>{mask.style.paddingInline='.04em';mask.style.marginInline='-.04em';mask.style.boxSizing='content-box';});
        gsap.set([name,supportingCopy],{autoAlpha:1});
        gsap.set([...nameSplit.chars,...lineSplit.lines],{yPercent:100});
        const reveal = {value:-40};
        container.dataset.landingPhase='image';
        gsap.timeline()
          .to(reveal,{value:125,duration:3.5,ease:'power2.out',onUpdate:()=>photo.style.setProperty('--portrait-reveal',`${reveal.value}%`)},0)
          .fromTo(photo,{opacity:0},{opacity:1,duration:1.5,ease:'power2.out'},0)
          .call(()=>{container.dataset.landingPhase='name';},[],1)
          .to(nameSplit.chars,{yPercent:0,duration:.5,stagger:.015,ease:'power3.out'},1)
          .call(()=>{container.dataset.landingPhase='supporting';},[],1.5)
          .to(lineSplit.lines,{yPercent:0,duration:.5,stagger:.1,ease:'power3.out'},1.5)
          .call(()=>{container.dataset.landingPhase='complete';},[],3.5);
      },container);
    };
    // Begin the sequence only once the original portrait is decoded.
    const image = container.querySelector<HTMLImageElement>('.portrait-base')!;
    Promise.all([image.decode().catch(()=>{}),document.fonts.ready]).then(start);
    return () => {cancelled=true;ctx?.revert();splits.forEach(split=>split.revert());photo.style.removeProperty('--portrait-reveal');};
  }, [reduced]);

  return <div ref={containerRef} className={'cinematic-intro' + (reduced ? ' cinematic-static' : '')}>
    <div className="cinematic-grid" aria-hidden="true" />
    <div className="cinematic-photo-card">
      <div className="cinematic-image-reveal" aria-hidden="true"><div className="hero-portrait">
        <img className="portrait-base" src="assets/portrait.webp" alt="" width="1254" height="1254" fetchPriority="high" />
        <img className="portrait-natural" src="assets/portrait.webp" alt="" width="1254" height="1254" fetchPriority="high" />
      </div></div>
      <div className="cinematic-photo-shade" aria-hidden="true" />
      <div className="cinematic-card-copy">
        <h1 className="cinematic-name"><span className="cinematic-first">Anshul</span><span className="cinematic-last">Raman</span></h1>
        <p>writes software with an adversarial lens — studying how systems break.</p>
      </div>
    </div>
    <div className="hero-bottom"><a className="hero-browse" href="#work">Browse the projects <span aria-hidden="true">↘</span></a><span className="hero-caption">Cincinnati · OH</span></div>
  </div>;
}
