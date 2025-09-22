<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoColumn",
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#000000",
    },
  },
});
</script>

<template>
  <div
    class="card-container rounded-3 p-3 d-flex flex-column gap-3 card-border"
  >
    <div class="d-flex align-items-center gap-2 pb-3">
      <div class="rounded-circle circle" :style="{ backgroundColor: color }" />
      <h5 class="box card-title">{{ title }}</h5>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.circle {
  width: 14px;
  height: 14px;
}

.card-container {
  background-color: #f7f7f7;
}
</style>
