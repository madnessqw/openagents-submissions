const notes = [
  { title: 'Ready for Review', body: 'No dependencies, no API, no build step.' },
  { title: 'Clean Worker Test', body: 'Fresh payout profile should be requested after payment.' },
  { title: 'Static Delivery', body: 'Reviewer can validate this with node --check and browser smoke.' }
];
let index = 0;

function formatUtcTimestamp(date = new Date()) {
  return date.toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, ' UTC');
}

function renderNote() {
  const note = notes[index];
  const title = document.getElementById('note-title');
  const body = document.getElementById('note-body');
  const timestamp = document.getElementById('timestamp');
  if (title) title.textContent = note.title;
  if (body) body.textContent = note.body;
  if (timestamp) {
    const now = new Date();
    timestamp.dateTime = now.toISOString();
    timestamp.textContent = formatUtcTimestamp(now);
  }
}

document.getElementById('swap-note')?.addEventListener('click', () => {
  index = (index + 1) % notes.length;
  renderNote();
});

renderNote();
