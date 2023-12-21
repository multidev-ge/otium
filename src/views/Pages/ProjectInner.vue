<script >
// import { mapGetters, mapActions } from "vuex";
// import { useRoute } from "vue-router";
import { useI18n } from 'vue-i18n'
import MainLayout from "../../layouts/mainLayout.vue";
import ProjectBanner from "@/components/ProjectInner/ProjectBanner.vue";
import RightPart from "@/components/apartmentFinderPage/rightPart.vue";
import FiltersPart from "@/components/apartmentFinderPage/filtersPart.vue";
import Offerings from "@/components/ProjectInner/Offerings.vue";
import RightArrow from "@/assets/icons/apartmentFinderPage/rightArrow.vue";
import ContactMap from "@/components/Contact/ContactMap.vue";
import WhatWeOffer from "../../components/Blocks/WhatWeOffer.vue";
import MapedImage from "../../components/MapedImage.vue"
import TermsAndSpecifications from "../../components/Blocks/TermsAndSpecifications.vue";
import useProjects from "../../composables/useProjects"
import usePages from "../../composables/usePages"
export default {
  props: ['id'],
  components: {
    MainLayout,
    WhatWeOffer,
    TermsAndSpecifications,
    ProjectBanner,
    RightPart,
    FiltersPart,
    Offerings,
    RightArrow,
    ContactMap,
    MapedImage,
  },
  setup() {
    const props = defineProps(['id'])
    const {
        projects,
        project,
        blocks,
        getProjects,
        getProject,
        getBlocks,
      } = useProjects()
    const { t } = useI18n({ useScope: 'global' })
    
    onMounted(() => {
      getPtoject(props.id)
    })
    return { t }
  },
  computed: {
    // ...mapGetters('projects', ['project'])
  },
  methods: {
    // ...mapActions('projects', ['getProject'])
  },
  mounted() {
    this.getProject(this.$props.id)
  },
}
</script>

<template>
  <mainLayout>
    <div class="">
      <!-- {{ project }} -->
      <h1 class="text-5xl md:text-9xl mb-6 md:mb-10 md: text-center font-semibold">{{ project?.title }}</h1>
      <div class="flex flex-col lg:gap-40 gap-20">
        <!-- <ProjectBanner /> -->
        <!-- <MappedImage image_path="image_path"></MappedImage> -->
        <component v-for="{data, type} in project?.page_data?.blocks" :is="type" :content="data"></component>
        <!-- <Offerings /> -->

        <contact-map class="h-[640px] relative" :with-filter="true" />

        <div class="flex md:flex-row flex-col justify-between ">
          <FiltersPart />
          <RightPart />
        </div>
      </div>
    </div>
  </mainLayout>
</template>
