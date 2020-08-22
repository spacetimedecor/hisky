import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import {apolloClient, apolloProvider} from './apollo'

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(apolloClient);

import './assets/customBootstrap.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  provide: apolloProvider.provide(),
  router,
  render: h => h(App),
}).$mount('#app')
