import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$domain = 'api/v1/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
