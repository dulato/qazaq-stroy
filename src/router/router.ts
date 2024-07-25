import { createRouter, createWebHistory } from "vue-router";
import MainPage from '@/pages/MainPage.vue';
import LoginPage from '@/pages/LoginPage.vue';

export default createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            name: 'home',
            component: MainPage
        },
        {
            path: '/home', 
            redirect: { name: 'home' }
        },
        {
            path: '/index', 
            redirect: { name: 'home' }
        },
        {
            path: '/login', 
            name: 'login',
            component: LoginPage
        },
    ],
});
