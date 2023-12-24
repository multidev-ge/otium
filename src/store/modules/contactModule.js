
import axios from "../../interceptors/axios"

const contactModule = {
    namespaced: true,
    state(){
        return {
            name: null,
            phone: null,
            message: null,
            loading: false,
        }
    },
    getters: {
        name: ({ name }) => name,
        phone: ({ phone }) => phone,
        message: ({ message }) => message,
        loading: ({ loading }) => loading,
    },
    mutations: {
        "SET_NAME": (state, payload) => state.name = payload,
        "SET_PHONE": (state, payload) => state.phone = payload,
        "SET_MESSAGE": (state, payload) => state.message = payload,
        "SET_LOADING": (state, payload) => state.loading = payload,
    },
    actions: {
        async submitContact({commit, getters}){
            commit("SET_LOADING", true)
            const response = await axios.post('contact', {
                name: getters.name,
                phone: getters.phone,
                message: getters.message,
            })

            // console.log(response)

            commit("SET_NAME", null)
            commit("SET_PHONE", null)
            commit("SET_MESSAGE", null)
            commit("SET_LOADING", false)
        }
    }
}

export default contactModule