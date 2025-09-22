import type { TodoItemStatus } from "../api/todo";

const columns: { title: string; color: string; status: TodoItemStatus }[] = [
  { title: 'To-do', color: '#F5BC07', status: 'todo' },
  { title: 'In Progress', color: '#2059f0', status: 'in_progress' },
  { title: 'Completed', color: '#14f31d', status: 'completed' }
]

export const todoConfigs = { columns }
