
import axios from "../../interceptors/axios"

const projectsModule = {
    namespaced: true,
    state(){
        return {
            project: {},
            projects: [],
            per_page: 15,
        }
    },
    getters: {
        project: ({ project }) => project,
        projects: ({ projects }) => projects,
        per_page: ({ per_page }) => per_page,
    },
    mutations: {
        "SET_PROJECT": (state, payload) => state.project = payload,
        "SET_PROJECTS": (state, payload) => state.projects = payload,
    },
    actions: {
        async getProjects({ commit, getters }){
            const { data: { data } } = await axios.get('projects', {
                per_page: getters.per_page
            })
            commit("SET_PROJECTS", data)
        },
        async getProject({ commit, getters }, id){
            const { data } = await axios.get(`projects/${id}`, {
                per_page: getters.per_page
            })
            commit("SET_PROJECT", data.current )
        },
    }
}

export default projectsModule