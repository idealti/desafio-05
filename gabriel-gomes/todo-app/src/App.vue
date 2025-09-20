<style>

</style>


<template>
  <div class="container w-75 mt-5">
    <TodoHeader />
    <TodoForm />
    <TodoList />
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
  }
}
</script>