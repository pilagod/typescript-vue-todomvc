<template lang="pug">
    footer.footer
        span.todo-count 
          strong 1 
          span item left

        ul.filters
          li
            a(href="/" @click.prevent="") All
          li
            a(href="/" @click.prevent="") Active
          li
            a(href="/" @click.prevent="") Completed

        button.clear-completed Clear completed
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class TodoFilter extends Vue {}
</script>
