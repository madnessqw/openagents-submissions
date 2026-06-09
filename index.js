const queueState = document.querySelector('#queue-state');
const advanceButton = document.querySelector('#advance-queue');
const message = document.querySelector('#message');

const states = [
  { label: 'Queued', className: 'queued', message: 'Queued item is ready for review.' },
  { label: 'Reviewing', className: 'reviewing', message: 'Reviewing state is visible and interactive.' },
  { label: 'Ready', className: 'ready', message: 'Ready state confirms the queue cycle works.' },
];

let index = 0;

function renderQueueState() {
  const state = states[index];
  queueState.textContent = state.label;
  queueState.className = `badge ${state.className}`;
  message.textContent = state.message;
}

advanceButton.addEventListener('click', () => {
  index = (index + 1) % states.length;
  renderQueueState();
});

renderQueueState();
