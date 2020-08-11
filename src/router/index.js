import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexWrap from "@/components/IndexWrap";
import searchPage from "@/components/searchPage";

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
    }
]

const router = new VueRouter({
    routes
})

export default router
