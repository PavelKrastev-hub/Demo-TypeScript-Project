import type { Post } from "../interfaces/post.interface";
import { PostService } from "../services/posts.service"
import { renderProfileContent } from "../utils/html";

const postService = new PostService();

let currentPage = 1;
const postsPerPage = 10;

export async function showUsersPosts(userId: number) {
    const posts = await postService.getPostsByUser(userId);

    const template = `
    <div class="posts-container">
            ${posts.map(post => generateSinglePost(post)).join('')}
        </div>
    `

    renderProfileContent(template);
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