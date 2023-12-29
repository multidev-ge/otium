import { computed } from "vue"
import { useStore } from "vuex"

export default function useGoogleMap() {
    const store = useStore()
    
    const title = computed(() => store.getters['maps/title'])
    const categories = computed(() => store.getters['maps/categories'])

    const getMap = async () => {
        await store.dispatch('maps/getMap')

        // console.log(categories.value)
    }
    return {
        title,
        categories,
        getMap
    }
}