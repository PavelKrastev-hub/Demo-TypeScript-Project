import { BASE_URL } from "../constants";
import type { User } from "../interfaces/user.interface";
import { APIService } from "./genericService";

export class UserService extends APIService<User> {
    constructor() {
        super(`${BASE_URL}/users`);
    }
}