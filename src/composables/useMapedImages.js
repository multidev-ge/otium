import { computed } from "vue"
import { useStore } from "vuex"

export default function useMapedImages(){


    const store = useStore()

    const mapedImage = computed(() => store.getters('mapedImages/mapedImage'))
    // const mapedImage = computed(store.getters('mapedImages/mapedImage'))

    async function loadMapedImage(){
        // const polygons
        // const polygons = 
        // const image = await import(image_path)
        // load polygons json

    }

    return {
        mapedImage,
        loadMapedImage
    }
}