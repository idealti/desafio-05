<template>
  <div class="d-flex justify-content-between align-items-center mb-3">
    <div>
      <span class="me-2">Filtrar:</span>
      <button @click="$emit('set-filter', 'all')" class="btn btn-sm btn-outline-secondary">Todas</button>
      <button @click="$emit('set-filter', 'pending')" class="btn btn-sm btn-outline-secondary ms-1">Pendentes</button>
      <button @click="$emit('set-filter', 'completed')" class="btn btn-sm btn-outline-secondary ms-1">Concluídas</button>
    </div>
    <div>
      <span class="me-2">Ordenar:</span>
      <button @click="$emit('set-sort', 'newest')" class="btn btn-sm btn-outline-secondary">Mais Recentes</button>
       <button @click="$emit('set-sort', 'oldest')" class="btn btn-sm btn-outline-secondary ms-1">Mais Antigos</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoActions',
  // Declaramos todos os eventos que este componente pode emitir
  emits: ['set-filter', 'set-sort']
}
</script>