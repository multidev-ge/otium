
import axios from "../../interceptors/axios"

const mediaModule = {
    namespaced: true,
    state() {
        return {
            active: null,
            activePage: null,
            per_page: 5,
            media: {},
            similar: [],
            medias: [],
            categories: [],
            next_page: null,
        }
    },
    getters: {
        next_page: ({ next_page }) => next_page,
        active: ({ active }) => active,
        activePage: ({ activePage }) => activePage,
        per_page: ({ per_page }) => per_page,
        similar: ({ similar }) => similar,
        media: ({ media }) => media,
        medias: ({ medias }) => medias,
        filteredMedias: ({ medias, active }) => (!active || active === 1) ? medias?.data : medias?.data?.filter(media => media?.category?.id == active),
        categories: ({ categories }) => categories,
        links: ({ medias: { links } }) => links,
        isMore: ({ medias: { links } }) => !!links?.next,
        activeRequestFilters: (state) => {
            const options = {}
            const filters = [
                "per_page"
            ]
            filters.forEach((param) => { if (state[param]) { options[param] = state[param] } })
            return options
        },
    },
    mutations: {
        "SET_STATE": (state, { key, value }) => state[key] = value,
        "SET_MORE": (state, { key, value }) => {
            state[key].data = state[key].data.concat(value.data)
            state[key].links = value.links
            state[key].meta = value.meta
        },
        "SET_NEXT_PAGE": (state, payload) => state.next_page = payload,
        "SET_ACTIVE": (state, payload) => state.active = payload,
        "SET_ACTIVE_PAGE": (state, payload) => state.activePage = payload,
        "SET_PER_PAGE": (state, payload) => state.per_page = payload,
        "SET_MEDIA": (state, payload) => state.media = payload,
        "SET_SIMILAR": (state, payload) => state.similar = payload,
        "SET_MEDIAS": (state, payload) => state.medias = (!payload.more) ? payload.data : state.medias.concat(payload.data),
        "SET_CATEGORIES": (state, payload) => state.categories = payload,
    },
    actions: {
        async getMedias({ commit, getters }, more = false) {
            const { data } = await axios.get('media', { params: { ...getters.activeRequestFilters } })

            commit("SET_STATE", { key: "medias", value: data })
            // const { next } = links
            // commit("SET_NEXT_PAGE", next)
            // commit("SET_MEDIAS", { data: data, more: more })
        },
        async getMedia({ commit }, id) {
            const { data: { data, similar } } = await axios.get(`media/${id}`)

            commit("SET_MEDIA", data)
            commit("SET_SIMILAR", similar)
        },

        async getCategories({ commit, getters }) {
            const { data } = await axios.get('categories')
            commit("SET_CATEGORIES", data.data)
            commit("SET_ACTIVE", (getters.categories.length) ? getters.categories[0].id : null)
        },

        async setActive({ commit }, id) {
            commit('SET_ACTIVE', id)
        },

        async loadMore({ commit, getters }) {
            const { data } = await axios.get(getters.links?.next, { params: { ...getters.activeRequestFilters } })
            commit("SET_MORE", { key: "medias", value: data })
        },

    }
}

export default mediaModule