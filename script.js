const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const form = document.querySelector('.newsletter-form');
const statusEl = document.querySelector('.form-status');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(form).get('email');
  statusEl.textContent = `${email} için abonelik kaydı alındı.`;
  statusEl.classList.add('ok');
  form.reset();
});
