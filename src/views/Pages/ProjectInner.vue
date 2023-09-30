<script setup>
import MainLayout from "../../layouts/mainLayout.vue";
import ProjectBanner from "@/components/ProjectInner/ProjectBanner.vue";
import RightPart from "@/components/apartmentFinderPage/rightPart.vue";
import FiltersPart from "@/components/apartmentFinderPage/filtersPart.vue";
import Offerings from "@/components/ProjectInner/Offerings.vue";
import RightArrow from "@/assets/icons/apartmentFinderPage/rightArrow.vue";
import {useRoute} from "vue-router";
import ContactMap from "@/components/Contact/ContactMap.vue";

import super_markets from "@/assets/icons/Map/super_markets.svg";
import schools from "@/assets/icons/Map/schools.svg";
import transport from "@/assets/icons/Map/transport.svg";
import kindergarten from "@/assets/icons/Map/kindergarten.svg";
import restaurants from "@/assets/icons/Map/restaurants.svg";
import park from "@/assets/icons/Map/park.svg";
import {ref} from "vue";

// Must be extracted to specific composable
const labels = [
  {
    title: 'Super markets',
    icon: super_markets,
  },
  {
    title: 'Schools',
    icon: schools,
  },
  {
    title: 'Transport',
    icon: transport,
  },
  {
    title: 'Kindergarten',
    icon: kindergarten,
  },
  {
    title: 'Restaurants',
    icon: restaurants,
  },
  {
    title: 'Park',
    icon: park,
  }
]

const route = useRoute();
const selected = ref(0);
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

        <contact-map class="h-[640px]">
          <div
              class="z-50 flex flex-col justify-between p-10 absolute top-4 max-lg:left-4 lg:right-4 bg-white w-[464px] h-[608px] rounded-xl">
            <h3 class="font-medium text-3xl">
              Some nice things around the building
            </h3>
            <div class="flex flex-wrap items-start gap-4">
              <div @click="selected = index" v-for="(label, index) in labels" :key="index"
                   :class="{'bg-black text-white': index === selected}"
                   class="cursor-pointer flex items-center gap-x-1.5 border border-black p-3 rounded-2xl">
                <img :src="label.icon" :alt="label.title + ' icon'">
                <p v-text="label.title" class="font-medium text-xl"/>
              </div>
            </div>
            <div class="grid grid-cols-2">
              <div class="flex gap-x-1">
                <img src="@/assets/icons/Map/near.svg" alt="near icon"/>
                <span>Near: </span>
                <span class="underline">400m</span>
              </div>
              <div class="flex gap-x-1">
                <img src="@/assets/icons/Map/accessibility.svg" alt="accessibility icon"/>
                <span>Accessibility: </span>
                <span class="underline">Yes</span>
              </div>
            </div>
          </div>
        </contact-map>

        <div class="flex md:flex-row flex-col justify-between ">
          <FiltersPart/>
          <RightPart/>
        </div>
      </div>
    </div>
  </mainLayout>
</template>
