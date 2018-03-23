<template lang="pug">
    li(v-bind:class="{ completed: todo.completed }")
        div.view
            input.toggle(type='checkbox' v-model:checked="todo.completed")
            label {{ todo.title }}
            button.destroy
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Todo } from "../store/todos/state";

@Component
export default class TodoList extends Vue {
  @Prop() public todo: Todo;
}
</script>
