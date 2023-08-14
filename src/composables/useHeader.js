import { ref } from "vue";
import { markRaw } from 'vue';
import Logo from "../assets/icons/Logo.vue"
import arrowRight from "../assets/icons/arrow-right.vue"

export default (function useHeader() {
    const headerInfo = ref([
        {
            headercomponents: {
                img: markRaw(Logo),
                img1: markRaw(arrowRight),
                language: "En",
                language1: "Ge ",
                title: "Company",
                title1: "Projects",
                title2: "Media",
                title3: "Contact",
                title4: "Find your apartment",
            },
        }
    ]);


    let instance = { headerInfo  };

    return () => {
        return instance;
    };
})();