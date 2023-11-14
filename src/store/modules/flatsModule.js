
import axios from "../../interceptors/axios"

const flatsModule = {
    namespaced: true,
    state(){
        return {
            project_id: null,
            floor: null,
            rooms: null,
            min_area: null,
            max_area: null,
            block: null,
            min_price: null,
            max_price: null,
            sold: false,
            
            blocks: [],
            flats: [],
            meta:{},
            links:{},
            per_page: 15,
        }
    },
    getters: {
        project_id: ({project_id}) => project_id,
        floor: ({floor}) => floor,
        rooms: ({rooms}) => rooms,
        min_area: ({min_area}) => min_area,
        max_area: ({max_area}) => max_area,
        block: ({block}) => block,
        min_price: ({min_price}) => min_price,
        max_price: ({max_price}) => max_price,
        sold: ({sold}) => sold,
        blocks: ({blocks}) => blocks,
        flats: ({flats}) => flats,
        meta: ({meta}) => meta,
        links: ({links}) => links,
        per_page: ({per_page}) => per_page,
        requestFilters: (state) => {
            const options = {}
            if(state.project_id){
                options.project_id = state.project_id
            }
            if(state.floor){
                options.floor = state.floor
            }
            if(state.rooms){
                options.rooms = state.rooms
            }
            if(state.min_area){
                options.min_area = state.min_area
            }
            if(state.max_area){
                options.max_area = state.max_area
            }
            if(state.block){
                options.block = state.block
            }
            if(state.min_price){
                options.min_price = state.min_price
            }
            if(state.max_price){
                options.max_price = state.max_price
            }
            if(state.sold){
                options.sold = state.sold
            }
            return options
        }
    },
    mutations: {
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
        "SET_FLATS": (state, payload) => state.flats = payload,
        "SET_META": (state, payload) => state.meta = payload,
        "SET_LINKS": (state, payload) => state.links = payload,
        "SET_PER_PAGE": (state, payload) => state.per_page = payload,
    },
    actions: {
        async getFlats({ commit, getters }){
            const params = { per_page: getters.per_page }
            const { data: { data, meta, links } } = await axios.get('flats', { params: {...params, ...getters.requestFilters} })
            commit("SET_FLATS", data)
            commit("SET_META", meta)
            commit("SET_LINKS", links)
        },
        async getBlocks({ commit, getters }){

            const { data: { data } } = await axios.get('blocks', {
                project_id: getters.project_id
            })
            commit("SET_BLOCKS", data)
        },
        async clearFilter({ commit }){
            commit("SET_PROJECT_ID", null)
            commit("SET_FLOOR", null)
            commit("SET_ROOMS", null)
            commit("SET_MIN_AREA", null)
            commit("SET_MAX_AREA", null)
            commit("SET_BLOCK", null)
            commit("SET_MIN_PRICE", null)
            commit("SET_MAX_PRICE", null)
            commit("SET_SOLD", false)

            const { data: { data } } = await axios.get('flats', { params: {...params, ...getters.requestFilters} })
            commit("SET_FLATS", data)
        },
    }
}

export default flatsModule