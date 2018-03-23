<template lang="pug">
    section.main
        input#toggle-all.toggle-all(type="checkbox" v-model:checked="isToggleAllChecked" @click="onToggleAllClicked")
        label(for="toggle-all") Mark all as complete
        ul.todo-list
          todo-item(v-for="(todo, index) in todos" v-bind:key="`${index}-${todo.title}`" v-bind:todo="todo")
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

/* components */
import TodoItem from "./TodoItem.vue";

/* mutations */
import { Todo } from "../store/todos/state";
import { UPDATE_ALL_TODOS_COMPLETED_STATE } from "../store/todos/mutations";

@Component({
  components: {
    TodoItem
  }
})
export default class TodoList extends Vue {
  /* data */

  public isToggleAllChecked: boolean = false;

  /* computed */

  public get todos(): Todo[] {
    return this.$store.getters.getFilteredTodos;
  }

  /* methods */

  public onToggleAllClicked() {
    // this.isToggleAllChecked haven't updated yet when checkbox is clicked,
    // we should wait for next tick to get updated value of this.isToggleAllChecked
    this.$nextTick(() => {
      this.$store.commit(
        UPDATE_ALL_TODOS_COMPLETED_STATE,
        this.isToggleAllChecked
      );
    });
  }
}
</script>

