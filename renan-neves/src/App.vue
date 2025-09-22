<script lang="ts">
import { defineComponent } from "vue";
import { sortFields, todoStatuses, type TodoItemStatus } from "./api/todo";
import {
  filterState,
  sortByFieldState,
  sortState,
  type SortByField,
  type SortOrder,
} from "./stores/settings";
import { todoConfigs } from "./config/todo";
import { sortGroupedTodosByDate } from "./lib/utils";
import { todosStore } from "./stores/todo";
import { toast, toastState } from "./stores/toast";

import AddTodoModal from "./components/AddTodoModal.vue";
import FilterDropdown from "./components/FilterDropdown.vue";
import SortDropdown from "./components/SortDropdown.vue";
import TodoItemCard from "./components/TodoItemCard.vue";
import GlobalToast from "./components/GlobalToast.vue";
import TodoList from "./components/TodoList.vue";

export default defineComponent({
  name: "Dashboard",
  components: {
    TodoList,
    GlobalToast,
    TodoItemCard,
    AddTodoModal,
    SortDropdown,
    FilterDropdown,
  },

  data() {
    return {
      toast,
      sortState,
      sortFields,
      toastState,
      filterState,
      todoStatuses,
      sortByFieldState,
    };
  },

  computed: {
    todos(): typeof todosStore.groupedTodos {
      return todosStore.groupedTodos;
    },
    columns() {
      return todoConfigs.columns.filter((column) =>
        filterState.filter.includes(column.status)
      );
    },
    todoList() {
      return sortGroupedTodosByDate(
        this.todos,
        this.sortByFieldState.field,
        this.sortState.sort
      );
    },
  },

  methods: {
    setSort(order: SortOrder) {
      sortState.sort = order;
    },
    setSortByField(field: SortByField) {
      sortByFieldState.field = field;
    },
    toggleFilter(status: TodoItemStatus) {
      const isActive = filterState.filter.includes(status);

      filterState.filter = isActive
        ? filterState.filter.filter((currentStatus) => currentStatus !== status)
        : [...filterState.filter, status];
    },
  },
});
</script>

<template>
  <h3 class="head bg-transparen py-4">Dashboard</h3>

  <div class="mb-4 menu-border w-100 d-flex">
    <h5>To-dos</h5>
    <FilterDropdown
      class="ms-auto"
      :filter-state="filterState"
      :todo-statuses="todoStatuses"
      :toggle-filter="toggleFilter"
    />
    <SortDropdown
      :set-sort="setSort"
      :sort-fields="sortFields"
      :todo-statuses="todoStatuses"
      :set-sort-by-field="setSortByField"
    />
  </div>

  <TodoList :columns="columns" :todo-list="todoList" />
  <GlobalToast />
</template>

<style>
.menu-border {
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.05);
  border-width: 0px 0px 1px 0px;
}
</style>
