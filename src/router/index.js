import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('../views/Landing.vue'),
  },
  {
    path: '/in-progress',
    component: () => import('../views/Index.vue'),
    children: [
      {
        path: '/',
        redirect: 'volunteer-program',
      },
      {
        path: 'volunteer-program',
        name: 'VolunteerProgram',
        component: () => import('../views/VolunteerProgram.vue'),
      },
      {
        path: 'au-pair-program',
        name: 'AuPairProgram',
        component: () => import('../views/AuPairProgram.vue'),
      },
      {
        path: 'private-classes',
        name: 'PrivateClasses',
        component: () => import('../views/PrivateClasses.vue'),
      },
      {
        path: 'online-classes',
        name: 'OnlineClasses',
        component: () => import('../views/OnlineClasses.vue'),
      },
      {
        path: 'first-contact',
        name: 'FirstContact',
        component: () => import('../views/FirstContact.vue'),
      },
      {
        path: 'culture-inmersion',
        name: 'CultureInmersion',
        component: () => import('../views/CultureInmersion.vue'),
      },
      {
        path: 'certificates',
        name: 'Certificates',
        component: () => import('../views/Certificates.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
