import Vue from 'vue';
import VueRouter from 'vue-router'
import mainPage from '../views/mainPage.vue'
import aboutPage from '../views/aboutPage.vue'
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'mainPage',
        component: mainPage
    },
    {
        path: '/about',
        name: 'aboutPage',
        component: aboutPage
    },
]

const router = new VueRouter({
    routes,
    // mode: 'history',
})

export default router