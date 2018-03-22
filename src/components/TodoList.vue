<template lang="pug">
    section.main
        input#toggle-all.toggle-all(type='checkbox')
        label(for='toggle-all') Mark all as complete
        ul.todo-list
          li(v-for='(todo, index) in todos')
            div.view
              input.toggle(type='checkbox')
              label {{ todo.title }}
              button.destroy
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class TodoList extends Vue {
  @Prop() public todos: object[];
}
</script>

