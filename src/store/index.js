import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'

Vue.use(Vuex)

const moduleFiles = require.context('./modules', true, /\.js$/)

const modules = moduleFiles.keys().reduce((modulelist, modulePath) => {
  const key = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = moduleFiles(modulePath)
  modulelist[key] = value.default
  return modulelist
}, {})

const store = new Vuex.Store({
  getters,
  modules
})

export default store
