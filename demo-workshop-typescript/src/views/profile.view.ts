import { UserService } from "../services/user.service";
import { render } from "../utils/html";
import { showUsersPosts } from "./posts.view";

const userSerivce = new UserService();

export async function renderProfileView(id: number) {
    const user = await userSerivce.getById(id);

    const template = `
        <section class="profile-container">
            <div class="profile-card">
                <h1>${user.name}</h1>
                <p class="profile-username">@${user.username}</p>
                <p>${user.email}</p>
                <p>${user.phone}</p>
                <p>${user.website}</p>

                <div class="profile-company">
                    <h3>Company</h3>
                    <p>${user.company.name}</p>
                    <p>${user.company.catchPhrase}</p>
                </div>

                <a href="/users" class="back-btn">Back to Users</a>
            </div>

            <div class="profile-tabs">
                <button class="tab-btn active" data-tab="posts">Posts</button>
                <button class="tab-btn" data-tab="albums">Albums</button>
                <button class="tab-btn" data-tab="todos">Todos</button>
            </div>

            <section id="profile-content" class="profile-content">
                <p class="empty-message">Choose section to view user data.</p>
            </section>
        </section>
    `

    render(template);
    attachProfileEvents(id);
}

export function attachProfileEvents(userId: number) {
    const buttons = document.querySelectorAll('.tab-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');

            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

            button.classList.add('active');

            if (tab === "posts") showUsersPosts(userId);
            if (tab === "albums") showUserAlbums(userId);
            if (tab === "todos") showUserTodos(userId);
        })
    })
}