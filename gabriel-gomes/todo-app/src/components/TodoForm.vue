<template>
    <form class="mb-4">
      <div class="input-group">
        <input 
          type="text" 
          class="form-control" 
          placeholder="Digite uma nova tarefa..."
        />
        <button class="btn btn-primary" type="submit">Adicionar</button>
      </div>
    </form>

    <div class="d-flex justify-content-between align-items-center mb-3">
      <div>
        <span class="me-2">Filtrar:</span>
        <button class="btn btn-sm btn-outline-secondary">Todas</button>
        <button class="btn btn-sm btn-outline-secondary ms-1">Pendentes</button>
        <button class="btn btn-sm btn-outline-secondary ms-1">Concluídas</button>
      </div>
      <div>
        <span class="me-2">Ordenar:</span>
         <button class="btn btn-sm btn-outline-secondary">Data</button>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'TodoForm'
}
</script>

<style scoped>
/* O CSS exclusivo deste componente virá aqui */
</style>