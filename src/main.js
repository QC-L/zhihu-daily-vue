import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import FastClick from 'fastclick'
import { Swipe, SwipeItem, Cell } from 'mint-ui'
import VueScrollLoading from 'vue-scroll-loading'

import router from './router'
import store from './store'

import 'common/stylus/index.styl'
import {requestService} from 'common/js/requestService'

FastClick.attach(document.body)

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Cell.name, Cell)
Vue.use(VueScrollLoading, {
  threshold: 10
})
requestService(Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
