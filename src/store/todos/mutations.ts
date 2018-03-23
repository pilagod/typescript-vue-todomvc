import { State } from './state'

export const ADD_TODO = 'ADD_TODO'

export default {
  [ADD_TODO](state: State, title: string) {
    state.todos.push({
      title,
      completed: false
    })
  }
}