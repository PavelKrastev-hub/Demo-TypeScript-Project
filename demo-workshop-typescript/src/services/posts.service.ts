import { BASE_URL } from "../constants";
import type { Post } from "../interfaces/post.interface";
import { APIService } from "./genericService";

export class PostService extends APIService<Post> {
    constructor() {
        super(`${BASE_URL}/posts`);
    }
}