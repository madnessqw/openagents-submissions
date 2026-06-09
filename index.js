const dot = document.querySelector('#alert-dot');
const label = document.querySelector('#alert-label');
const button = document.querySelector('#cycle-alert');

const states = [
  { label: 'Idle', className: 'idle', message: 'No alert is active.' },
  { label: 'Review', className: 'review', message: 'Review alert is visible.' },
  { label: 'Ready', className: 'ready', message: 'Ready alert confirms the cycle works.' },
];

let currentIndex = 0;

function renderAlertDot() {
  const state = states[currentIndex];
  dot.className = `dot ${state.className}`;
  dot.setAttribute('aria-label', `${state.label} status`);
  label.textContent = state.message;
}

button.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % states.length;
  renderAlertDot();
});

renderAlertDot();
