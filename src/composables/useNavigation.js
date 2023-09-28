import {ref} from "vue";

export default function useNavigation() {
    return ref([
        {
            name: 'OtiumBrandStory',
        },
        {
            name: 'Projects',
        },
        {
            name: 'Media',
        },
        {
            name: 'Contact',
        }
    ]);
}