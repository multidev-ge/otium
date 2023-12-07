import { ref } from "vue"

export default function useMapedImages(){

    /**
     * @param dir projects|blocks|floors|apartments
     * @param params { id }
     */
    async function loadImage(dir, params){
        const image = await import('@/assets/images/maped/01_00001.jpg')
        console.log(image)
        // const maps = await import('...')
    }

    return {
        loadImage
    }
}