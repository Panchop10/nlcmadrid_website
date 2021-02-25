import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('../views/business/Landing.vue'),
  },
  {
    path: '/in-progress',
    name: 'GeneralLanding',
    component: () => import('../views/generalIndex.vue'),
  },
  {
    path: '/in-progress/business',
    component: () => import('../views/business/Index.vue'),
  },
  {
    path: '/in-progress/spanish',
    component: () => import('../views/spanish/Index.vue'),
    children: [
      {
        path: '/',
        redirect: 'spanish-internship',
      },
      {
        path: 'spanish-internship',
        name: 'SpanishInternship',
        component: () => import('../views/spanish/SpanishInternship.vue'),
      },
      {
        path: 'visa-application',
        name: 'VisaApplication',
        component: () => import('../views/spanish/VisaApplication.vue'),
      },
      {
        path: 'football-program',
        name: 'FootballProgram',
        component: () => import('../views/spanish/FootballProgram.vue'),
      },
      {
        path: 'summer-camp',
        name: 'SummerCamp',
        component: () => import('../views/spanish/SummerCamp.vue'),
      },
      {
        path: 'volunteer-program',
        name: 'VolunteerProgram',
        component: () => import('../views/spanish/VolunteerProgram.vue'),
      },
      {
        path: 'au-pair-program',
        name: 'AuPairProgram',
        component: () => import('../views/spanish/AuPairProgram.vue'),
      },
      {
        path: 'private-classes',
        name: 'PrivateClasses',
        component: () => import('../views/spanish/PrivateClasses.vue'),
      },
      {
        path: 'online-classes',
        name: 'OnlineClasses',
        component: () => import('../views/spanish/OnlineClasses.vue'),
      },
      {
        path: 'first-contact',
        name: 'FirstContact',
        component: () => import('../views/spanish/FirstContact.vue'),
      },
      {
        path: 'culture-inmersion',
        name: 'CultureInmersion',
        component: () => import('../views/spanish/CultureInmersion.vue'),
      },
      {
        path: 'certificates',
        name: 'Certificates',
        component: () => import('../views/spanish/Certificates.vue'),
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
