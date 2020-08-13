import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexWrap from "@/components/IndexWrap";
import searchPage from "@/components/searchPage";
import cateList from "@/components/cateList";

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
    }
]

const router = new VueRouter({
    routes
})

export default router
