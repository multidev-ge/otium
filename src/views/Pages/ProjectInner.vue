<script setup>
import MainLayout from "../../layouts/mainLayout.vue";
import ProjectBanner from "@/components/ProjectInner/ProjectBanner.vue";
import RightPart from "@/components/apartmentFinderPage/rightPart.vue";
import FiltersPart from "@/components/apartmentFinderPage/filtersPart.vue";
import Offerings from "@/components/ProjectInner/Offerings.vue";
import RightArrow from "@/assets/icons/apartmentFinderPage/rightArrow.vue";
</script>

<template>
  <mainLayout>
    <div class="mx-4 md:container md:mx-auto">
      <h1 class="text-5xl md:text-9xl mb-6 md:mb-10 md: text-center font-semibold">Project Name</h1>
      <div class="flex flex-col lg:gap-40 gap-20">
        <ProjectBanner/>

        <div class="w-full flex flex-col lg:flex-row">

          <div class="lg:w-1/3 flex justify-center items-center mb-5 lg:mb-0">
            <h3 class="text-4xl font-medium">Terms of payment and technical specifications</h3>
          </div>

          <div class="flex flex-col lg:flex-row  lg:w-2/3 p-6 border border-1 border-[#F0EEEC] rounded-xl">
            <div class="w-full text-[#626262] text-lg font-medium mb-2 lg:mb-0">
              Payment Terms: Flexible and transparent, with initial deposit. Milestone-based payments. Technical
              Specifications: Advanced technology, sustainable practices, safety-focused, and precision construction,
              For more information, see
            </div>
            <div class="flex flex-col gap-5">
              <button class="lg:w-60 w-full bg-[#F0EEEC] rounded-2xl p-3">
                <p>Terms of Payment <right-arrow class="inline-block ml-1"/></p>
              </button>
              <router-link to="/projects/:id/details">
                <button class="lg:w-60 w-full bg-[#F0EEEC] rounded-2xl p-3">
                  <p>Technical characteristics <right-arrow class="inline-block ml-1"/></p>
                </button>
              </router-link>

            </div>
          </div>
        </div>

        <Offerings/>

        <div style="width: 100%">
          <iframe width="100%" height="600" class="rounded-xl "
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%203%20Iakob%20Nikoladze%20St.%200179,%20Tbilisi,%20GeorgiaStreet,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.maps.ie/population/">Population Estimator map</a></iframe>
        </div>

        <div class="flex md:flex-row flex-col container mx-auto justify-between ">
          <FiltersPart/>
          <RightPart/>
        </div>
      </div>
    </div>
  </mainLayout>
</template>
