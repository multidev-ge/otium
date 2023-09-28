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
                title4: "Find your apartment",
            },
        }
    ]);


    let instance = { headerInfo  };

    return () => {
        return instance;
    };
})();