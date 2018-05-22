/**
 * Created by jinxin on 2018/5/22.
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/some-page'
        },
        {
            path: '/',
            component: '../component/pages/home.vue',
            meta: {title: '首页'},
            children: [
                {
                    path: '/some-page',
                    component: '../component/pages/somePage.vue',
                    meta: {title: 'somePage'}
                }
            ]
        }
    ]
})