<template lang="pug">
    header.header
        input.new-todo(autofocus)
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class TodoInput extends Vue {}
</script>

