<template lang="pug">
    li(
        v-bind:class=`{ completed: todo.completed, editing: isEditing }`
    )
        div.view
            input.toggle(type="checkbox" v-model:checked="todo.completed")
            label(@dblclick="startEditing") {{ todo.title }}
            button.destroy(@click="deleteTodo")

        input.edit(
            type="text" 
            ref="edit" 
            v-bind:value="todo.title" 
            @blur="updateTodo"
            @keydown.enter="updateTodo"
        )
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Todo } from "../store/todos/state";
import { DELETE_TODO } from "../store/todos/mutations";

@Component
export default class TodoList extends Vue {
  /* props */

  @Prop() public todo: Todo;

  /* data */

  public isEditing: boolean = false;

  public $refs: {
    edit: HTMLInputElement;
  };

  /* methods */

  public startEditing() {
    this.isEditing = true;
    // https://laracasts.com/discuss/channels/vue/vuejs-set-focus-on-textfield
    this.$nextTick(() => {
      this.$refs.edit.focus();
    });
  }

  public deleteTodo() {
    this.$store.commit(DELETE_TODO, this.todo);
  }

  public updateTodo() {
    this.isEditing = false;
    this.todo.title = this.$refs.edit.value;
  }
}
</script>
