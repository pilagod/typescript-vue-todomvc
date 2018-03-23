<template lang="pug">
    footer.footer
        span.todo-count 
          strong {{ count }} 
          span item left

        ul.filters
          li
            a(href="/" @click.prevent="") All
          li
            a(href="/" @click.prevent="") Active
          li
            a(href="/" @click.prevent="") Completed

        button.clear-completed(@click="deleteCompletedTodos") Clear completed
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { DELETE_COMPLETED_TODOS } from "../store/todos/mutations";

@Component
export default class TodoFilter extends Vue {
  public get count(): number {
    return this.$store.state.todos.todos.length;
  }
  public deleteCompletedTodos() {
    this.$store.commit(DELETE_COMPLETED_TODOS);
  }
}
</script>
