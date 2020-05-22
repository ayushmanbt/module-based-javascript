import { Todo } from "./todo.js";

export class TodoManager {
  todoList = [];

  constructor() {
    this.todoList = [];
  }

  addTodo(todoName) {
    this.todoList.push(new Todo(this.todoList.length, todoName));
  }

  removeTodo(id) {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  }

  updateTodo(id) {
    this.todoList = this.todoList.map((todo) => {
      if (todo.id === id) todo.toggleStatus();
      return todo;
    });
  }
}
