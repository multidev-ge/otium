import { computed } from "vue"
import { useStore } from "vuex"

export default function usePages() {
    const { store } = useStore()

    const pages = computed(store.getters('pages/pages'))
    const page = computed(store.getters('pages/page'))

    const getPages = async () => {
        await store.dispatch('pages/getPages')
    }
    const getPage = async (...args) => {
        await store.dispatch('pages/getPage', ...args)
    }

    return {
        pages,
        page,
        getPage,
        getPages,
    }
}