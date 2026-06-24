const STORAGE_KEY = 'mini-toggle-card-state';

function getState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw === 'true';
    } catch (_) {
        return false;
    }
}

function setState(value) {
    try {
        localStorage.setItem(STORAGE_KEY, value ? 'true' : 'false');
    } catch (_) {
        // ignore storage errors
    }
}

function updateUI(active) {
    const statusValue = document.getElementById('status-value');
    const toggleBtn = document.getElementById('toggle-btn');

    if (active) {
        statusValue.textContent = 'Active';
        statusValue.classList.remove('inactive');
        statusValue.classList.add('active');
        toggleBtn.textContent = 'Turn Off';
    } else {
        statusValue.textContent = 'Inactive';
        statusValue.classList.remove('active');
        statusValue.classList.add('inactive');
        toggleBtn.textContent = 'Turn On';
    }
}

function init() {
    let active = getState();
    updateUI(active);

    document.getElementById('toggle-btn').addEventListener('click', () => {
        active = !active;
        setState(active);
        updateUI(active);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
