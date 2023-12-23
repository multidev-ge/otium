import { computed } from "vue"
import { useStore } from "vuex"
import imageDimensions from "../helpers/imageDimensions"
import processPoints from "../helpers/processPoints"

export default function useProjects() {

    const store = useStore()
    // getters
    const projects = computed(() => store.getters['projects/projects'] )
    const project = computed(() => store.getters['projects/project'] )

    const blocks = computed(() => store.getters['flats/blocks'] )
    const floors = computed(() => store.getters['flats/floors'] )
    // const floor = computed(() => store.getters['flats/floor'] )
    const floor = computed({
        get: () => store.getters['flats/floor'],
        set: (newValue) => store.commit('flats/SET_STATE', { key: 'floor', value: newValue })
    } )
    const block = computed({
        set: (newVal) => store.commit('flats/SET_STATE', {key: 'block', value: newVal}),
        get: () => store.getters['flats/block']
    })

    const getProjects = async () => {
        await store.dispatch('projects/getProjects')
    }

    const getProject = async (...args) => {
        await store.dispatch('projects/getProject', ...args)
    }

    const getBlocks = async () => {
        await store.dispatch('flats/getBlocks')
    }

    const getFloors = async () => {
        await store.dispatch('flats/getFloors')
    }

    const getFloor = async (...args) => {

        await store.dispatch('flats/getFloor', ...args)

        const { planWidth, planHeight } = await imageDimensions(floor.value?.image_url)//.then(dimensions => dimensions).catch(err => console.log(err))

        floor.value.flats = processPoints(floor.value.flats.map(flat => {
            // console.log(flat['map'])
            flat.points = (flat['map']) ? flat['map'].split(',').map(point => Number(point)) : []
            return {
              ...flat,
              isSold: !!flat.sold,
              details: {
                size: flat?.area,
                beedroom: flat?.for_living,
                price: flat?.price,
              }
            }
          }), planWidth, planHeight)

        store.commit('flats/SET_STATE', {key: floor, value: floor})
        
    }

    return {
        projects,
        project,
        blocks,
        block,
        floors,
        floor,
        getProjects,
        getProject,
        getBlocks,
        getFloors,
        getFloor,
    }
}