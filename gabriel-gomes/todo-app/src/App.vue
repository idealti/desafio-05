<style>

</style>

<template>
  <div class="container w-75 mt-5">
    <TodoHeader />
    <TodoForm />
    <TodoList v-bind:tasks="tasks" @delete-task="deleteTask"  />
  </div>
</template>



<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoHeader,
    TodoForm,
    TodoList,
  },

  data() {
    return {
      tasks: [
        { id: 1, text: 'Configurar o ambiente de desenvolvimento', completed: true },
        { id: 2, text: 'Aprender o básico de Vue.js', completed: false },
      ]
    }
  },
  methods: {
  deleteTask(taskId) {
    console.log('App.vue (PAI) ouviu o sinal! O ID da tarefa a ser deletada é:', taskId);
  },
 }
}
</script>