import axios from "../../interceptors/axios"

const mapModule = {
    namespaced: true,
    state() {
        return {
            categories: [],
            title: null,
        }
    },
    getters: {
        categories: ({ categories }) => categories,
        title: ({ title }) => title,
    },
    mutations: {
        "SET_STATE": (state, { key, value }) => state[key] = value
    },
    actions: {
        async getMap({ commit, getters }) {
            const { data } = await axios.get('map')
            commit("SET_STATE", { key: "categories", value: data.categories })
            commit("SET_STATE", { key: "title", value: data.title })
        }
    }
}

export default mapModule