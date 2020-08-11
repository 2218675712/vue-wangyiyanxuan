import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexWrap from "@/components/IndexWrap";

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'IndexWrap',
    component: IndexWrap
}]

const router = new VueRouter({
    routes
})

export default router
