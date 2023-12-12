import { ref, computed } from "vue"
import { useStore, mapActions } from "vuex"
import apartmentFinder from "@/composables/forApartmentFinder/apartmentFinder";
import useApartment from "@/composables/apartment/useApartment"

export default function useApartments() {

    const store = useStore()

    const flat = computed(() => store.getters['flats/flat'])
    const rooms = useApartment()
    const maxRooms = ref(4)
    const currentRoom = ref(3)

    const filterRooms = computed({
        set: (newValue) => store.commit('flats/SET_STATE', { key: 'rooms', value: newValue }),
        get: () => store.getters['flats/rooms'],
    })
    const project_id = computed({
        set: async (newValue) => {
            store.commit('flats/SET_STATE', { key: 'project_id', value: newValue })
            await getFlats()
        },
        get: () => store.getters['flats/project_id'],
    })
    const block = computed({
        set: async (newValue) => {
            store.commit('flats/SET_STATE', { key: 'block', value: newValue })
            await getFlats()
        },
        get: () => store.getters['flats/block'],
    })
    const sold = computed({
        set: async (newValue) => {
            store.commit('flats/SET_STATE', { key: 'sold', value: newValue })
            await getFlats()
        },
        get: () => store.getters['flats/sold'],
    })

    const finderFields = {
        project_id,
        filterRooms,
        block,
        sold,
    }

    const apartments = apartmentFinder
    const {
        doubleSliderOptions,
    } = apartments()

    /**
     * Functions
     */
    const getFlat = async (id) => { await store.dispatch('flats/getFlat', id) }
    const getFlats = async () => { await store.dispatch('flats/getFlats') }
    const clearFilter = async () => {
        await store.dispatch('flats/clearFilter')
        getFlats()
    }

    const updateRooms = async (room) => {
        store.commit('flats/SET_ROOMS', room)
        store.dispatch('flats/getFlats')
    }

    const twoChange = (min, max, name) => {
        store.commit(`flats/SET_MIN_${name.toUpperCase()}`, min)
        store.commit(`flats/SET_MAX_${name.toUpperCase()}`, max)
        getFlats()
    }

    const functions = {
        getFlat,
        getFlats,
        twoChange,
        updateRooms,
        clearFilter,
    }

    return {
        flat,
        rooms,
        maxRooms,
        currentRoom,
        doubleSliderOptions,
        ...finderFields,
        ...functions,
    }
}