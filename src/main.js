import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'

import router from './router'
import store from './store'

Vue.config.productionTip = false //取消提示

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
