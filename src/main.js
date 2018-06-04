/**
 * Created by jinxin on 2018/5/8.
 */
import Vue from "vue";
import App from './App.vue';
import router  from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题

Vue.use(ElementUI, { size: 'small' });

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

