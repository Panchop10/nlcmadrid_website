import Vue from 'vue';
import VueNoty from 'vuejs-noty';
import VueModal from 'vue-modal';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/scss/main.scss';
import 'vue2-animate/dist/vue2-animate.min.css';
import 'vue-modal/dist/vue-modal.css';
import 'vuejs-noty/dist/vuejs-noty.css';

window.axios = axios;
Vue.config.productionTip = false;
Vue.use(VueModal);
Vue.use(VueNoty);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
