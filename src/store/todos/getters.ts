import { State, Filter } from './state'

export default {
  getFilteredTodos(state: State) {
    switch (state.filter) {
      case Filter.ALL:
        return state.todos
      case Filter.ACTIVE:
        return state.todos.filter((todo) => !todo.completed)
      case Filter.COMPLETED:
        return state.todos.filter((todo) => todo.completed)
    }
  }
}