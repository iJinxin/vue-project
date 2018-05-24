/**
 * Created by jinxin on 2018/5/22.
 */
import Vue from 'vue';
import Router from 'vue-router';

// import home from '../components/pages/home.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: resolve => require(['../components/pages/home.vue'], resolve)
        }
    ]
})