// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./stores";
import FastClick from 'fastclick';
import axios from "axios";
import VueAxios from "vue-axios";
import './assets/css/normalize.css'

//去除移动端延迟
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}

Vue.use(VueAxios,axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
