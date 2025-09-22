import { reactive } from 'vue'
import type { TodoItemStatus } from '../api/todo'

export type FilterStatus = TodoItemStatus[]
export type SortOrder = 'newest' | 'oldest'
export type SortByField = "createdAt" | "dueDate"

export type SortState = { sort: SortOrder }
export type SortByFieldState = { field: SortByField }
export type FilterState = { filter: FilterStatus }

export const sortState = reactive<SortState>({ sort: 'newest' })
export const sortByFieldState = reactive<SortByFieldState>({ field: 'dueDate' })
export const filterState = reactive<FilterState>({ filter: ['todo', 'in_progress', 'completed'] })
