import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 使用vant插件
import {Button, Col, Field, Icon, Row} from 'vant';
Vue.use(Button);
Vue.use(Col);
Vue.use(Row);
Vue.use(Icon);
Vue.use(Field);
// 引入适配js文件
import './assets/js/rem'
// 进入初始化css
import './assets/css/reset.css'


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
