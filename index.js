const INITIAL_SECONDS = 25;

const secondsEl = document.getElementById('seconds');
const statusEl = document.getElementById('status');
const startBtn = document.getElementById('startBtn');
const boostBtn = document.getElementById('boostBtn');
const resetBtn = document.getElementById('resetBtn');

let seconds = INITIAL_SECONDS;
let intervalId = null;

function render(message) {
  secondsEl.textContent = String(seconds).padStart(2, '0');
  if (message) statusEl.textContent = message;
}

function stopTimer() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function startTimer() {
  if (intervalId) return;
  render('Focus started. Countdown is running.');
  intervalId = setInterval(() => {
    seconds = Math.max(0, seconds - 1);
    if (seconds === 0) {
      stopTimer();
      render('Focus complete. Smoke test passed.');
      return;
    }
    render();
  }, 1000);
}

function boostTimer() {
  seconds += 10;
  render('+10 seconds added.');
}

function resetTimer() {
  stopTimer();
  seconds = INITIAL_SECONDS;
  render('Ready for review.');
}

startBtn.addEventListener('click', startTimer);
boostBtn.addEventListener('click', boostTimer);
resetBtn.addEventListener('click', resetTimer);

render('Ready for review.');
