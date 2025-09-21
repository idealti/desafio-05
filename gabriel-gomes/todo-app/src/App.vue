<style>

</style>

<template>
  <div class="container w-75 mt-5">
    <TodoHeader />
    <TodoForm />
    <TodoList v-bind:tasks="tasks" @delete-task="deleteTask" @toggle-status="toggleTaskStatus" />
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
        { id: 3, text: 'Aprender o básico', completed: true },
        { id: 4, text: 'Aprender o bás', completed: true },
      ]
    }
  },
  methods: {
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId); // filtro para remover se task.id for igual a taskId para o novo Array
        const tasksAsJson = JSON.stringify(this.tasks); // transforma o array de tarefas para o formato de texto JSON
        localStorage.setItem('tasks', tasksAsJson); // Salva no localStorage com a chave 'tasks'
          console.log('Tarefas salvas no localStorage!'); 
    },
    toggleTaskStatus(taskId) {
      console.log('App.vue ouviu o ID É:', taskId); // Recebe a sinal do componente filho junto com o id 
        const task = this.tasks.find(task => task.id === taskId); // retorna ao task o id enviado pelo filho
          if (task) {
            task.completed = !task.completed; // ao clicar, se torna o oposto do que era
            console.log('instanciando o saveTasks()');
            this.saveTasks(); // instancia de onde o botão vai salvar o comando
              
    }
  },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks)); // modifica em JSON o LocalStorage do nagevador
       console.log('Lista de tarefas foi salva no localStorage!');
  }
 },
  created() {
    const savedTasks = localStorage.getItem('tasks'); // Pega as tarefas salvas no localStorage (que é um texto/string)
      if (savedTasks) { 
        this.tasks = JSON.parse(savedTasks); // transforma o texto de volta em array/objeto
        console.log("Tarefas carregadas do localStorage!");
    }
  },
  
}
</script>