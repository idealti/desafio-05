<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { TodoItem } from "../api/todo";
import { formatTimeLeft } from "../lib/utils";
import TodoItemDropdown from "./TodoItemDropdown.vue";

export default defineComponent({
  name: "TodoItemCard",
  components: {
    TodoItemDropdown,
  },
  props: {
    todo: {
      type: Object as PropType<TodoItem>,
      required: true,
    },
  },

  data() {
    return {
      formatTimeLeft,
    };
  },

  methods: {
    formatCreatedDate(date: Date | string) {
      const created = new Date(date);
      const year = created.getFullYear();
      const month = String(created.getMonth() + 1).padStart(2, "0");
      const day = String(created.getDate()).padStart(2, "0");

      return `${month}/${day}/${year}`;
    },
  },
});
</script>

<template>
  <div class="card card-border">
    <div class="card-body">
      <div class="d-flex align-items-center">
        <h5 class="card-title">{{ todo.title }}</h5>
        <TodoItemDropdown :todo="todo" class="ms-auto" />
      </div>
      <p class="card-text">{{ todo.description }}</p>
      <div class="d-flex justify-content-between">
        <p class="card-text text-end text-muted">{{ formatCreatedDate(todo.createdAt) }}</p>
        <p class="card-text text-end text-muted">
          {{ formatTimeLeft(todo.dueDate) }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-border {
  border: 1px solid rgba(0, 0, 0, 0.05);
}
</style>
