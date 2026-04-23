import type { User } from "../interfaces/user.interface";
import { UserService } from "../services/user.service";
import { render } from "../utils/html";

const userService = new UserService();

export async function renderUsersView() {
    const users = await userService.getAll();

    const template = ` 
        <section class="users-container">
                ${users.map(user => generateSingleUser(user)).join('')}
        </section>
        `

    render(template);
}

function generateSingleUser(user: User) {
    return `
        <div class="user-card">
            <h3 class="name">${user.name}</h3>
            <p class="username">${user.username}</p>
            <p class="email">${user.email}</p>

            <<a href="/users/${user.id}">View Profile</a>>
        </div>
    `
}