import Vue from 'vue'
import App from './App'
import router from './router'
import Paginate from 'vuejs-paginate'

Vue.component('paginate', Paginate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
