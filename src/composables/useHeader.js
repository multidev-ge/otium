import axios from "../interceptors/axios"
import { computed, ref } from "vue";
import { markRaw } from 'vue';
import arrowRight from "../assets/icons/arrow-right.vue"
import logo from "../assets/images/Logo.png"
import { useStore } from "vuex";

export default function useHeader() {


    const store = useStore()

    const menu = computed(() => store.getters["menus/menu"])
    const getMenu = async () => store.dispatch("menus/getMenu")


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