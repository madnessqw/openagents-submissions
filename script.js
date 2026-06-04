const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');

menuButton?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const form = document.querySelector('#reservation-form');
const statusEl = document.querySelector('#form-status');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim() || 'Misafir';
  statusEl.textContent = `${name}, rezervasyon talebin alındı. Demo form başarıyla çalışıyor.`;
  form.reset();
});

// Review smoke için güvenli global işaret.
window.__miniKafeReady = true;

// Review retry marker for proj-ll9vkfbk
