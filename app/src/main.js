import { apply } from 'core-js/fn/reflect'
import Vue from 'vue'
import App from './App.vue'
import './css/app.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
