const beaconDot = document.getElementById('beaconDot');
const statusLabel = document.getElementById('statusLabel');
const statusHint = document.getElementById('statusHint');
const eventLog = document.getElementById('eventLog');

const readyBtn = document.getElementById('readyBtn');
const busyBtn = document.getElementById('busyBtn');
const resetBtn = document.getElementById('resetBtn');

function setStatus(nextStatus, hint) {
  const normalized = nextStatus.toLowerCase();
  beaconDot.className = `dot ${normalized}`;
  statusLabel.textContent = nextStatus;
  statusHint.textContent = hint;
  eventLog.textContent = `Last event: ${nextStatus} at ${new Date().toLocaleTimeString()}`;
}

readyBtn.addEventListener('click', () => {
  setStatus('Ready', 'The final smoke card is ready for review.');
});

busyBtn.addEventListener('click', () => {
  setStatus('Busy', 'The beacon is processing a pretend task.');
});

resetBtn.addEventListener('click', () => {
  beaconDot.className = 'dot idle';
  statusLabel.textContent = 'Idle';
  statusHint.textContent = 'Waiting for a status change.';
  eventLog.textContent = 'No events yet.';
});
