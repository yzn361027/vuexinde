// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  "../src/assets/Tycss.css"
import '../src/assets/normal.css'
import vuex from 'vuex'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuex,
  axios,
  components: { App },
  template: '<App/>'
})


