// ================= SCROLL SUAVE =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ================= ANIMAÇÃO FADE-IN DAS SEÇÕES =================
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => observer.observe(section));

// ================= PULSO NEON =================
function neonPulse() {
  const neonElements = document.querySelectorAll('.neon-text, .neon-btn');
  neonElements.forEach(el => {
    const glow = Math.random() * 10 + 5; // variação de brilho
    el.style.textShadow = `
      0 0 ${glow}px #0ff,
      0 0 ${glow * 2}px #0ff,
      0 0 ${glow * 4}px #0ff
    `;
  });
}

// chama neonPulse a cada 800ms
setInterval(neonPulse, 800);

// ================= OPCIONAL: ANIMAÇÃO SUAVE PARA BOTÃO =================
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'translateY(-3px)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translateY(0)';
  });
});
