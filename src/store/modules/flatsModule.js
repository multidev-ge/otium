import axios from "../../interceptors/axios"

const flatsModule = {
    namespaced: true,
    state() {
        return {
            // flats params
            project_id: 1,
            floor: null,
            rooms: null,
            min_area: null,
            max_area: null,
            block: null,
            min_price: null,
            max_price: null,
            sold: false,
            // flats response
            flats: {},
            // flats/{id} as param in url
            flat: {},

            // page thing
            page_id: 3,
            per_page: 15,
            blocks: [],
        }
    },
    getters: {
        project_id: ({ project_id }) => project_id,
        floor: ({ floor }) => floor,
        rooms: ({ rooms }) => rooms,
        min_area: ({ min_area }) => min_area,
        max_area: ({ max_area }) => max_area,
        block: ({ block }) => block,
        min_price: ({ min_price }) => min_price,
        max_price: ({ max_price }) => max_price,
        sold: ({ sold }) => sold,
        per_page: ({ per_page }) => per_page,
        activeRequestFilters: (state) => {
            const options = {}
            const filters = [
                "project_id",
                "floor",
                "rooms",
                "min_area",
                "max_area",
                "block",
                "min_price",
                "max_price",
                "sold",
                "per_page",
            ]
            filters.forEach((param) => { if (state[param]) { options[param] = state[param] } })
            return options
        },

        blocks: ({ blocks }) => blocks,

        flats: ({ flats }) => flats,
        flat: ({ flat }) => flat,
        // meta: ({ meta }) => meta,
        // links: ({ links }) => links,
        links: ({ flats: { links } }) => links,
        isMore: ({ flats: { links } }) => !!links?.next,
    },
    mutations: {
        "SET_STATE": (state, { key, value }) => state[key] = value,
        "SET_MORE": (state, { key, value }) => state[key].data = state[key].data.concat(value),
        "SET_PROJECT_ID": (state, payload) => state.project_id = payload,
        "SET_FLOOR": (state, payload) => state.floor = payload,
        "SET_ROOMS": (state, payload) => state.rooms = payload,
        "SET_MIN_AREA": (state, payload) => state.min_area = payload,
        "SET_MAX_AREA": (state, payload) => state.max_area = payload,
        "SET_BLOCKS": (state, payload) => state.blocks = payload,
        "SET_BLOCK": (state, payload) => state.block = payload,
        "SET_MIN_PRICE": (state, payload) => state.min_price = payload,
        "SET_MAX_PRICE": (state, payload) => state.max_price = payload,
        "SET_SOLD": (state, payload) => state.sold = payload,
        "SET_META": (state, payload) => state.meta = payload,
        "SET_LINKS": (state, payload) => state.links = payload,
        "SET_PER_PAGE": (state, payload) => state.per_page = payload,
        "SET_FLATS": (state, payload) => state.flats = (state.flats.length) ? state.flats.concat(payload) : payload,
    },
    actions: {
        async getFlats({ commit, getters }) {
            // const params = { per_page: getters.per_page }
            // const { data: { data, meta, links } } = await axios.get('flats', { params: { ...params, ...getters.activeRequestFilters } })
            const { data } = await axios.get('flats', { params: { ...getters.activeRequestFilters } })

            // commit("SET_FLATS", data)
            // commit("SET_META", meta)
            // commit("SET_LINKS", links)

            // commit("SET_STATE", { key: "flats", value: data })
            // commit("SET_STATE", { key: "meta", value: meta })
            // commit("SET_STATE", { key: "links", value: links })
            commit("SET_STATE", { key: "flats", value: data })
        },
        async getBlocks({ commit, getters }) {

            const { data: { data } } = await axios.get('blocks', {
                project_id: getters.project_id
            })
            commit("SET_BLOCKS", data)
        },
        async clearFilter({ commit, getters }) {

            commit("SET_PROJECT_ID", null)
            commit("SET_FLOOR", null)
            commit("SET_ROOMS", null)
            commit("SET_MIN_AREA", null)
            commit("SET_MAX_AREA", null)
            commit("SET_BLOCK", null)
            commit("SET_MIN_PRICE", null)
            commit("SET_MAX_PRICE", null)
            commit("SET_SOLD", false)

            const { data: { data } } = await axios.get('flats', { params: { ...getters.activeRequestFilters } })
            commit("SET_FLATS", data)
        },
        async loadMore({ commit, getters }) {
            // commit("SET_PROJECT_ID", null)
            // commit("SET_FLOOR", null)
            // commit("SET_ROOMS", null)
            // commit("SET_MIN_AREA", null)
            // commit("SET_MAX_AREA", null)
            // commit("SET_BLOCK", null)
            // commit("SET_MIN_PRICE", null)
            // commit("SET_MAX_PRICE", null)
            // commit("SET_SOLD", false)

            const { data: { data, meta, links } } = await axios.get(getters.links?.next, { params: { ...getters.activeRequestFilters } })
            // commit("SET_FLATS", data)
            commit("SET_MORE", { key: "flats", value: data })
            // commit("SET_STATE", { key: "meta", value: meta })
            // commit("SET_STATE", { key: "links", value: links })
        },
    }
}

export default flatsModule