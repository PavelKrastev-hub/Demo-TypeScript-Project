import { BASE_URL } from "../constants";
import type { Post } from "../interfaces/post.interface";
import { APIService } from "./genericService";

export class PostService extends APIService<Post> {
    constructor() {
        super(`${BASE_URL}/posts`);
    }

    async getPostsByUser(userId: number): Promise<Post[]> {
        const response = await fetch(`${BASE_URL}/posts?userId=${userId}`);

        if (!response.ok) {
            throw new Error("Failed to fetch user posts");
        }

        return await response.json();
    }
}