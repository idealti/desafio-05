<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { TodoItemStatus } from '../api/todo';
import type { SortByField, SortOrder } from '../stores/settings';

export default defineComponent({
  name: 'SortDropdown',
  props: {
    todoStatuses: {
      type: Array as PropType<TodoItemStatus[]>,
      required: true
    },
    sortFields: {
      type: Array as PropType<SortByField[]>,
      required: true
    },
    setSort: {
      type: Function as PropType<(order: SortOrder) => void>,
      required: true
    },
    setSortByField: {
      type: Function as PropType<(field: SortByField) => void>,
      required: true,
    }
  }
})
</script>

<template>
  <div class="dropdown">
    <button type="button" data-bs-toggle="dropdown" aria-expanded="false" class="btn">
      <i class="bi bi-arrow-down-up rounded-circle" style="font-size: 12px; color: currentColor" />
      Sort
    </button>
    <ul class="dropdown-menu">
      <li><button class="dropdown-item" :onclick="() => setSort('newest')">Newest first</button></li>
      <li><button class="dropdown-item" :onclick="() => setSort('oldest')">Oldest first</button></li>
      <hr class="my-2" />
      <li v-for="field in sortFields" :key="field"><button class="dropdown-item text-capitalize"
          :onclick="() => setSortByField(field)">{{ field }}</button></li>
    </ul>
  </div>
</template>