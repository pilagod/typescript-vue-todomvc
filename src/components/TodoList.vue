<template lang="pug">
    section.main
        input#toggle-all.toggle-all(type="checkbox")
        label(for="toggle-all") Mark all as complete
        ul.todo-list
          todo-item(v-for="(todo, index) in todos" v-bind:key="todo.title" v-bind:todo="todo")
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import TodoItem from "./TodoItem.vue";

@Component({
  components: {
    TodoItem
  }
})
export default class TodoList extends Vue {
  public get todos() {
    return this.$store.state.todos.todos;
  }
}
</script>

