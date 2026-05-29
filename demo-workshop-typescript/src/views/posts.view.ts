import type { Post } from "../interfaces/post.interface";
import { PostService } from "../services/posts.service"
import { renderProfileContent } from "../utils/html";
import { showPostComments } from "./comments.view";

const postService = new PostService();

// let currentPage = 1;
// const postsPerPage = 10;

export async function showUsersPosts(userId: number) {
    const posts = await postService.getPostsByUser(userId);

    const template = `
    <div class="posts-container">
            ${posts.map(post => generateSinglePost(post)).join('')}
    </div>
    `

    renderProfileContent(template);
    attachUserEvents(userId);
}

function generateSinglePost(post: Post) {
    return ` 
        <div class="post-card">
            <h3 class="post-title">${post.title}</h3>
            <p class="post-body">${post.body}</p>
                <a href="#" class="comments-btn" data-id="${post.id}">
                    View Comments
                </a>
                <div class="comments-container" id="comments-${post.id}"></div>
        </div>
        `
}

function attachUserEvents(userId: number) {
    const buttons = document.querySelectorAll('.comments-btn');

    buttons.forEach(button => button?.addEventListener('click', (e) => {
        e.preventDefault();

        const target = e.currentTarget as HTMLAnchorElement;
        const postId = Number(target.dataset.id);

        history.pushState({}, '', `/users/${userId}/posts/${postId}/comments`);

        showPostComments(postId, userId);
    }));
}