document.addEventListener('DOMContentLoaded', () => {
    const counterEl = document.getElementById('counter');
    const btn = document.getElementById('increment-btn');
    let count = 0;

    if (!counterEl || !btn) {
        console.error('Required elements not found');
        return;
    }

    btn.addEventListener('click', () => {
        count += 1;
        counterEl.textContent = String(count);
    });
});
