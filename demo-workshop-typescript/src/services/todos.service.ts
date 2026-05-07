import { BASE_URL } from "../constants";
import type { ToDo } from "../interfaces/todo.interface";
import { APIService } from "./genericService";

export class ToDosService extends APIService<ToDo> {
    constructor() {
        super(`${BASE_URL}/todos`);
    }

    async getToDosByUser(userId: number): Promise<ToDo[]> {
        const response = await fetch(`${BASE_URL}/todos?userId=${userId}`);

        if (!response.ok) {
            throw new Error("Failed to fetch user todos");
        }

        return await response.json();
    }
}