/**
 * Created by jinxin on 2018/5/22.
 */
import Vue from 'vue';
import Router from 'vue-router';

import home from '../components/pages/home.vue';
import first from '../components/pages/first.vue';
import second from '../components/pages/second.vue';
import explain from '../components/pages/explain.vue';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/first'
        },
        {
            path: '/home',
            component: home,
            meta: { title: '系统首页' },
            children:[
                {
                    path: '/first',
                    component: first,
                    meta: { title: 'first' }
                },
                {
                    path: '/second',
                    component: second,
                    meta: { title: 'second' }
                },
                {
                    path: '/explain',
                    component: explain,
                    meta: { title: 'explain' }
                }
            ]
        }
    ]
})