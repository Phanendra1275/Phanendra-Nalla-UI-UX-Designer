'use strict';

const imageBase = 'https://framerusercontent.com/images/';
const portraits = [
  ['assets/hero-project-1.png', 'Cinematic fantasy landscape artwork'],
  ['assets/hero-project-2.jpg', 'Paper plane and imagination artwork'],
  ['assets/hero-project-3.jpg', 'Chess strategy illustration'],
  ['assets/hero-project-4.jpg', 'Archery target illustration'],
];
const projects = [
  {name:'Dental Clinic', subtitle:'Website Redesign', image:'assets/project-1-cover.png', description:'A user-centric website redesign for a modern dental clinic, focused on clear services, easy appointment booking, and a reassuring care experience.', href:'https://www.figma.com/design/M7vGojGUsKQ5XSWZDTBl3q/Phanendra-Portfolio--Projects-?node-id=130-2&t=ZoYvzk1r5DcjyiD2-1', action:'View project in Figma'},
  {name:'Lavix', subtitle:'Virtual Try On', image:'assets/project-2-cover.png', description:'A smart, immersive virtual try-on platform for modern retailers, helping customers explore products and shop with confidence across devices.', href:'https://www.figma.com/design/M7vGojGUsKQ5XSWZDTBl3q/Phanendra-Portfolio--Projects-?node-id=130-2&t=ZoYvzk1r5DcjyiD2-1', action:'View project in Figma'},
  {name:'SKML Jewellery', subtitle:'Jewellery E-commerce Platform', image:'assets/project-3-cover.png', description:'An elegant jewellery e-commerce experience that helps customers discover signature pieces, explore collections, and shop with confidence across desktop and mobile.', href:'https://www.figma.com/design/M7vGojGUsKQ5XSWZDTBl3q/Phanendra-Portfolio--Projects-?node-id=130-2&t=ZoYvzk1r5DcjyiD2-1', action:'View project in Figma'},
];
const testimonials = [
  {name:'Dental Clinic Client', role:'Freelance website project', quote:'Phanendra turned our dental website into a clear, reassuring experience. The service information feels easy to scan, and the appointment journey is much more straightforward for patients.'},
  {name:'Lavix Client', role:'Freelance product concept', quote:'Phanendra brought structure to a complex virtual try-on experience. The screens feel modern and intuitive, helping shoppers explore products with more confidence across devices.'},
  {name:'SKML Jewellery Client', role:'Freelance e-commerce project', quote:'Phanendra created a refined jewellery shopping experience that feels premium without being difficult to use. The collections, product flow, and mobile layouts are thoughtfully organised.'},
  {name:'Design Collaborator', role:'Freelance project partner', quote:'Phanendra is collaborative, detail-focused, and quick to turn feedback into polished design decisions. He balances visual craft with practical user flows throughout the project.'},
];

// Duplicate only the visual track; assistive technology reads each item once.
function fillTrack(id, markup) {
  const track = document.getElementById(id);
  track.innerHTML = markup;
  Array.from(track.children).forEach(child => {
    const duplicate = child.cloneNode(true);
    duplicate.setAttribute('aria-hidden', 'true');
    track.append(duplicate);
  });
}
fillTrack('portraits', portraits.map(([image,label]) => `<figure class="portrait-card"><img src="${image.startsWith('assets/') ? image : imageBase + image}" alt="${label}" width="680" height="500"><figcaption>${label}</figcaption></figure>`).join(''));
fillTrack('skills', ['Product strategist','Creative designer','Illustrator','Branding designer','UX designer'].map(skill=>`<span class="skill"><b aria-hidden="true">＊</b>${skill}</span>`).join(''));
document.getElementById('projects').innerHTML = projects.map(project => `
  <article class="project">
    <a class="project-image" style="display:block" href="${project.href}" target="_blank" rel="noopener noreferrer" aria-label="${project.action || `View ${project.name} case study`}"><img src="${project.image.startsWith('assets/') ? project.image : imageBase + project.image}" alt="${project.name} interface design presentation" loading="lazy" width="1600" height="594"></a>
    <div class="project-content"><div><h3><strong>${project.name}:</strong> ${project.subtitle}</h3><p>${project.description}</p></div>
    <a class="button" href="${project.href}" target="_blank" rel="noopener noreferrer" aria-label="${project.action || `Read full ${project.name} case study`}">${project.action || 'Read full case study'} <span aria-hidden="true">↗</span></a></div>
  </article>`).join('');
