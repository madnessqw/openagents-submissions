const pill = document.querySelector('#status-pill');
const button = document.querySelector('#toggle-status');
const message = document.querySelector('#message');

function setStatus(nextStatus) {
  const reviewed = nextStatus === 'reviewed';
  pill.textContent = reviewed ? 'Reviewed' : 'Ready';
  pill.className = `pill ${reviewed ? 'reviewed' : 'ready'}`;
  message.textContent = reviewed
    ? 'Reviewed state is visible and interactive.'
    : 'Ready for OpenAgents review.';
}

button.addEventListener('click', () => {
  const current = pill.classList.contains('reviewed') ? 'ready' : 'reviewed';
  setStatus(current);
});

setStatus('ready');
