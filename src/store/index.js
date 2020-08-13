import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        footer_tab: 0
    },
    mutations: {
        saveFooter_tab(state, footer_tab) {
            state.footer_tab = footer_tab
        }
    },
    actions: {
        saveFooter_tab(context, footer_tab) {
            context.commit('saveFooter_tab', footer_tab)
        }
    },
    modules: {}
})
