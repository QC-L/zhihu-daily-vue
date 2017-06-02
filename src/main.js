import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import FastClick from 'fastclick'
import { Swipe, SwipeItem } from 'mint-ui'

import router from './router'
import store from './store'

import 'common/stylus/index.styl'
import {requestService} from 'common/js/requestService'

FastClick.attach(document.body)

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
requestService(Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
