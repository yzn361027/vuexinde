// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  "../src/assets/Tycss.css"
import '../src/assets/normal.css'
import '../src/assets/tongyong.css'
import vuex from 'vuex'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuex,
  axios,
  store,
  components: { App },
  template: '<App/>'
})


// 解决中文乱码问题
axios.defaults.headers = {
  "Content-Type": "application/json;charset=uft-8"
}
axios.defaults.transformRequest = [function (data) {
  var newData = "";
  for (var k in data) {
    newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
  }
  return newData
}]