function gallery(id, images, loop = true) {
  const isGraphicsGallery = id === 'graphics';
  const markup = images.map(([image,alt])=> isGraphicsGallery
    ? `<figure class="graphics-card"><span class="graphics-card-mask"><img src="${imageBase}${image}" alt="${alt}" loading="eager" width="330" height="360"></span></figure>`
    : `<figure><img src="${imageBase}${image}" alt="${alt}" loading="lazy" width="330" height="360"></figure>`
  ).join('');
  if (loop) fillTrack(id, markup);
  else document.getElementById(id).innerHTML = markup;
}
const showreelArtwork = [
  ['nBqNY8L8IU281ReiPl3B1tlEWcc.png','Onam celebration graphic'],
  ['C3wMljuG2Zs2H6WPiwqSsd3ts.png','Festive brand illustration'],
  ['nCMXwDUUIBdSCeQYk5wbu241MrU.png','Social campaign design'],
  ['w6fmbgMIO4Ibfg29DQCT3cOLQFY.png','Promotional graphic design'],
  ['Qtsv1HAIYPwULkjRjxNv3LFg0og.png','Editorial graphic design'],
];
gallery('artwork-top', showreelArtwork);
gallery('artwork-bottom', [...showreelArtwork.slice(3), ...showreelArtwork.slice(0, 3)]);
gallery('graphics', [
  ['j8LL1MwRgUzMcMBs0HmHcKMhBg.png','Swiggy Fast and Delicious campaign'],
  ['R302skll6nmcZItcBqw8l4kXeGQ.png','Swiggy Match Day Meal campaign'],
  ['BqrSPGHRnMZg6NcAB3Ai6wf0pBU.png','Swiggy festive food campaign'],
  ['3b1v9PFOjflznbz9Gf1DlvNCR44.png','Swiggy Fire Up Your Appetite campaign'],
  ['ToDaA27vr3ZuL6IKffJEsHAEE.png','Swiggy food celebration campaign'],
  ['6KxITf5yE4y1FZ3X4amAQj4dZ8.png','Swiggy seasonal food campaign'],
], false);
fillTrack('testimonials', testimonials.map(person=>`<figure class="testimonial"><figcaption class="person"><span class="avatar" aria-hidden="true">${person.name[0]}</span><div><h3>${person.name}</h3><p>${person.role}</p></div></figcaption><blockquote>“${person.quote}”</blockquote></figure>`).join(''));

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
function closeMenu() {
  menuButton.setAttribute('aria-expanded','false');
  menuButton.setAttribute('aria-label','Open navigation');
  nav.classList.remove('is-open');
}
menuButton.addEventListener('click',()=>{
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded',String(open));
  menuButton.setAttribute('aria-label',open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('is-open',open);
});
nav.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('.navigation'))closeMenu();});

// Section links ease through the one-page portfolio rather than jumping abruptly.
const scrollReducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let navigationAnimation = 0;
function easeInOutCubic(progress) {
  return progress < .5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}
function glideToSection(target) {
  cancelAnimationFrame(navigationAnimation);
  const start = window.scrollY;
  const destination = Math.max(0, target.getBoundingClientRect().top + start - 94);
  const distance = destination - start;
  const duration = Math.min(1150, Math.max(520, Math.abs(distance) * .42));
  const startedAt = performance.now();
  const step = now => {
    const elapsed = Math.min(1, (now - startedAt) / duration);
    window.scrollTo(0, start + distance * easeInOutCubic(elapsed));
    if (elapsed < 1) navigationAnimation = requestAnimationFrame(step);
  };
  navigationAnimation = requestAnimationFrame(step);
}
document.querySelectorAll('.navigation a[href^="#"], .footer:not(.footer-legacy) a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.hash);
    if (!target || scrollReducedMotion.matches) return;
    event.preventDefault();
    history.pushState(null, '', link.hash);
    glideToSection(target);
  });
});
const sectionObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    nav.querySelectorAll('a[href^="#"]').forEach(link=>{
      if(link.hash===`#${entry.target.id}`)link.setAttribute('aria-current','page');
      else link.removeAttribute('aria-current');
    });
  });
},{rootMargin:'-15% 0px -55% 0px'});
document.querySelectorAll('#home,#about,#works').forEach(section=>sectionObserver.observe(section));
document.getElementById('year').textContent = new Date().getFullYear();

// Deterministic distribution keeps the particle composition stable on refresh.
const starField = document.querySelector('.stars');
for (let i = 0; i < 65; i++) {
  const particle = document.createElement('i');
  particle.className = 'particle';
  particle.style.cssText = `--x:${(i * 61.803) % 100}%;--y:${(i * 37.19) % 100}%;--size:${i % 3 === 0 ? 2 : 1}px;--duration:${7 + i % 9}s;--delay:-${i % 13}s`;
  starField.append(particle);
}

