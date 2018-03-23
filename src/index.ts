import Vue from 'vue'
import store from './store'
import TodoApp from './components/TodoApp.vue'

new TodoApp({
  store
}).$mount('main')