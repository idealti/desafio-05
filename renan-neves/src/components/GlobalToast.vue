<script lang="ts">
import { defineComponent } from "vue";
import { toastState, type ToastType } from "../stores/toast";

export default defineComponent({
  name: "GlobalToast",
  data() {
    const bgClass: Record<ToastType, string> = {
      info: "bg-body",
      success: "bg-success",
      error: "bg-danger",
    };

    return { toastState, bgClass };
  },
});
</script>

<template>
  <div
    class="toast-container position-fixed top-0 start-50 translate-middle-x p-3"
  >
    <div
      v-for="toast in toastState.messages"
      :key="toast.id"
      class="toast show mb-2 text-white bg-body"
      :class="bgClass[toast.type]"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-body text-black">{{ toast.text }}</div>
    </div>
  </div>
</template>

<!-- :class="bgClass[toast.type]" -->
