<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { todoStatusLabels, type TodoItemStatus } from "../api/todo";
import type { FilterState } from "../stores/settings";

export default defineComponent({
  name: "FilterDropdown",
  props: {
    todoStatuses: {
      type: Array as PropType<TodoItemStatus[]>,
      required: true,
    },
    filterState: {
      type: Object as PropType<FilterState>,
      required: true,
    },
    toggleFilter: {
      type: Function as PropType<(status: TodoItemStatus) => void>,
      required: true,
    },
  },

  data() {
    return {
      todoStatusLabels,
    };
  },
});
</script>

<template>
  <div class="dropdown">
    <button
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      class="btn"
    >
      <i class="bi bi-funnel" style="font-size: 12px; color: currentColor" />
      Filter
    </button>
    <ul class="dropdown-menu">
      <li v-for="status in todoStatuses" :key="status">
        <button
          class="dropdown-item d-flex align-items-center"
          @click.prevent="toggleFilter(status)"
        >
          <i
            class="bi bi-check me-2"
            style="font-size: 12px; color: currentColor"
            v-if="filterState.filter.includes(status)"
          />
          {{ todoStatusLabels[status] }}
        </button>
      </li>
    </ul>
  </div>
</template>
