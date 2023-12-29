import axios from "@/interceptors/axios"

const state = () => {
    return {
        menu: [],
    }
}

const getters = {
    menu: ({ menu }) => menu.sort((a, b) => {

        if(b.url === '/media') return -1

        if (a.id < b.id) {
            return -1
        }
        if (a.id > b.id) {
            return 1
        }
        return 0
    })
}

const mutations = {
    "SET_STATE": (state, { key, value }) => state[key] = value,
}

const actions = {
    getMenu: async ({ commit }) => axios.get('menus')
        .then(response => commit("SET_STATE", { key: "menu", value: response.data }))
        .catch(error => console.log(error))
}

const menusModule = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}

export default menusModule