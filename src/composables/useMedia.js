import {computed, ref} from "vue";
import mediaImg1 from "@/assets/images/MediaPage/mediaImg1.png";
import mediaImg2 from "@/assets/images/MediaPage/mediaImg2.png";
import mediaImg3 from  "@/assets/images/MediaPage/mediaImg3.png";
import mediaImg4 from  "@/assets/images/MediaPage/mediaImg4.png";
import mediaImg5 from  "@/assets/images/MediaPage/mediaImg5.png";
import mediaImg6 from  "@/assets/images/MediaPage/mediaImg6.png";
import mediaImg7 from  "@/assets/images/MediaPage/mediaImg7.png";
import mediaImg8 from  "@/assets/images/MediaPage/mediaImg8.png";
import mediaImg9 from  "@/assets/images/MediaPage/mediaImg9.png";


export function useMedia() {

    const categories = ref(['All', 'News', 'Photo Gallery', 'Video Gallery'])

    function setCategory(cat) {
        selectedCategory.value = cat
    }

    const selectedCategory = ref('All')

    const filteredData = computed(() => {
        if (selectedCategory.value === 'All') {
            return media.value
        }
        return media.value.filter(e => e.category === selectedCategory.value)
    })

    const media = ref([
        {
            title: 'Embracing Minimalism: The Construction Industry\'s Path to Sustainable Design',
            image: mediaImg1,
            date: '2 Jul,2023',
            category: 'News'
        },
        {
            title: 'Minimalism in Construction:\nSustainable Design Solutions',
            image: mediaImg2,
            date: '2 Jul,2023',
            category: 'News'
        },
        {
            title: 'Simplicity in Architecture: Unveiling the Beauty of Minimalist Constructions',
            image: mediaImg3,
            date: '2 Jul,2023',
            category: 'Photo Gallery'
        },
        {
            title: 'Minimalist Architecture Redefining Aesthetics in Modern Construction',
            image: mediaImg4,
            date: '2 Jul,2023',
            category: 'Video Gallery'
        },
        {
            title: 'The Rise of Tiny Homes and Sustainable Micro Dwellings',
            image: mediaImg5,
            date: '2 Jul,2023',
            category: 'News'
        },
        {
            title: 'The Power of Minimalist Construction in Cutting Costs and Waste',
            image: mediaImg6,
            date: '2 Jul,2023',
            category: 'News'
        },
        {
            title: 'Minimalist Construction Paves the Way for Sustainable Future',
            image: mediaImg7,
            date: '2 Jul,2023',
            category: 'Photo Gallery'
        },
        {
            title: 'Minimalism in Construction: Sustainable Design Solutions',
            image: mediaImg8,
            date: '2 Jul,2023',
            category: 'Video Gallery'
        },
        {
            title: 'Embracing Minimalism: The Construction Industry\'s Path to Sustainable Design',
            image: mediaImg9,
            date: '2 Jul,2023',
            category: 'News'
        },
    ])

    return {
        categories, filteredData, selectedCategory, setCategory,
    }
}