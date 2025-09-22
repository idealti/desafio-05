import type { TodoItem, TodoItemStatus } from "../api/todo";
import type { SortOrder } from "../stores/settings";
import type { ApiResponse } from "../types";

/**
 * Reads a value from localStorage and parses it as JSON.
 * Returns null if the item doesn't exist or if parsing fails.
 *
 * @param item The key to read from localStorage.
 */
export function getLocalStorage<T>(item: string): T | null {
  const listStorage = localStorage.getItem(item);
  if (!listStorage) return null;

  try {
    return JSON.parse(listStorage) as T;
  } catch (e) {
    console.error(`Failed to parse localStorage item "${item}":`, e);
    return null;
  }
}

export function createApiResponse<T>(params: ApiResponse<T>): ApiResponse<T> {
  return params;
}

export function groupByStatus(list: TodoItem[]) {
  return list.reduce((acc, todo) => {
    (acc[todo.status] ??= []).push(todo);
    return acc;
  }, {} as Record<TodoItemStatus, TodoItem[]>);
}

export function sortGroupedTodosByDate(
  groupedTodos: Record<TodoItemStatus, TodoItem[]>,
  field: "createdAt" | "dueDate",
  order: SortOrder
): Record<TodoItemStatus, TodoItem[]> {
  const compareDates = (a: TodoItem, b: TodoItem) => {
    const timeA = new Date(a[field]).getTime();
    const timeB = new Date(b[field]).getTime();

    return order === "newest" ? timeB - timeA : timeA - timeB;
  };

  const sorted: Record<TodoItemStatus, TodoItem[]> = {
    todo: [],
    in_progress: [],
    completed: [],
  };

  for (const status of Object.keys(sorted) as TodoItemStatus[]) {
    sorted[status] = [...(groupedTodos[status] ?? [])].sort(compareDates);
  }

  return sorted;
}

export function randomDate(): Date {
  const today = new Date();
  const startMs = new Date(today.getFullYear() - 5, 0, 1).getTime(); // Start from January 1st, five years ago
  const endMs = today.getTime();
  const randomMs = startMs + Math.random() * (endMs - startMs);
  return new Date(randomMs);
}

export function randomDueDate(): Date {
  const today = new Date();
  const startMs = today.getTime();
  const endMs = new Date(today.getFullYear(), 11, 31).getTime();
  const randomMs = startMs + Math.random() * (endMs - startMs);
  return new Date(randomMs);
}

export function formatTimeLeft(dueDate: Date): string {
  const now = new Date();
  dueDate = new Date(dueDate); // dueDate is being parsed as a string, so we just reassign as Date
  let diff = dueDate.getTime() - now.getTime();

  if (diff <= 0) return "Expired";

  const msInMinute = 60 * 1000;
  const msInHour = 60 * msInMinute;
  const msInDay = 24 * msInHour;
  const msInMonth = 30 * msInDay; // aproximado
  const msInYear = 365 * msInDay; // aproximado

  const years = Math.floor(diff / msInYear);
  diff -= years * msInYear;

  const months = Math.floor(diff / msInMonth);
  diff -= months * msInMonth;

  const days = Math.floor(diff / msInDay);
  diff -= days * msInDay;

  const hours = Math.floor(diff / msInHour);
  diff -= hours * msInHour;

  const minutes = Math.floor(diff / msInMinute);

  if (years > 0)
    return `${years} year${years > 1 ? "s" : ""} ${months} month${
      months > 1 ? "s" : ""
    } left`;
  if (months > 0)
    return `${months} month${months > 1 ? "s" : ""} ${days} day${
      days > 1 ? "s" : ""
    } left`;
  if (days > 0) return `${days} day${days > 1 ? "s" : ""} left`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} left`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} left`;

  return "Less than a minute left";
}
