/**
 * Created by QCL on 2017/6/1.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  state
})
