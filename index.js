const checklist = document.querySelectorAll('#checklist li');
const toggleButton = document.querySelector('#toggle-last');
const statusText = document.querySelector('#status');

function completedCount() {
  return [...checklist].filter(item => item.dataset.done === 'true').length;
}

function renderStatus() {
  statusText.textContent = `${completedCount()} of ${checklist.length} items complete`;
}

function toggleLastItem() {
  const lastItem = checklist[checklist.length - 1];
  lastItem.dataset.done = lastItem.dataset.done === 'true' ? 'false' : 'true';
  renderStatus();
}

toggleButton.addEventListener('click', toggleLastItem);
renderStatus();
