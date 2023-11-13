
import axios from "../../interceptors/axios"

const contactModule = {
    namespaced: true,
    state(){
        return {
            name: null,
            phone: null,
            message: null,
        }
    },
    getters: {
        name: ({ name }) => name,
        phone: ({ phone }) => phone,
        message: ({ message }) => message,
    },
    mutations: {
        "SET_NAME": (state, payload) => state.name = payload,
        "SET_PHONE": (state, payload) => state.phone = payload,
        "SET_MESSAGE": (state, payload) => state.message = payload,
    },
    actions: {
        async submitContact({commit, getters}){
            const response = await axios.post('contact', {
                name: getters.name,
                phone: getters.phone,
                message: getters.message,
            })

            console.log(response)

            commit("SET_NAME", null)
            commit("SET_PHONE", null)
            commit("SET_MESSAGE", null)

        }
    }
}

export default contactModule