<template lang="pug">
    footer.footer
        span.todo-count 
          strong {{ count }} 
          span item left

        ul.filters
          li
            a(href="/" v-bind:class="{ selected: isAll }" @click.prevent="onFilterAllClicked") All
          li
            a(href="/" v-bind:class="{ selected: isActive }" @click.prevent="onFilterActiveClicked") Active
          li
            a(href="/" v-bind:class="{ selected: isCompleted }" @click.prevent="onFilterCompletedClicked") Completed

        button.clear-completed(@click="deleteCompletedTodos") Clear completed
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Filter } from "../store/todos/state";
import {
  DELETE_COMPLETED_TODOS,
  UPDATE_FILTER
} from "../store/todos/mutations";

@Component
export default class TodoFilter extends Vue {
  /* computed */

  public get filter(): Filter {
    return this.$store.state.todos.filter;
  }

  public get count(): number {
    return this.$store.getters.getFilteredTodos.length;
  }

  public get isAll(): boolean {
    return this.filter === Filter.ALL;
  }

  public get isActive(): boolean {
    return this.filter === Filter.ACTIVE;
  }

  public get isCompleted(): boolean {
    return this.filter === Filter.COMPLETED;
  }

  /* methods */

  public onFilterAllClicked() {
    this.$store.commit(UPDATE_FILTER, Filter.ALL);
  }

  public onFilterActiveClicked() {
    this.$store.commit(UPDATE_FILTER, Filter.ACTIVE);
  }

  public onFilterCompletedClicked() {
    this.$store.commit(UPDATE_FILTER, Filter.COMPLETED);
  }

  public deleteCompletedTodos() {
    this.$store.commit(DELETE_COMPLETED_TODOS);
  }
}
</script>
