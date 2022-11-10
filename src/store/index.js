import Vue from 'vue'
import Vuex from 'vuex'

import almaStore from '@/modules/alma/store'
import alexStore from '@/modules/alex/store'
import hugoStore from '@/modules/hugo/store'
import loginModule from '@/modules/login/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    almaStore,
    alexStore,
    hugoStore,
    loginModule,
  }
})
