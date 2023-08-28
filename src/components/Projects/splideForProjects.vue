<script setup>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css';

import ProjectInfo from "@/components/Projects/projectInfo.vue";
import AddressIcon from "@/assets/icons/Projects/addressIcon.vue";
import HomeIcon from "@/assets/icons/Projects/homeIcon.vue";
import StatusIcon from "@/assets/icons/Projects/statusIcon.vue";
import Projects from "@/composables/forProject/Projects";
import RightArrow from "@/assets/icons/apartmentFinderPage/rightArrow.vue";
import SplideArrow from "@/assets/icons/mediaInnerPage/splideArrow.vue";
import ArrowForProjectsSplide from "@/assets/icons/Projects/arrowForProjectsSplide.vue";
const projectsInfo = Projects
const {projectsList} = projectsInfo()
const mainOptions = {
  type: 'slide',
  perPage: 1,
  pagination: false,
  focus: 'center',
  gap: '1rem',
  arrows: false,
  rewind: true,
  breakpoints: {
    768:{
      heightRatio: 2,
      direction: 'ttb',
    }
  }
};
</script>
<template>
  <section class="">
    <Splide class="w-full" :options="mainOptions" :has-track="false" >
      <div class="custom-wrapper">
        <SplideTrack>
          <SplideSlide v-for="(project,index) in projectsList" @change="console.log('hey')">
            <div>
              <div class="container mx-auto flex md:flex-row flex-col md:w-full w-11/12 justify-between">
                <div class="md:w-2/6 flex flex-col md:items-start">
                  <p class="font-medium text-5xl md:text-8xl md:mb-12 mb-7">Projects</p>
                  <div class="gap-7 flex flex-col mb-6 ">
                    <p class="text-4xl font">{{projectsList[0].projectName}}</p>
                    <img class="md:hidden" alt="" :src="project.image">

                    <ProjectInfo :icon="AddressIcon" icon-name="Address" :value="project.address"/>
                    <div class="flex md:flex-col justify-between gap-7">
                      <ProjectInfo :icon="HomeIcon" icon-name="Apartments for sale" :value="project.apartmentsForSale+' apartments left'"/>
                      <ProjectInfo :icon="StatusIcon" icon-name="Status" :value="project.status"/>
                    </div>
                  </div>
                  <button class="bg-[#F0EEEC] flex items-center gap-3 px-6 py-3 justify-center  rounded-2xl mb-7 ">More About Project <right-arrow/></button>
                  <div class="flex gap-7 relative items-center">
                    <p class="text-xl">Scroll to view other projects</p>
                  </div>
                </div>
                <img class="md:w-2/4 md:flex hidden" alt="" :src="project.image">
              </div>
            </div>
          </SplideSlide>
        </SplideTrack>
      </div>
    </Splide>
  </section>
</template>


<style>


</style>
