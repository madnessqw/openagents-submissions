function formatTimestamp(date = new Date()) {
  return date.toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, ' UTC');
}

function refreshTimestamp() {
  const timestamp = document.getElementById('timestamp');
  const statusText = document.getElementById('status-text');
  if (!timestamp || !statusText) return;
  timestamp.dateTime = new Date().toISOString();
  timestamp.textContent = formatTimestamp();
  statusText.textContent = 'Ready for review';
}

document.getElementById('stamp-button')?.addEventListener('click', refreshTimestamp);
refreshTimestamp();
