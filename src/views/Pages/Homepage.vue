<script setup>
import ProjectBanner from "@/components/ProjectInner/ProjectBanner.vue";
import MainLayout from "@/layouts/mainLayout.vue";
import Offerings from "@/components/ProjectInner/Offerings.vue";
import RightPart from "@/components/apartmentFinderPage/rightPart.vue";
import FiltersPart from "@/components/apartmentFinderPage/filtersPart.vue";
import MortgageCalculator from "@/components/Apartment/MortgageCalculator.vue";

</script>
<template>
  <mainLayout>
    <div class="">
      <h1 class="text-5xl md:text-9xl mb-6 md:mb-10 md: text-start font-semibold">Living the urban lifestyle</h1>
      <div class="flex flex-col lg:gap-40 gap-20">
        <ProjectBanner/>

        <Offerings/>

        <div style="width: 100%" >
          <iframe width="100%" height="600" class="rounded-xl "
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%203%20Iakob%20Nikoladze%20St.%200179,%20Tbilisi,%20GeorgiaStreet,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.maps.ie/population/">Population Estimator map</a></iframe>
        </div>

        <div class="flex md:flex-row flex-col justify-between ">
          <FiltersPart/>
          <RightPart/>
        </div>

        <MortgageCalculator />


      </div>
    </div>
  </mainLayout>
</template>

<style scoped>

</style>
