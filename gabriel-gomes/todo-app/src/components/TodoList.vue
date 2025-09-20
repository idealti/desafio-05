<template>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>Aprender o básico de Vue.js</span>
        <div>
          <button class="btn btn-sm btn-success">Concluir</button>
          <button class="btn btn-sm btn-warning ms-1">Editar</button>
          <button class="btn btn-sm btn-danger ms-1">Excluir</button>
        </div>
      </li>

      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="text-decoration-line-through text-muted">Configurar o ambiente de desenvolvimento</span>
        <div>
          <button class="btn btn-sm btn-secondary">Desmarcar</button>
          <button class="btn btn-sm btn-warning ms-1">Editar</button>
          <button class="btn btn-sm btn-danger ms-1">Excluir</button>
        </div>
      </li>
    </ul>
  </template>

<script>
export default {
  name: 'TodoList'
}
</script>

<style scoped>
/* O CSS exclusivo deste componente virá aqui */
</style>