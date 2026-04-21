import { BASE_URL } from "../constants";
import type { Comment } from "../interfaces/comment.interface";
import { APIService } from "./genericService";

export class CommentService extends APIService<Comment> {
    constructor() {
        super(`${BASE_URL}/comments`);
    }
}