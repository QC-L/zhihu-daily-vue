/**
 * Created by QCL on 2017/6/2.
 */
import axios from 'axios'

var requestService = function (Vue) {
  Vue.prototype.$request = function request (options) {
    options.headers = options.headers || {}
    options.params = options.params || {}
    axios[options.type](options.url, options).then(options.success.bind(this)).catch(options.error.bind(this))
  }
}
export { requestService }
