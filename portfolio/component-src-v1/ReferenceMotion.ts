import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Motion observed in the public Elena Voss preview: Copy (79921),
// Footer (13642), and the rolling-label Button (71215). Existing content stays intact.
export function startReferenceMotion() {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  const media = gsap.matchMedia();
  media.add('(prefers-reduced-motion: no-preference)', () => {
    const splits: SplitText[] = [];
    const headings = document.querySelectorAll<HTMLElement>('#about .about-h, #experience .section-h, #work>.section-h, #education>.section-h, #contact h2');
    const paragraphs = document.querySelectorAll<HTMLElement>('.hero-summary .intro-strip>p, #about .about-body>p, #contact .lede');
    const reveal = (element: HTMLElement, lines: boolean) => {
      element.classList.remove('reveal');
      const split = SplitText.create(element, {
        type: lines ? 'lines' : 'lines,chars',
        mask: lines ? 'lines' : 'chars',
        charsClass: 'v2-copy-char', linesClass: 'v2-copy-line',
        autoSplit: true,
        onSplit(self) {
          if (!lines) self.masks.forEach(mask => {
            mask.style.paddingInline = '.04em';mask.style.marginInline = '-.04em';mask.style.boxSizing = 'content-box';
          });
          return gsap.fromTo(lines ? self.lines : self.chars, {yPercent:100}, {
            yPercent:0, duration:.5, stagger:lines ? .1 : .015, ease:'power3.out',
            scrollTrigger:{trigger:element,start:'top 85%',once:true}
          });
        }
      });
      splits.push(split);
    };
    headings.forEach(element => reveal(element,false));
    paragraphs.forEach(element => reveal(element,true));
    document.querySelector('#about .about-body')?.classList.remove('reveal');
    // Same footer parallax as the reference, restricted to desktop.
    const footer = document.querySelector<HTMLElement>('.v2-ending');
    const panel = document.querySelector<HTMLElement>('#contact');
    const desktop = gsap.matchMedia();
    desktop.add('(min-width:1026px)', () => {
      if (footer && panel) gsap.fromTo(panel,{yPercent:20},{yPercent:0,ease:'power1.out',scrollTrigger:{trigger:footer,start:'top 60%',end:'bottom bottom',scrub:true}});
    });
    let refreshFrame = 0;
    const refresh = () => {
      cancelAnimationFrame(refreshFrame);
      refreshFrame = requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        window.dispatchEvent(new Event('v2-layout-settled'));
      });
    };
    // Folder sizing and experience options can change page height after mount.
    // Keep downstream text/footer triggers aligned with the real layout.
    const layoutObserver = new ResizeObserver(refresh);
    layoutObserver.observe(document.querySelector('main')!);
    layoutObserver.observe(document.querySelector('#experience')!);
    refresh();
    return () => {cancelAnimationFrame(refreshFrame);layoutObserver.disconnect();desktop.revert();splits.forEach(split=>split.revert());};
  });
  const buttons = document.querySelectorAll<HTMLElement>('.contact-pill, .v2-contact-cta, .hero-browse');
  buttons.forEach(button => {
    // Wrap only the existing label text; links, dots and arrows stay in place.
    const text = [...button.childNodes].find(node=>node.nodeType===Node.TEXT_NODE && node.textContent?.trim());
    if (!text) return;
    const label = text.textContent!.trim();
    button.setAttribute('aria-label', button.getAttribute('aria-label') || label);
    const wrapper = document.createElement('span');
    wrapper.className='v2-rolling-label';wrapper.setAttribute('aria-hidden','true');
    [...label].forEach((char,index)=>{
      const span=document.createElement('span');span.textContent=char;
      span.style.setProperty('--char-delay',`${index*.01}s`);wrapper.append(span);
    });
    text.replaceWith(wrapper);
  });
  document.body.dataset.referenceMotion='ready';
}
