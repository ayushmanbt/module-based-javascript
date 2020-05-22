import { TodoManager } from "./todoManager.js";

let todoHandler = new TodoManager();

const todoList = document.querySelector(".todo_list");
todoList.innerHTML = "";

const updateTodoView = () => {
  todoList.innerHTML = "";
  todoHandler.todoList.forEach((e) => {
    todoList.innerHTML += `<li 
        class="todo_card ${e.status ? "done" : ""}" 
        id="${e.id}"
    }>
          <h3 class="todo_title">${e.name}</h3>
          <div class="buttons_container">
            <button class="action_button green_button" id="button_done_${e.id}">
              &checkmark;
            </button>
            <button class="action_button" id="button_delete_${e.id}">
              &cross;
            </button>
          </div>
        </li>`;
  });
  todoHandler.todoList.forEach((e) => {
    document
      .getElementById(`button_done_${e.id}`)
      .addEventListener("click", () => {
        todoHandler.updateTodo(e.id);
        document.getElementById(e.id).classList.toggle("done");
      });

    document
      .getElementById(`button_delete_${e.id}`)
      .addEventListener("click", () => {
        todoHandler.removeTodo(e.id);
        updateTodoView();
      });
  });
};

const todoInput = document.getElementById("todo_input");
document.getElementById("add_todo").addEventListener("submit", (e) => {
  e.preventDefault();
  if (todoInput.value != "") {
    todoHandler.addTodo(todoInput.value);
    todoInput.value = "";
  }
  updateTodoView();
});

updateTodoView();
