import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/pages/login.vue'),
    },
    {
        path: '/usePinia',
        name: 'UsePinia',
        meta: {
            title: '使用Pinia',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/pages/usePinia.vue'),
    },
    {
        path: '/useAxios',
        name: 'UseAxios',
        meta: {
            title: '使用Axios',
            keepAlive: false,
            requireAuth: false,
        },
        component: () => import('@/pages/useAxios.vue'),
    },
    {
        path: '/useVueUse',
        name: 'UseVueUse',
        meta: {
            keepAlive: true,
            requireAuth: false,
            title: '使用VueUse',
        },
        component: () => import('@/pages/useVueUse.vue'),
    },
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/pages/index.vue'),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
