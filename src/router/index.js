import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'FirstContact',
    component: () => import('../views/FirstContact.vue'),
  },
  {
    path: '/culture-inmersion',
    name: 'CultureInmersion',
    component: () => import('../views/CultureInmersion.vue'),
  },
  {
    path: '/certificates',
    name: 'Certificates',
    component: () => import('../views/Certificates.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;