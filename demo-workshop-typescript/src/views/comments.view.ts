import type { Comment } from "../interfaces/comment.interface";
import { CommentService } from "../services/comments.service";
import { renderProfileContent } from "../utils/html";
import { showUsersPosts } from "./posts.view";

const commentsService = new CommentService();

export async function showPostComments(postId: number, userId: number) {
    const comments = await commentsService.getCommentsByPost(postId);

    const template = `
        <a href="#" class="back-btn-post">Back to Posts</a>
        <div class="comments-wrapper">
            ${comments.map(comment => generateSingleComment(comment)).join("")}
        </div>
    `

    renderProfileContent(template);
    attachCommentEvents(userId);
}

function generateSingleComment(comment: Comment) {
    return `
        <div class="comment-card">
            <div class="comment-header">
                <h4 class="comment-name">${comment.name}</h4>
                <span class="comment-email">
                    ${comment.email}
                </span>
            </div>
            <p class="comment-body">
                ${comment.body}
            </p>
        </div>
    `
}

function attachCommentEvents(userId: number) {
    const button = document.querySelector('.back-btn-post');

    button?.addEventListener('click', (e) => {
        e.preventDefault();

        history.pushState({}, '', `/users/${userId}`);

        showUsersPosts(userId);
    })
}