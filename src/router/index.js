/**
 * Created by jinxin on 2018/5/22.
 */
import Vue from 'vue';
import Router from 'vue-router';

import home from '../components/pages/home.vue';
import first from '../components/pages/first.vue';
import panel from '../components/pages/panel.vue';
import history from '../components/pages/history.vue';
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
                    path: '/panel',
                    component: panel,
                    meta: { title: 'panel' }
                },
                {
                    path: '/history',
                    component: history,
                    meta: { title: 'history' }
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