import { State, Todo } from './state'

export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const DELETE_COMPLETED_TODOS = 'DELETE_COMPLETED_TODOS'

export default {
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
  }
}