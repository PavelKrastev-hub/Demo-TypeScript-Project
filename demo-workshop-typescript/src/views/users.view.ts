import type { User } from "../interfaces/user.interface";
import { UserService } from "../services/user.service";
import { render } from "../utils/html";
import { renderProfileView } from "./profile.view";

const userService = new UserService();

export async function renderUsersView(): Promise<void> {
    const users = await userService.getAll();

    const template = ` 
        <section class="users-container">
                ${users.map(user => generateSingleUser(user)).join('')}
        </section>
        `

    render(template);
    attachUsersEvents();
}

function generateSingleUser(user: User): string {
    return `
        <div class="user-card">
            <h3 class="name">${user.name}</h3>
            <p class="username">${user.username}</p>
            <p class="email">${user.email}</p>

            <a href="/users/${user.id}" class="view-btn" data-id="${user.id}">View Profile</a>
        </div>
    `
}

export function attachUsersEvents() {
    const buttons = document.querySelectorAll('.view-btn');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const target = e.currentTarget as HTMLAnchorElement;
            const id = Number(target.dataset.id);

            history.pushState({}, '', `/users/${id}`);

            renderProfileView(id);
        })
    })
}