// Reversible portrait fan: the photos open as the stage rises through the viewport.
const portraitStage = document.querySelector('.portrait-stage');
const portraitReducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let portraitFramePending = false;
function updatePortraitSpread() {
  portraitFramePending = false;
  const top = portraitStage.getBoundingClientRect().top;
  const start = innerHeight * .94;
  const end = innerHeight * .43;
  const progress = portraitReducedMotion.matches ? 1 : Math.max(0, Math.min(1, (start - top) / (start - end)));
  portraitStage.style.setProperty('--spread', progress.toFixed(4));
}
function queuePortraitSpread() {
  if (!portraitFramePending) {
    portraitFramePending = true;
    requestAnimationFrame(updatePortraitSpread);
  }
}
addEventListener('scroll', queuePortraitSpread, {passive:true});
addEventListener('resize', queuePortraitSpread, {passive:true});
portraitReducedMotion.addEventListener('change', queuePortraitSpread);
updatePortraitSpread();

// Case-study cards form a reversible stack. Every card stays fully visible and interactive;
// depth comes from position and scale only, never a dimming overlay.
const projectCards = Array.from(document.querySelectorAll('.project'));
const projectReducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let projectFramePending = false;
projectCards.forEach((card, index) => card.style.setProperty('--card-index', String(index + 1)));
function updateProjectStack() {
  projectFramePending = false;
  if (innerWidth <= 700 || projectReducedMotion.matches) {
    projectCards.forEach(card => {
      card.style.removeProperty('--stack-scale');
      card.style.removeProperty('--stack-lift');
      card.style.removeProperty('pointer-events');
    });
    return;
  }
  const stickyTop = 112;
  // Give every handoff a longer scroll distance so the stack feels unhurried.
  const revealStart = innerHeight * 1.1;
  projectCards.forEach((card, index) => {
    const incoming = projectCards[index + 1];
    const incomingTop = incoming ? incoming.getBoundingClientRect().top : revealStart;
    const progress = incoming ? Math.max(0, Math.min(1, (revealStart - incomingTop) / (revealStart - stickyTop))) : 0;
    // A restrained transform keeps the outgoing study readable behind the next one.
    card.style.setProperty('--stack-scale', (1 - progress * .052).toFixed(4));
    card.style.setProperty('--stack-lift', `${Math.round(-progress * 14)}px`);
    card.style.pointerEvents = 'auto';
  });
}
function queueProjectStack() {
  if (!projectFramePending) {
    projectFramePending = true;
    requestAnimationFrame(updateProjectStack);
  }
}
addEventListener('scroll', queueProjectStack, {passive:true});
addEventListener('resize', queueProjectStack, {passive:true});
projectReducedMotion.addEventListener('change', queueProjectStack);
updateProjectStack();

// Graphical works follow the reading direction: down the page moves the gallery right and zooms it out.
const graphicsSection = document.querySelector('.graphics');
const graphicsArtwork = graphicsSection.querySelector('.artwork');
const graphicsReducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let graphicsFramePending = false;
function updateGraphicsMotion() {
  graphicsFramePending = false;
  if (graphicsReducedMotion.matches) {
    graphicsSection.style.removeProperty('--graphics-x');
    graphicsSection.style.removeProperty('--graphics-scale');
    return;
  }
  const bounds = graphicsSection.getBoundingClientRect();
  const firstCard = graphicsArtwork.querySelector('figure');
  const cardStride = firstCard.offsetWidth + 24;
  const horizontalDistance = cardStride * 3;
  const verticalDistance = Math.max(1200, innerWidth * .94);
  const progress = Math.max(0, Math.min(1, -bounds.top / verticalDistance));
  graphicsSection.style.setProperty('--graphics-x', `${(70 - progress * horizontalDistance).toFixed(0)}px`);
  graphicsSection.style.setProperty('--graphics-scale', (1.035 - progress * .035).toFixed(3));
}
function queueGraphicsMotion() {
  if (!graphicsFramePending) {
    graphicsFramePending = true;
    requestAnimationFrame(updateGraphicsMotion);
  }
}
addEventListener('scroll', queueGraphicsMotion, {passive:true});
addEventListener('resize', queueGraphicsMotion, {passive:true});
graphicsReducedMotion.addEventListener('change', queueGraphicsMotion);
updateGraphicsMotion();

// Small entrance cues improve hierarchy without competing with the portfolio work.
const revealReducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const revealTargets = document.querySelectorAll(
  '.about-copy, .portrait-stage, .section-heading, .showreel-marquees, .testimonials-marquee, .graphics .artwork, .resume-cta, .footer-profile, .footer .contact'
);
if (!revealReducedMotion.matches && 'IntersectionObserver' in window) {
  revealTargets.forEach(target => target.classList.add('reveal'));
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
  revealTargets.forEach(target => revealObserver.observe(target));
}
