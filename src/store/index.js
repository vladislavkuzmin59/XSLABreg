import Vue from 'vue'
import Vuex from 'vuex'
import middleware from './modules/middleware'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    middleware,
  }
})
