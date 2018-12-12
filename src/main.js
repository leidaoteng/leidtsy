import Vue from 'vue'
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import axios from "axios"
import qs from "qs"
import Vuex from 'vuex'


Vue.prototype.axios=axios
Vue.prototype.qs=qs
Vue.use(ElementUI);
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  $,
  render: h => h(App)
}).$mount('#app')
