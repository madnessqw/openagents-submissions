const countEl = document.getElementById('count');
const statusEl = document.getElementById('status');
const pulseBtn = document.getElementById('pulseBtn');
const resetBtn = document.getElementById('resetBtn');

let count = 0;

function render(message = 'Ready for review.') {
  countEl.textContent = String(count);
  statusEl.textContent = message;
}

pulseBtn.addEventListener('click', () => {
  count += 1;
  render(`Pulse ${count} added. Widget is interactive.`);
});

resetBtn.addEventListener('click', () => {
  count = 0;
  render('Counter reset. Ready for review.');
});

render();
