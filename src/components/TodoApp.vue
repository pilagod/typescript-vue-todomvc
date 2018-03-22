<template>
    <div>
        {{ message }}
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class TodoApp extends Vue {
  public message: string = "Hello World";
}
</script>
