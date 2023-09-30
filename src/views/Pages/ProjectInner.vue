<script setup>
import MainLayout from "../../layouts/mainLayout.vue";
import ProjectBanner from "@/components/ProjectInner/ProjectBanner.vue";
import RightPart from "@/components/apartmentFinderPage/rightPart.vue";
import FiltersPart from "@/components/apartmentFinderPage/filtersPart.vue";
import Offerings from "@/components/ProjectInner/Offerings.vue";
import RightArrow from "@/assets/icons/apartmentFinderPage/rightArrow.vue";
import {useRoute} from "vue-router";
import ContactMap from "@/components/Contact/ContactMap.vue";
import {ref} from "vue";

const route = useRoute();
</script>

<template>
  <mainLayout>
    <div class="">
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
                <p>Terms of Payment
                  <right-arrow class="inline-block ml-1"/>
                </p>
              </button>
              <router-link :to="`/projects/${route.params.id}/details`">
                <button class="lg:w-60 w-full bg-[#F0EEEC] rounded-2xl p-3">
                  <p>Technical characteristics
                    <right-arrow class="inline-block ml-1"/>
                  </p>
                </button>
              </router-link>

            </div>
          </div>
        </div>

        <Offerings/>

        <contact-map class="h-[640px] relative" :with-filter="true"/>

        <div class="flex md:flex-row flex-col justify-between ">
          <FiltersPart/>
          <RightPart/>
        </div>
      </div>
    </div>
  </mainLayout>
</template>
