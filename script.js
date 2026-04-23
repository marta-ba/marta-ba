// ===== Custom cursor =====
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');

if (cursor && ring && !('ontouchstart' in window)) {
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    ring.style.left   = e.clientX + 'px';
    ring.style.top    = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .project-card, .toolkit-card, .stat-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.transform = 'translate(-50%,-50%) scale(1.8)';
      ring.style.opacity   = '.15';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.opacity   = '.4';
    });
  });
} else if (cursor && ring) {
  cursor.style.display = 'none';
  ring.style.display   = 'none';
}

// ===== Reveal on scroll =====
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('show'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== Nav scroll effect =====
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ===== Project filter =====
function filterProjects(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card => {
    card.style.display = (cat === 'all' || card.dataset.cat === cat) ? 'flex' : 'none';
  });
}
window.filterProjects = filterProjects;

// ===== Hero name cascade: Marta → Blanco → Arévalo =====
(function () {
  const words = document.querySelectorAll('h1 .name-word');
  if (!words.length) return;
  const delays = [200, 700, 1200];
  words.forEach((w, i) => {
    setTimeout(() => w.classList.add('in'), delays[i] || (200 + i * 500));
  });
})();

// ===== Hero stats: progressive count-up =====
(function () {
  const cards = document.querySelectorAll('.hero-stats .stat-card');
  if (!cards.length) return;

  const animateNumber = (el) => {
    const target = parseFloat(el.dataset.target || '0');
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const value = Math.round(target * ease(p));
      el.innerHTML = value + (suffix ? `<span class="stat-suffix">${suffix}</span>` : '');
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  // Reveal cards one by one with count-up, starting after hero text appears
  const baseDelay = 1700;
  const stagger = 220;
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    card.style.transition = 'opacity .7s ease, transform .7s ease';
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
      card.classList.add('in');
      const numEl = card.querySelector('.stat-num');
      if (numEl) animateNumber(numEl);
    }, baseDelay + i * stagger);
  });
})();
