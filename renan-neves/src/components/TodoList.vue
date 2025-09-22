<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { todoConfigs } from "../config/todo";
import type { TodoItem, TodoItemStatus } from "../api/todo";

import TodoColumn from "./TodoColumn.vue";
import AddTodoModal from "./AddTodoModal.vue";
import TodoItemCard from "./TodoItemCard.vue";

export default defineComponent({
  name: "TodoList",
  components: {
    TodoColumn,
    AddTodoModal,
    TodoItemCard,
  },
  props: {
    columns: {
      type: Array as PropType<typeof todoConfigs.columns>,
      required: true,
    },
    todoList: {
      type: Object as PropType<Record<TodoItemStatus, TodoItem[]>>,
      required: true,
    },
  },
});
</script>

<template>
  <div class="container p-0">
    <div class="row justify-content-center g-4">
      <div class="col-lg-4 flex-grow-1" v-for="(column, i) in columns" :key="i">
        <TodoColumn :title="column.title" :color="column.color">
          <AddTodoModal :selectedStatus="column.status" />
          <TodoItemCard
            v-for="(todo, j) in todoList[column.status]"
            :key="j"
            :todo="todo"
          />
        </TodoColumn>
      </div>
    </div>
  </div>
</template>
