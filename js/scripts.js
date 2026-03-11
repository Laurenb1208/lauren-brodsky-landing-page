/* ── Hero staggered load animation ── */
document.addEventListener('DOMContentLoaded', () => {
  const heroEls = document.querySelectorAll('.hero-animate');
  heroEls.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 150 + i * 160);
  });
});

/* ── Scroll progress bar ── */
const progressBar = document.getElementById('scroll-progress');

function updateProgress() {
  const scrolled = window.scrollY;
  const total = document.body.scrollHeight - window.innerHeight;
  progressBar.style.width = (scrolled / total * 100) + '%';
}

window.addEventListener('scroll', updateProgress, { passive: true });

/* ── Hero parallax ── */
const heroImg = document.querySelector('#hero img');
const hero = document.getElementById('hero');

function updateParallax() {
  if (hero.getBoundingClientRect().bottom > 0) {
    heroImg.style.transform = 'translateY(' + (window.scrollY * 0.18) + 'px)';
  }
}

window.addEventListener('scroll', updateParallax, { passive: true });

/* ── Intersection Observer ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    el.classList.add('visible');
    observer.unobserve(el);
  });
}, { threshold: 0.12 });

/* Section headings */
document.querySelectorAll('h2').forEach(el => observer.observe(el));

/* About paragraphs */
document.querySelectorAll('#about p').forEach((el, i) => {
  el.classList.add('fade-up');
  el.style.transitionDelay = (i * 80) + 'ms';
  observer.observe(el);
});

/* Education card */
document.querySelectorAll('.education-item').forEach((el, i) => {
  el.classList.add('fade-up');
  el.style.transitionDelay = (i * 100) + 'ms';
  observer.observe(el);
});

/* Whole section fade-ups (about, education, contact) */
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* Experience cards stagger */
const expObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.experience-item').forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), i * 140);
    });
    expObserver.unobserve(entry.target);
  });
}, { threshold: 0.1 });

expObserver.observe(document.getElementById('experience'));

/* Project cards stagger */
const projObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.experience-item').forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), i * 140);
    });
    projObserver.unobserve(entry.target);
  });
}, { threshold: 0.1 });

projObserver.observe(document.getElementById('projects'));

/* Skill tags stagger */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll('.skill-tag').forEach((tag, i) => {
      setTimeout(() => tag.classList.add('visible'), i * 55);
    });
    skillObserver.unobserve(entry.target);
  });
}, { threshold: 0.1 });

skillObserver.observe(document.getElementById('skills'));

/* Contact links stagger */
const contactObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll('.contact-links a').forEach((link, i) => {
      setTimeout(() => link.classList.add('visible'), i * 100);
    });
    contactObserver.unobserve(entry.target);
  });
}, { threshold: 0.1 });

contactObserver.observe(document.getElementById('contact'));
