import { StoreOptions } from 'vuex';
import state, { State } from './state'
import mutations from './mutations'

export default <StoreOptions<State>>{
  state,
  mutations
}