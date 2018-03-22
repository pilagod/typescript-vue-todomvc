<template lang="pug">
    section.todoapp 
      header.header
        input.new-todo(autofocus)

      section.main
        input#toggle-all.toggle-all(type='checkbox')
        label(for='toggle-all') Mark all as complete
        ul.todo-list
          li(v-for='(todo, index) in todos')
            div.view
              input.toggle(type='checkbox')
              label {{ todo.title }}
              button.destroy

      footer.footer
        span.todo-count 
          strong 1 
          span item left

        ul.filters
          li
            a(href='/' @click.prevent='') All
          li
            a(href='/' @click.prevent='') Active
          li
            a(href='/' @click.prevent='') Completed

        button.clear-completed Clear completed
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class TodoApp extends Vue {
  @Prop() public todos: object[];

  public message: string = "Hello World";
}
</script>

<style>
.todoapp {
  margin-top: 0px;
}
</style>

