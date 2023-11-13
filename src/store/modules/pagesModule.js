
import axios from "../../interceptors/axios"

const pagesModule = {
    namespaced: true,
    state(){
        return {
            id: null,
            title: null,
            slug: null,
            blocks: [],
        }
    },
    getters: {
        id: ({ id }) => id,
        title: ({ title }) => title,
        slug: ({ slug }) => slug,
        blocks: ({ blocks }) => blocks,
    },
    mutations: {
        "SET_ID": (state, payload) => state.id = payload,
        "SET_TITLE": (state, payload) => state.title = payload,
        "SET_SLUG": (state, payload) => state.slug = payload,
        "SET_BLOCKS": (state, payload) => state.blocks = payload,
    },
    actions: {
        async getPage({commit}, id){
            const { data: { data } } = await axios.get(`pages/${id}`)
            commit("SET_ID", data.id)
            commit("SET_TITLE", data.title)
            commit("SET_SLUG", data.slug)
            commit("SET_BLOCKS", data.blocks)
        }
    }
}

export default pagesModule