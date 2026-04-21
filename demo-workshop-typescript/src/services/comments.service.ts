import { BASE_URL } from "../constants";
import { APIService } from "./genericService";

export class CommentService extends APIService {
    constructor() {
        super(`${BASE_URL}/comments`);
    }
}