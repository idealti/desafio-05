<template>
    <form @submit.prevent="handleSubmit" class="mb-4">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Digite uma nova tarefa..." v-model="taskText"/>
        <button class="btn btn-primary" type="submit">Adicionar</button>
      </div>
    </form>
  </template>

<script>
export default {
  name: 'TodoForm',
  emits: ['add-task'],


  data() {
      return {
      taskText: '',
    }
  },

  methods: {
    handleSubmit() {
      if (this.taskText.trim() === '') { // impede de colocar tarefas fazias
        return
        };
      this.$emit('add-task', this.taskText); 
      this.taskText = '';
    }
  },
}
</script>