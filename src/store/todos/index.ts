import { StoreOptions } from 'vuex';
import state, { State } from './state'
import getters from './getters'
import mutations from './mutations'

export default <StoreOptions<State>>{
  state,
  getters,
  mutations
}