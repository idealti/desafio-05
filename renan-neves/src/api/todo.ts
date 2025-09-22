import { createApiResponse, getLocalStorage } from "../lib/utils";
import type { SortByField } from "../stores/settings";
import { StatusCode } from "../types";

export type TodoItemStatus = "todo" | "in_progress" | "completed";

export const todoStatusLabels: Record<TodoItemStatus, string> = {
  todo: "To Do",
  in_progress: "In Progress",
  completed: "Completed",
};

export const todoStatuses = Object.keys(todoStatusLabels) as TodoItemStatus[];

export type TodoItem = {
  id: string;
  title: string;
  description: string;
  status: TodoItemStatus;
  createdAt: Date;
  dueDate: Date;
};

export const sortFields: SortByField[] = ["createdAt", "dueDate"];
// export const sortFields = Object.keys({
//   createdAt: new Date(),
//   dueDate: new Date(),
// }) as SortByField[];
// export const sortFields = Object.keys({
//   createdAt: new Date(),
//   dueDate: new Date(),
// }) as (keyof TodoItem)[];

function getTodoList() {
  return getLocalStorage<TodoItem[]>("list") ?? [];
}

function setTodoList(newList: TodoItem[]) {
  localStorage.setItem("list", JSON.stringify(newList));
}

/**
 * Inserts a new todo item at the start of the list and returns an ApiResponse object.
 *
 * @param todoItem The todo item to insert.
 */
function addTodoItem(todoItem: TodoItem) {
  try {
    const list = getTodoList();

    list.unshift(todoItem);
    setTodoList(list);

    return createApiResponse({
      data: null,
      message: "Todo created successfully.",
      status: StatusCode.SUCCESS,
    });
  } catch (error) {
    return createApiResponse({
      data: null,
      message: "Failed to create todo.",
      status: StatusCode.ERROR,
    });
  }
}

/**
 * Updates an existing todo item in the list and returns an ApiResponse object.
 *
 * @param todoItem The todo item to update.
 */
function editTodoItem(updatedTodo: TodoItem) {
  try {
    const list = getTodoList();

    const index = list.findIndex((t) => t.id === updatedTodo.id);
    if (index !== -1) {
      list.splice(index, 1, updatedTodo);
    }
    setTodoList(list);

    return createApiResponse({
      data: null,
      message: "Todo edited successfully.",
      status: StatusCode.SUCCESS,
    });
  } catch (error) {
    return createApiResponse({
      data: null,
      message: "Failed to edit todo.",
      status: StatusCode.ERROR,
    });
  }
}

/**
 * Removes a todo item from the list and returns an ApiResponse object.
 *
 * @param todoItem The todo item to remove.
 */
function removeTodoItem(todoItem: TodoItem) {
  try {
    const list = getTodoList();

    const index = list.findIndex((t) => t.id === todoItem.id);
    if (index !== -1) list.splice(index, 1);
    setTodoList(list);

    return createApiResponse({
      data: null,
      message: "Todo removed successfully.",
      status: StatusCode.SUCCESS,
    });
  } catch (error) {
    return createApiResponse({
      data: null,
      message: "Failed to remove todo.",
      status: StatusCode.ERROR,
    });
  }
}

function changeTodoStatus(id: TodoItem["id"], status: TodoItem["status"]) {
  try {
    const list = getTodoList();

    const todo = list.find((t) => t.id === id);
    if (todo) {
      todo.status = status;
      todosApi.changeTodoStatus(id, status);
      setTodoList(list);
    }

    return createApiResponse({
      data: null,
      message: "Todo status changed successfully.",
      status: StatusCode.SUCCESS,
    });
  } catch (error) {
    return createApiResponse({
      data: null,
      message: "Failed to change status.",
      status: StatusCode.ERROR,
    });
  }
}

export const todosApi = {
  getTodoList,
  setTodoList,
  addTodoItem,
  editTodoItem,
  removeTodoItem,
  changeTodoStatus,
};
