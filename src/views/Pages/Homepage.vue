<script>
import { mapGetters, mapActions } from 'vuex'
import ProjectBanner from "@/components/ProjectInner/ProjectBanner.vue"
// import MapedImage from '../../components/MapedImage.vue'
import MainLayout from "@/layouts/mainLayout.vue"
import Offerings from "@/components/ProjectInner/Offerings.vue"
import RightPart from "@/components/apartmentFinderPage/rightPart.vue"
import FiltersPart from "@/components/apartmentFinderPage/filtersPart.vue"
import MortgageCalculator from "@/components/Apartment/MortgageCalculator.vue"
import HomePageTitle from "../../components/Headings/HomePageTitle.vue"
import ContactMap from "@/components/Contact/ContactMap.vue";
import WhatWeOffer from "../../components/Blocks/WhatWeOffer.vue";
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useTitle } from '@vueuse/core'
export default {
  components: {
    ProjectBanner,
    // MapedImage,
    MainLayout,
    Offerings,
    RightPart,
    FiltersPart,
    MortgageCalculator,
    HomePageTitle,
    ContactMap,
    WhatWeOffer,
},
  setup() {
    const { t } = useI18n({ useScope: "global" })
    return { t }
  },
  computed: {
    ...mapGetters("pages", ["blocks", "title"])
  },
  methods: {
    ...mapActions("pages", ["getPage"])
  },
  mounted() {
    this.getPage(3).then(() => useTitle(`${this.title} - ${this.t('main.brand')}`) )
  }

}

</script>
<template>
  <MainLayout>
    <HomePageTitle :title="t('home.title')" />
    <div class="flex flex-col fa-1xlg:gap-40 gap-20">
      <ProjectBanner />
      <component v-if="blocks.length" v-for="{ data, type } in blocks" :is="type" :content="data"></component>

      <div class="w-full">
        <contact-map class="h-[840px] md:h-[640px] relative" :with-filter="true" />
      </div>
      <div class="flex md:flex-row flex-col justify-between ">
        <FiltersPart />
        <RightPart />
      </div>
      <MortgageCalculator />
    </div>
  </MainLayout>
</template>