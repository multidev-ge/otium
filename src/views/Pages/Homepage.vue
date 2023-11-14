<script>
import { mapGetters, mapActions } from 'vuex'
import ProjectBanner from "@/components/ProjectInner/ProjectBanner.vue"
import MainLayout from "@/layouts/mainLayout.vue"
import Offerings from "@/components/ProjectInner/Offerings.vue"
import RightPart from "@/components/apartmentFinderPage/rightPart.vue"
import FiltersPart from "@/components/apartmentFinderPage/filtersPart.vue"
import MortgageCalculator from "@/components/Apartment/MortgageCalculator.vue"
import HomePageTitle from "../../components/Headings/HomePageTitle.vue"
import ContactMap from "@/components/Contact/ContactMap.vue";
import WhatWeOffer from "../../components/Blocks/WhatWeOffer.vue";
import { useI18n } from 'vue-i18n'
export default {
  components: {
    ProjectBanner,
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
    ...mapGetters("pages", ["blocks"])
  },
  methods: {
    ...mapActions("pages", ["getPage"])
  },
  mounted() {
    this.getPage(3)
  }

}

</script>
<template>
  <MainLayout>
    <HomePageTitle :title="t('home.title')" />
    <div class="flex flex-col fa-1xlg:gap-40 gap-20">
      <ProjectBanner />
      <!-- <Offerings /> -->

      <component v-for="{ data, type } in blocks" :is="type" :content="data"></component>

      <div class="w-full">
        <contact-map class="h-[640px] relative" :with-filter="true" />
      </div>
      <div class="flex md:flex-row flex-col justify-between ">
        <FiltersPart />
        <RightPart />
      </div>
      <MortgageCalculator />
    </div>
  </MainLayout>
</template>