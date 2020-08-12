import Vue from 'vue'
import router from './router'
import store from './store'
// 使用vant插件
import {Button, Col, Field, Icon, Row, Tab, Tabs} from 'vant';
// 引入适配js文件
import './assets/js/rem'
// 进入初始化css
import './assets/css/reset.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'


Vue.use(Button);
Vue.use(Col);
Vue.use(Row);
Vue.use(Icon);
Vue.use(Field);
Vue.use(Tab);
Vue.use(Tabs);

Vue.use(VueAxios, axios)
// axios 配置
axios.defaults.timeout = 5000;  //设置超时时间
axios.defaults.baseURL = 'http://localhost:3344/'; //这是调用数据接口

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
