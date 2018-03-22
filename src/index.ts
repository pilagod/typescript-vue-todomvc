import Vue from 'vue'
import TodoApp from './components/TodoApp.vue'

new TodoApp({
  propsData: {
    todos: [{
      title: 'Use Vue with TypeScript',
      completed: false
    }]
  }
}).$mount('main')