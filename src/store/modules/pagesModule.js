import axios from "@/interceptors/axios"

const pagesModule = {
    namespaced: true,
    state() {
        return {
            page_id: null,
            pages: [],
            blocks: [],
            slug: '',
            title: '',
        }
    },
    getters: {
        page: ({ page }) => page,
        page_id: ({ page_id }) => page_id,
        blocks: ({ blocks }) => blocks,
        title: ({ title }) => title,
    },
    mutations: {
        "SET_STATE": (state, { key, value }) => state[key] = value,
    },
    actions: {
        async getPage({ commit }, id) {
            
            const { data: { data } } = await axios.get(`pages/${id}`)
            commit("SET_STATE", { key: "page_id", value: data?.id })
            commit("SET_STATE", { key: "blocks", value: data?.blocks })
            commit("SET_STATE", { key: "slug", value: data?.slug })
            commit("SET_STATE", { key: "title", value: data?.title })
        },

        async getPages({ commit }){
            const { data } = await axios.get('pages')
            commit("SET_STATE", { key: "pages", value: data })
        }
    }
}

export default pagesModule