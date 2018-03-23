export interface State {
  todos: Todo[]
}
export type Todo = {
  title: string;
  completed: boolean;
}
const state: State = {
  todos: [{
    title: 'Use Vue with TypeScript',
    completed: false
  }]
}
export default state