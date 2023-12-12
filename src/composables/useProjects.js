import { computed } from "vue"
import { useStore } from "vuex"

export default function useProjects() {

    const store = useStore()

    const projects = computed(() => store.getters['projects/projects'] )
    const blocks = computed(() => store.getters['flats/blocks'] )

    const getProjects = async () => {
        await store.dispatch('projects/getProjects')
    }

    const getBlocks = async () => {
        await store.dispatch('flats/getBlocks')
    }

    return {
        projects,
        blocks,
        getProjects,
        getBlocks,
    }
}