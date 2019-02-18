import Vue from 'vue'
import './plugins/element.js'

import NormailizeCss from 'normalize.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import App from './App.vue'
import router from './router'

Vue.component('icon', Icon)
Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

