import { computed, ref, markRaw } from "vue"
import { useStore } from "vuex"

import arrowRight from "../assets/icons/arrow-right.vue"
import logo from "../assets/images/Logo.png"

export default function useHeader() {

    const store = useStore()

    const menu = computed(() => store.getters["menus/menu"])
    const getMenu = async () => await store.dispatch("menus/getMenu")

    const headerInfo = ref([
        {
            headercomponents: {
                img: logo,
                img1: markRaw(arrowRight),
            },
        },

    ]);

    const mainMenuLinks = ref([])

    // const getMenu = async () => {
    //     axios.get('menus')
    //         .then(data => mainMenuLinks.value = data)
    //         .catch(error => console.log(error))

    // }

    // let instance = { headerInfo, getMenu, mainMenuLinks, menu };

    // return () => {
    //     return instance;
    // };

    return {
        headerInfo,
        menu,
        getMenu
    }
}