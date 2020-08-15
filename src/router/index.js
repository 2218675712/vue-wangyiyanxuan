import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexWrap from "@/components/IndexWrap";
import searchPage from "@/components/searchPage";
import cateList from "@/components/cateList";
import goods_detail from "@/components/goods_detail";
import login from "@/components/login";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'IndexWrap',
        component: IndexWrap
    }, {
        path: '/searchPage',
        name: 'searchPage',
        component: searchPage,
    }, {
        path: '/cateList',
        name: 'cateList',
        component: cateList,
    }, {
        path: '/goods_detail',
        name: 'goods_detail',
        component: goods_detail,
    }, {
        path: '/login',
        name: 'login',
        component: login,
    }
]

const router = new VueRouter({
    routes
})

export default router
