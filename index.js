const timerBadge = document.querySelector('#timer-badge');
const addTimeButton = document.querySelector('#add-time');
const message = document.querySelector('#message');

let seconds = 15;

function formatTimer(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const secs = (totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${secs}`;
}

function renderTimer() {
  timerBadge.textContent = formatTimer(seconds);
  message.textContent = `Timer set to ${seconds} seconds.`;
}

addTimeButton.addEventListener('click', () => {
  seconds = seconds >= 60 ? 15 : seconds + 15;
  renderTimer();
});

renderTimer();
