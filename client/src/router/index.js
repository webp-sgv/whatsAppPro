// Composables
import { createRouter, createWebHistory } from 'vue-router'

// Json
import InfoAppJson from '@/assets/json/AppInfo.json';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: `Início | ${InfoAppJson[0].app_name_tab}`,
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/layout',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: `Modelos | ${InfoAppJson[0].app_name_tab}`,
        component: () => import(/* webpackChunkName: "home" */ '@/views/Layout.vue'),
      },
    ],
  },
  {
    path: '/account',
    component: () => import('@/layouts/default/DefaultNotBar.vue'),
    children: [
      {
        path: '',
        name: `Conta | ${InfoAppJson[0].app_name_tab}`,
        component: () => import(/* webpackChunkName: "home" */ '@/views/Account.vue'),
      },
    ],
  },
  {
    path: '/register',
    component: () => import('@/layouts/default/DefaultNotBar.vue'),
    children: [
      {
        path: '',
        name: `Criar conta | ${InfoAppJson[0].app_name_tab}`,
        component: () => import(/* webpackChunkName: "home" */ '@/views/Account.vue'),
      },
    ],
  },
  {
    path: '/help',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: `Ajuda | ${InfoAppJson[0].app_name_tab}`,
        component: () => import(/* webpackChunkName: "home" */ '@/views/Account.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router
