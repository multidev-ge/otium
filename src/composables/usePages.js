import { computed, defineAsyncComponent } from "vue"
import { useStore } from "vuex"
import { useTitle } from "@vueuse/core"
import { useI18n } from "vue-i18n"
import { useRoute } from "vue-router"

export default function usePages() {

    // helpers
    const store = useStore()
    const route = useRoute()
    const { t } = useI18n({ useScope: 'global' })

    // state: vuex module getters
    const pages = computed(() => store.getters['pages/pages'])
    const page = computed(() => store.getters['pages/page'])
    const title = computed(() => store.getters['pages/title'])
    const blocks = computed(() => store.getters['pages/blocks'])

    // local block components
    const components = {
        "what-we-offer": defineAsyncComponent(() => import('@/components/Blocks/WhatWeOffer.vue')),
        "double-heading": defineAsyncComponent(() => import('@/components/Blocks/DoubleHeading.vue')),
        "double-image": defineAsyncComponent(() => import('@/components/Blocks/DoubleImage.vue')),
        "two-column-paragraph": defineAsyncComponent(() => import('@/components/Blocks/TwoColumnParagraph.vue')),
        "heafing-with-paragraph": defineAsyncComponent(() => import('@/components/Blocks/HeadingWithParagraph.vue')),
        "team-members": defineAsyncComponent(() => import('@/components/Blocks/TeamMembers.vue')),
        "contact-with-form": defineAsyncComponent(() => import('@/components/Blocks/ContactWithForm.vue')),
        "terms-and-specifications": defineAsyncComponent(() => import('@/components/Blocks/TermsAndSpecifications.vue')),
        "main-slider": defineAsyncComponent(() => import('@/components/Blocks/mainSlider.vue')),

    }

    // functions
    const getPages = async () => await store.dispatch('pages/getPages')

    const getPage = async () => store.dispatch('pages/getPage', route.meta.page_id)
        .then(_ => useTitle(`${title.value} - ${t('main.brand')}`))
        .catch(error => console.log(error))

    return {
        pages,
        page,
        title,
        blocks,
        components,
        getPage,
        getPages,
    }
}