import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue'
import HowItWorks from '../views/HowItWorks.vue';
import Price from '../views/Price.vue';
import Edit from '../views/Edit.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/how-it-works',component: HowItWorks },
  { path: '/price',component: Price },
  { path: '/edit',component: Edit },
  { path: '/',component: Home }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

export default router;
