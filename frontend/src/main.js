import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Notifications from 'vue-notification'
import {router} from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import {apolloProvider} from "@/apollo";

Vue.config.productionTip = false

Vue.use(Notifications);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import './assets/customBootstrap.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  apolloProvider,
  data: {

  },
  render: h => h(App),
}).$mount('#app')
