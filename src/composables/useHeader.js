import axios from "../interceptors/axios"
import { ref } from "vue";
import { markRaw } from 'vue';
import arrowRight from "../assets/icons/arrow-right.vue"
import logo from "../assets/images/Logo.png"

export default (function useHeader() {
    const headerInfo = ref([
        {
            headercomponents: {
                img: logo,
                img1: markRaw(arrowRight),
            },
        },
        
    ]);

    const mainMenuLinks = ref([])

    const getMenu = async () => {
        const { data } = await axios.get('menus')
        mainMenuLinks.value = data
    }

    let instance = { headerInfo, getMenu, mainMenuLinks };

    return () => {
        return instance;
    };
})();