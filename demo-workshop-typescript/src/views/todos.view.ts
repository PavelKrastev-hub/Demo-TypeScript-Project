import type { ToDo } from "../interfaces/todo.interface";
import { ToDosService } from "../services/todos.service";
import { renderProfileContent } from "../utils/html";

const todosService = new ToDosService();

export async function showUserTodos(userId: number) {
    const todos = await todosService.getToDosByUser(userId);

    const template = `
    <div class="todos-container">
            ${todos.map(todo => generateSingleTodo(todo)).join("")}
        </div>
    `

    renderProfileContent(template);
}

function generateSingleTodo(todo: ToDo) {
    return `<div class="todo-card ${todo.completed ? "completed" : "pending"}">      
                <div class="todo-status">
                    ${todo.completed ? "✅" : "⏳"}
                </div>
                <div class="todo-content">
                    <h3 class="todo-title">
                        ${todo.title}
                    </h3>
                    <p class="todo-state">
                        ${todo.completed ? "Completed" : "In Progress"}
                    </p>
                </div>
            </div>
            `
}