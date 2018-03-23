<template lang="pug">
    section.todoapp 
      todo-input
      todo-list
      todo-filter
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

/* components */
import TodoFilter from "./TodoFilter.vue";
import TodoInput from "./TodoInput.vue";
import TodoList from "./TodoList.vue";

@Component({
  components: {
    TodoFilter,
    TodoInput,
    TodoList
  }
})
export default class TodoApp extends Vue {}
</script>

<style>
.todoapp {
  margin-top: 0px;
}
</style>

