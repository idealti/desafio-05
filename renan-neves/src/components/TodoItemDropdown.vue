<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { TodoItem } from "../api/todo";
import { todosStore } from "../stores/todo";
import { todoStatuses, todoStatusLabels } from "../api/todo";

import EditTodoModal from "./EditTodoModal.vue";

export default defineComponent({
  name: "TodoItemDropdown",
  components: { EditTodoModal },
  props: {
    todo: {
      type: Object as PropType<TodoItem>,
      required: true,
    },
  },

  data() {
    const availableStatuses = todoStatuses.filter(
      (status) => this.todo.status !== status
    );

    return {
      todoStatusLabels,
      availableStatuses,
    };
  },

  methods: {
    openEditModal() {
      (this.$refs.editModal as any).openModal();
    },
    deleteTodo() {
      console.log(this.todo);
      todosStore.remove(this.todo);
    },
    changeStatus(status: TodoItem["status"]) {
      todosStore.changeStatus(this.todo.id, status);
    },
  },
});
</script>

<template>
  <div class="dropdown">
    <button
      class="btn"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <i class="bi bi-three-dots" />
    </button>

    <ul class="dropdown-menu">
      <li>
        <button class="dropdown-item" @click="openEditModal">Edit</button>
      </li>
      <li><button class="dropdown-item" @click="deleteTodo">Delete</button></li>
      <hr class="my-2" />
      <li v-for="status in availableStatuses" :key="status">
        <button
          class="dropdown-item d-flex align-items-center"
          @click="() => changeStatus(status)"
        >
          {{ todoStatusLabels[status] }}
        </button>
      </li>
    </ul>

    <EditTodoModal ref="editModal" :todo="todo" />
  </div>
</template>
