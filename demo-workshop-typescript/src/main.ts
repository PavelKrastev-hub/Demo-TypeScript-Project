import type { Routes } from './interfaces/routes.interface';
import { Router } from './router';
import './style.css'
import { renderUsersView } from './views/users.view'

window.addEventListener('load', () => {
    renderUsersView();
})

const routes: Routes = {

}

const router = new Router(routes)

export function setupLinks(id: number) {
    const profileLinkEl = document.getElementById('view-btn');

    if (profileLinkEl) {
        profileLinkEl.addEventListener('click', e => {
            e.preventDefault();
        });

        router.navigate(`/users/${id}`)
    }
}