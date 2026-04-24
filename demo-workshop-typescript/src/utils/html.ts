export function render(template: string) {
    const mainEl = document.querySelector('main');

    if (mainEl) {
        mainEl.innerHTML = template;
    }
}

export function renderProfileContent(template: string) {
    const mainEl = document.getElementById('profile-content');

    if (mainEl) {
        mainEl.innerHTML = template;
    }
}