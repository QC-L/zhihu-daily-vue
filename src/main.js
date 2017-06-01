import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import FastClick from 'fastclick'

import router from './router'
import store from './store'

import 'common/stylus/index.styl'

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
