import { BASE_URL } from "../constants";
import type { ToDo } from "../interfaces/todo.interface";
import { APIService } from "./genericService";

export class ToDosService extends APIService<ToDo> {
    constructor() {
        super(`${BASE_URL}/todos`);
    }
}