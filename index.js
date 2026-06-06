function formatUtcTimestamp(date = new Date()) {
  return date.toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, ' UTC');
}

function refreshTimestamp() {
  const timestamp = document.getElementById('timestamp');
  const statusText = document.getElementById('status-text');
  if (!timestamp || !statusText) return;

  const now = new Date();
  timestamp.dateTime = now.toISOString();
  timestamp.textContent = formatUtcTimestamp(now);
  statusText.textContent = 'Ready for Review';
}

document.getElementById('refresh-time')?.addEventListener('click', refreshTimestamp);
refreshTimestamp();
