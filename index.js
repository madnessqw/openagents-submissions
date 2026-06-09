const ring = document.querySelector('#ring');
const valueText = document.querySelector('#progress-value');
const button = document.querySelector('#advance');
const message = document.querySelector('#message');

let progress = 25;

function renderProgress() {
  ring.style.setProperty('--progress', `${progress}%`);
  valueText.textContent = `${progress}%`;
  message.textContent = progress === 100
    ? 'Progress complete and ready for delivery.'
    : 'Progress is ready for review.';
}

button.addEventListener('click', () => {
  progress = progress >= 100 ? 25 : progress + 25;
  renderProgress();
});

renderProgress();
