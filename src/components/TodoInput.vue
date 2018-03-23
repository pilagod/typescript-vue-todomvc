<template lang="pug">
    header.header
        input.new-todo(v-model="title" @keydown.enter="addTodo" autofocus)
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { ADD_TODO } from "../store/todos/mutations";

@Component
export default class TodoInput extends Vue {
  public title: string = "";

  public addTodo() {
    this.$store.commit(ADD_TODO, this.title);
    this.title = "";
  }
}
</script>

