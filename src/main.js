/**
 * Created by jinxin on 2018/5/8.
 */
import Vue from "vue";
import App from './App.vue';
import routes  from './router';

new Vue({
    router: routes,
    render: h => h(App)
}).$mount('#app');