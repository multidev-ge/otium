<script setup>
import { ref } from 'vue'
import ProjectBanner from "@/components/ProjectInner/ProjectBanner.vue"
import MainLayout from "@/layouts/mainLayout.vue"
import Offerings from "@/components/ProjectInner/Offerings.vue"
import RightPart from "@/components/apartmentFinderPage/rightPart.vue"
import FiltersPart from "@/components/apartmentFinderPage/filtersPart.vue"
import MortgageCalculator from "@/components/Apartment/MortgageCalculator.vue"
import HomePageTitle from "../../components/Headings/HomePageTitle.vue"

const pageTitle = ref('Living the urban lifestyle')

</script>
<template>
  <MainLayout>
    <HomePageTitle :title="pageTitle" />
    <div class="flex flex-col fa-1xlg:gap-40 gap-20">
      <ProjectBanner />
      <Offerings />
      <div class="w-full">
        <iframe width="100%" height="600" class="rounded-xl "
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%203%20Iakob%20Nikoladze%20St.%200179,%20Tbilisi,%20GeorgiaStreet,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          <a href="https://www.maps.ie/population/">Population Estimator map</a>
        </iframe>
      </div>
      <div class="flex md:flex-row flex-col justify-between ">
        <FiltersPart />
        <RightPart />
      </div>
      <MortgageCalculator />
    </div>
  </MainLayout>
</template>