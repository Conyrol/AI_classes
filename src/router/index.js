import Vue from 'vue';
import VueRouter from 'vue-router'
import mainPage from '../views/mainPage.vue'
import aboutPage from '../views/aboutPage.vue'
import linkPage from '../views/linkPage.vue'

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
    {
        path: '/link',
        name: 'linkPage',
        component: linkPage
    },
]

const router = new VueRouter({
    routes,
    // mode: 'history',
})

export default router