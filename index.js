const moods = [
  { icon: '☀️', text: 'Ready for Review' },
  { icon: '🌤️', text: 'Browser Check Clean' },
  { icon: '✅', text: 'No Dependencies' }
];
let moodIndex = 0;

function formatUtcTimestamp(date = new Date()) {
  return date.toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, ' UTC');
}

function renderMood() {
  const mood = moods[moodIndex];
  const icon = document.querySelector('.sun');
  const status = document.getElementById('status-text');
  const timestamp = document.getElementById('timestamp');
  if (icon) icon.textContent = mood.icon;
  if (status) status.textContent = mood.text;
  if (timestamp) {
    const now = new Date();
    timestamp.dateTime = now.toISOString();
    timestamp.textContent = formatUtcTimestamp(now);
  }
}

document.getElementById('cycle')?.addEventListener('click', () => {
  moodIndex = (moodIndex + 1) % moods.length;
  renderMood();
});

renderMood();
