let count = 0;

function formatUtcTimestamp(date = new Date()) {
  return date.toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, ' UTC');
}

function render() {
  const countEl = document.getElementById('count');
  const timestampEl = document.getElementById('timestamp');
  const statusText = document.getElementById('status-text');
  if (countEl) countEl.textContent = String(count);
  if (timestampEl) {
    const now = new Date();
    timestampEl.dateTime = now.toISOString();
    timestampEl.textContent = formatUtcTimestamp(now);
  }
  if (statusText) statusText.textContent = 'Ready for Review';
}

document.getElementById('increment')?.addEventListener('click', () => {
  count += 1;
  render();
});

document.getElementById('reset')?.addEventListener('click', () => {
  count = 0;
  render();
});

render();
