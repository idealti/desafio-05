<style>

</style>

<template>
  <div class="container w-75 mt-5">
    <TodoHeader />
    <TodoForm @add-task="addTask" />
    <TodoActions @set-filter="setFilter" @set-sort="setSortOrder"/>
    <TodoList :tasks="filteredTasks" @delete-task="deleteTask" @toggle-status="toggleTaskStatus" />
  </div>
</template>



<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';
import TodoActions from './components/TodoActions.vue';

export default {
  components: {
    TodoHeader,
    TodoForm,
    TodoList,
    TodoActions,
  },

  data() {
    return {
      tasks: [
        { id: 1, text: 'Adicionar tarefas com um campo de texto e um botão de adicionar impedindo a criação de tarefas vazias', completed: true },
        { id: 2, text: 'Listar todas as tarefas exibindo o status de cada uma (pendente ou concluída). Deverá conter botões para marcar/desmarcar, editar tarefa e excluir', completed: false },
        { id: 3, text: 'Deve ser possível filtrar as tarefas com as seguintes opções: Todas, Pendentes e Concluídas;', completed: true },
        { id: 4, text: 'Deverá conter uma forma de ordenar a lista de tarefas com: Criadas recentemente e antigamente (pode incluir outras ordenações se achar necessário);', completed: true },
        { id: 5, text: 'Salvar as tarefas utilizando um store global (localStorage ou uma solução equivalente) para que ao recarregar a tela seja possível visualizar as tarefas cadastradas;', completed: true },
      ],
      currentFilter: 'all',
      sortOrder: 'newest',
    }
  },

//METHODS ====----
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
        },  
    addTask(taskText) {
        console.log(taskText) // escreve no console as tarefas 
        },
    setFilter(filterValue) {
        this.currentFilter = filterValue;
    },
    setSortOrder(order) { // aplica ordem na lista de tarefas
      this.sortOrder = order;
      console.log('Ordem da lista alterada para:', this.sortOrder);
    },
 }, // FIM METHODS ====----

// COMPUTED ====----
computed: {
  filteredTasks() {
    // --- PARTE 1: O FILTRO (já funciona) ---
    let filteredList; // Usamos let para poder modificá-la depois

    if (this.currentFilter === 'pending') {
      filteredList = this.tasks.filter(task => !task.completed);
    } else if (this.currentFilter === 'completed') {
      filteredList = this.tasks.filter(task => task.completed);
    } else {
      filteredList = this.tasks;
    }
    const sortedList = [...filteredList]; // copia da lista filtrada
    if (this.sortOrder === 'newest') {
      sortedList.sort((a, b) => b.id - a.id); // mais recente primeiro
    } else if (this.sortOrder === 'oldest') {
      sortedList.sort((a, b) => a.id - b.id); // mais antigo primeiro
    }
    return sortedList; // lista que foi primeiro filtrada e depois ordenada
  }
}, // FIM COMPUTED ====----

// CREATED ====----
    created() {
      const savedTasks = localStorage.getItem('tasks'); // Pega as tarefas salvas no localStorage (que é um texto/string)
        if (savedTasks) { 
          this.tasks = JSON.parse(savedTasks); // transforma o texto de volta em array/objeto
          console.log("Tarefas carregadas do localStorage!");
    }
  },
// FIM CREATED ====----
}
</script>