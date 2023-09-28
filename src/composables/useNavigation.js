import {ref} from "vue";

export default function useNavigation() {
    return ref([
        {
            title: 'Company',
            name: 'OtiumBrandStory',
        },
        {
            title: 'Projects',
            name: 'Projects',
        },
        {
            title: 'Media',
            name: 'Media',
        },
        {
            title: 'Contact',
            name: 'Contact',
        }
    ]);
}