import { createStore } from 'vuex'
import app from './modules/app'
import getters from '@/store/getters'
export default createStore({
  modules: {
    app
  },
  getters
})
