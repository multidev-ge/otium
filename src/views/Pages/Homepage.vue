<script setup>
import {ref} from 'vue'
import ProjectBanner from "@/components/ProjectInner/ProjectBanner.vue"
import MainLayout from "@/layouts/mainLayout.vue"
import Offerings from "@/components/ProjectInner/Offerings.vue"
import RightPart from "@/components/apartmentFinderPage/rightPart.vue"
import FiltersPart from "@/components/apartmentFinderPage/filtersPart.vue"
import MortgageCalculator from "@/components/Apartment/MortgageCalculator.vue"
import HomePageTitle from "../../components/Headings/HomePageTitle.vue"
import ContactMap from "@/components/Contact/ContactMap.vue";

const pageTitle = ref('Living the urban lifestyle')

</script>
<template>
  <MainLayout>
    <HomePageTitle :title="pageTitle"/>
    <div class="flex flex-col fa-1xlg:gap-40 gap-20">
      <ProjectBanner />
      <Offerings/>
      <div class="w-full">
        <contact-map class="h-[640px] relative" :with-filter="true"/>
      </div>
      <div class="flex md:flex-row flex-col justify-between ">
        <FiltersPart/>
        <RightPart/>
      </div>
      <MortgageCalculator/>
    </div>
  </MainLayout>
</template>