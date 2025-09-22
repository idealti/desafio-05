<script lang="ts">
import { defineComponent, type PropType } from "vue";
import {
  todoStatusLabels,
  type TodoItem,
  type TodoItemStatus,
} from "../api/todo";
import { v4 as uuidv4 } from "uuid";
import "v-calendar/style.css";
import { todosStore } from "../stores/todo";
import * as bootstrap from "bootstrap";

import { DatePicker } from "v-calendar";

const todoStatusOptions = Object.entries(todoStatusLabels) as [
  TodoItemStatus,
  string
][];

export default defineComponent({
  name: "AddTodoModal",
  components: {
    DatePicker,
  },
  props: {
    selectedStatus: {
      type: String as PropType<TodoItemStatus>,
      required: true,
    },
  },

  data() {
    return {
      id: uuidv4(),
      title: "",
      description: "",
      status: this.selectedStatus,
      dueDate: new Date(),
      modal: null as bootstrap.Modal | null,
      todoStatusOptions,
    };
  },

  mounted() {
    this.modal = new bootstrap.Modal(this.$refs.modalEl as HTMLElement);
  },

  methods: {
    openModal() {
      this.modal?.show();
    },
    closeModal() {
      this.modal?.hide();
    },
    resetForm() {
      this.title = "";
      this.description = "";
      this.status = this.selectedStatus;
      this.dueDate = new Date();
    },
    handleSubmit() {
      const todo: TodoItem = {
        id: this.id,
        title: this.title,
        description: this.description,
        status: this.status,
        createdAt: new Date(),
        dueDate: this.dueDate,
      };

      todosStore.add(todo);

      this.resetForm();
      this.closeModal();
    },
  },
});
</script>

<template>
  <button
    type="button"
    class="btn-add d-flex justify-content-center align-items-center gap-2"
    @click="openModal"
  >
    <h6 class="m-0">Add task</h6>
    <i
      class="bi bi-plus rounded-circle"
      style="font-size: 24px; color: currentColor"
    />
  </button>

  <div class="modal fade" :id="`modal-${id}`" ref="modalEl" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Add To-do</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            :onclick="() => closeModal()"
          ></button>
        </div>

        <div class="modal-body">
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="title" class="form-label">Title</label>
              <input
                v-model="title"
                type="text"
                class="form-control"
                id="title"
                aria-describedby="title"
                required
              />
            </div>

            <div class="mb-3">
              <label for="description" class="form-label">Description</label>
              <textarea
                v-model="description"
                class="form-control"
                id="description"
                rows="4"
                required
              />
            </div>

            <div class="mb-3">
              <label for="status" class="form-label">Status</label>
              <select v-model="status" id="status" class="form-select">
                <option
                  v-for="[status, label] in todoStatusOptions"
                  :key="status"
                  :value="status"
                >
                  {{ label }}
                </option>
              </select>
            </div>

            <div class="mb-3 d-flex flex-column">
              <label for="dueDate" class="form-label">Due Date: </label>
              <DatePicker v-model="dueDate" class="w-100" />
            </div>

            <div class="d-flex">
              <button type="submit" class="btn btn-primary ms-auto">
                Add New
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.btn-add {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 0.125rem;
}

.btn-add:hover {
  background-color: rgb(252, 252, 252);
}
</style>
