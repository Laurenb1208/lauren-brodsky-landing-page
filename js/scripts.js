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
    heroImg.style.transform = 'translateY(' + (window.scrollY * 0.3) + 'px)';
  }
}

window.addEventListener('scroll', updateParallax, { passive: true });

/* ── Intersection Observer ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;

    if (el.classList.contains('fade-up')) {
      el.classList.add('visible');
    }

    if (el.id === 'skills') {
      document.querySelectorAll('.skill-tag').forEach((tag, i) => {
        setTimeout(() => tag.classList.add('visible'), i * 60);
      });
    }

    if (el.id === 'experience') {
      document.querySelectorAll('.experience-item').forEach((card, i) => {
        setTimeout(() => card.classList.add('visible'), i * 150);
      });
    }

    observer.unobserve(el);
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up, #skills, #experience').forEach(el => observer.observe(el));
