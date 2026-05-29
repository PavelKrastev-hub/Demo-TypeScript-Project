import { BASE_URL } from "../constants";
import type { Comment } from "../interfaces/comment.interface";
import { APIService } from "./genericService";

export class CommentService extends APIService<Comment> {
    constructor() {
        super(`${BASE_URL}/comments`);
    }

    async getCommentsByPost(postId: number): Promise<Comment[]> {
        const response = await fetch(`${BASE_URL}/comments?postId=${postId}`);

        if (!response.ok) {
            throw new Error("Failed to fetch post comments");
        }

        return await response.json();
    }
}