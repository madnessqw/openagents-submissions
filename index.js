const badge = document.querySelector('#signal-badge');
const button = document.querySelector('#cycle-signal');
const message = document.querySelector('#message');

const states = [
  { label: 'Stable', className: 'stable', message: 'Stable signal ready for review.' },
  { label: 'Review', className: 'review', message: 'Review signal is visible and interactive.' },
  { label: 'Ready', className: 'ready', message: 'Ready signal confirms the cycle works.' },
];

let currentIndex = 0;

function renderSignal() {
  const state = states[currentIndex];
  badge.textContent = state.label;
  badge.className = `badge ${state.className}`;
  message.textContent = state.message;
}

button.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % states.length;
  renderSignal();
});

renderSignal();
