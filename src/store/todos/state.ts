export interface State {
  todos: Todo[],
  filter: Filter
}
export type Todo = {
  title: string;
  completed: boolean;
}
export enum Filter {
  ALL,
  ACTIVE,
  COMPLETED
}
const state: State = {
  todos: [{
    title: 'Use Vue with TypeScript',
    completed: false
  }],
  filter: Filter.ALL
}
export default state