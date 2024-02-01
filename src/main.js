// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "./lib/css";
import "./lib/script";
import "./lib/global";
import '@/helpers/filters.js'
import '@/lib/axios.js'

import Vue from "vue";
import App from "./App";
import router from "./router";
import EventBus from "./lib/eventBus.js";
import axios from "axios";
import moment from "moment";

window.moment = moment;

Vue.prototype.$bus = EventBus;
Vue.prototype.$http = axios;



// Create an Axios instance with default headers


/* eslint-disable no-new */

import swal from "sweetalert2";
window.swal = swal;
const toast = swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 15000
});
window.toast = toast;

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: {
    App,
  },
});
