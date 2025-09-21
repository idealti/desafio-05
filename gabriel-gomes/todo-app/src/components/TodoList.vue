<template>
  <ul class="list-group">
    <li v-for="task in tasks" v-bind:key="task.id" class="list-group-item d-flex justify-content-between align-items-center">
      <span v-bind:class="{ 'text-decoration-line-through text-muted': task.completed }">
        {{ task.text }}
      </span>

      <div>
        <button v-if="!task.completed" @click="$emit('toggle-status', task.id)" class="btn btn-sm btn-success">Concluir</button>
        <button v-else @click="$emit('toggle-status', task.id)" class="btn btn-sm btn-secondary">Desmarcar</button>

        <button class="btn btn-sm btn-warning ms-1">Editar</button>
        <button @click="$emit('delete-task', task.id)" class="btn btn-sm btn-danger ms-1">Excluir</button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  props: ['tasks'],
  emits: ['delete-task', 'toggle-status'],
}
</script>

<style scoped>
/* Podemos adicionar estilos específicos para a lista aqui, se quisermos */
</style>