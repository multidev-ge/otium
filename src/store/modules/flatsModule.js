import axios from "../../interceptors/axios"

const flatsModule = {
    namespaced: true,
    state() {
        return {
            // flats params
            projects: [],
            project: {},
            project_id: null,
            floor: null,
            floor_id: null,
            rooms: null,
            min_area: null,
            max_area: null,
            block: null,
            block_id: null,
            min_price: null,
            max_price: null,
            sold: null,
            flats: {},
            flat: {},
            page_id: 3,
            per_page: 8,
            blocks: [],
            floors: [],
        }
    },
    getters: {
        projects: ({ projects }) => projects,
        project: ({ project }) => project,
        project_id: ({ project_id }) => project_id,
        blocks: ({ blocks }) => blocks,
        block: ({ block }) => block,
        block_id: ({ block_id }) => block_id,
        floors: ({ floors }) => floors,
        floor: ({ floor }) => floor,
        floor_id: ({ floor_id }) => floor_id,
        flats: ({ flats }) => flats,
        flat: ({ flat }) => flat,
        flat_id: ({ flat_id }) => flat_id,
        rooms: ({ rooms }) => rooms,
        min_area: ({ min_area }) => min_area,
        max_area: ({ max_area }) => max_area,
        min_price: ({ min_price }) => min_price,
        max_price: ({ max_price }) => max_price,
        sold: ({ sold }) => sold,
        per_page: ({ per_page }) => per_page,
        activeRequestFilters: (state) => {
            const options = {}
            const filters = [
                "project_id",
                "block_id",
                "floor_id",
                "rooms",
                "min_area",
                "max_area",
                "min_price",
                "max_price",
                "sold",
                "per_page",
            ]
            filters.forEach((param) => { if (state[param]) { options[param] = state[param] } })
            return options
        },
        floorRequestFilters: (state) => {
            const options = {}
            const filters = [
                "project_id",
                "block_id",
            ]
            filters.forEach((param) => { if (state[param]) { options[param] = state[param] } })
            return options
        },
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
        "SET_BLOCK_ID": (state, payload) => state.block_id = payload,
        "SET_MIN_PRICE": (state, payload) => state.min_price = payload,
        "SET_MAX_PRICE": (state, payload) => state.max_price = payload,
        "SET_SOLD": (state, payload) => state.sold = payload,
        "SET_META": (state, payload) => state.meta = payload,
        "SET_LINKS": (state, payload) => state.links = payload,
        "SET_PER_PAGE": (state, payload) => state.per_page = payload,
        "SET_FLATS": (state, payload) => state.flats = (state.flats.length) ? state.flats.concat(payload) : payload,
    },
    actions: {


        async clearFilter({ commit, getters }) {
            // commit("SET_PROJECT_ID", null)
            // commit("SET_FLOOR", null)
            commit("SET_ROOMS", null)
            commit("SET_MIN_AREA", null)
            commit("SET_MAX_AREA", null)
            commit("SET_BLOCK", null)
            commit("SET_MIN_PRICE", null)
            commit("SET_MAX_PRICE", null)
            commit("SET_SOLD", false)
            
            commit("SET_STATE", {key: "blocks", value: []})
            commit("SET_STATE", {key: "floors", value: []})
            commit("SET_STATE", {key: "project_id", value: null})
            commit("SET_STATE", {key: "block_id", value: null})
            commit("SET_STATE", {key: "floor_id", value: null})

            const { data } = await axios.get('flats', { params: { ...getters.activeRequestFilters } })
            commit("SET_FLATS", data)
        },

        async loadMore({ commit, getters }) {
            const { data: { data, meta, links } } = await axios.get(getters.links?.next, { params: { ...getters.activeRequestFilters } })
            commit("SET_MORE", { key: "flats", value: data })
        },

        // async getFloors({ commit, getters }) {
        //     const { data } = await axios.get('floors', { params: { 'block_id': (getters.block?.id) ? getters.block?.id : getters.block } })
        //     commit("SET_STATE", { key: "floors", value: data })
        // },

        async getFloors({ commit, getters }) {
            const { data } = await axios.get(`floors`, { params: { ...getters.floorRequestFilters } })
            commit("SET_STATE", { key: "floors", value: data })
        },

        async getFloor({ commit, getters }, id) {
            const { data } = await axios.get(`floors/${id}`)
            commit("SET_STATE", { key: "floor", value: data })

        },
        async getProjects({ commit, getters }, id) {
            const { data } = await axios.get(`projects`)
            commit("SET_STATE", { key: "projects", value: data })
        },
        async getBlocks({ commit, getters }) {
            const { data: { data } } = await axios.get('blocks', {
                project_id: getters.project_id
            })
            commit("SET_BLOCKS", data)
        },

        async getFlats({ commit, getters }) {
            const { data } = await axios.get('flats', { params: { ...getters.activeRequestFilters } })
            commit("SET_STATE", { key: "flats", value: data })
        },
        async getFlat({ commit }, id) {
            const { data } = await axios.get(`flats/${id}`)
            commit("SET_STATE", { key: "flat", value: data })
        },
        async getProject({ commit, getters }, id){
            const { data } = await axios.get(`projects/${id}`, {
                per_page: getters.per_page
            })
            commit("SET_STATE", {key: "project", value: data.current })
        }
    }
}

export default flatsModule