import { State, Todo, Filter } from './state'

/* todos */

export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const DELETE_COMPLETED_TODOS = 'DELETE_COMPLETED_TODOS'
export const UPDATE_ALL_TODOS_COMPLETED_STATE = 'UPDATE_ALL_TODOS_COMPLETED_STATE'

/* filter */

export const UPDATE_FILTER = 'UPDATE_FILTER'

export default {
  /* todos */

  [ADD_TODO](state: State, title: string) {
    state.todos.push({
      title,
      completed: false
    })
  },

  [DELETE_TODO](state: State, todo: Todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },

  [DELETE_COMPLETED_TODOS](state: State) {
    state.todos = state.todos.filter((todo) => !todo.completed)
  },

  [UPDATE_ALL_TODOS_COMPLETED_STATE](state: State, completed: boolean) {
    state.todos.forEach((todo) => {
      todo.completed = completed
    })
  },

  /* filter */

  [UPDATE_FILTER](state: State, newFilter: Filter) {
    state.filter = newFilter
  }
}