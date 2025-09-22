import { reactive } from "vue";
import { todosApi, type TodoItem, type TodoItemStatus } from "../api/todo";
import { toast } from "./toast";

export const todosStore = reactive({
  todos: todosApi.getTodoList(),

  get groupedTodos(): Record<TodoItemStatus, TodoItem[]> {
    return this.todos.reduce((acc, todo) => {
      (acc[todo.status] ??= []).push(todo);
      return acc;
    }, {} as Record<TodoItemStatus, TodoItem[]>);
  },

  add(todo: TodoItem) {
    this.todos.unshift(todo);
    const response = todosApi.addTodoItem(todo);
    toast(response.message)
  },

  edit(updatedTodo: TodoItem) {
    const index = this.todos.findIndex((t) => t.id === updatedTodo.id);
    if (index !== -1) {
      this.todos.splice(index, 1, updatedTodo);
      const response = todosApi.editTodoItem(updatedTodo);
      toast(response.message)
    }
  },

  remove(todo: TodoItem) {
    const index = this.todos.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      const response = todosApi.removeTodoItem(todo);
      toast(response.message)
    }
  },

    changeStatus(id: TodoItem["id"], status: TodoItem["status"]) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.status = status;
      const response = todosApi.changeTodoStatus(id, status);
      toast(response.message)
    }
  },
});
