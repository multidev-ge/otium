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
const projectsInfo = Projects
const {projectsList} = projectsInfo()


const mainOptions = {
  type: 'slide',
  perPage: 1,
  pagination: false,
  focus: 'center',
  gap: '1rem',
  arrows: true,
  rewind: true,

};
</script>
<template>
  <section class="">
    <Splide class="w-full" :options="mainOptions" :has-track="false" >
      <div class="custom-wrapper">
        <SplideTrack>
          <SplideSlide v-for="project in projectsList">
            <div>
              <div class="container mx-auto flex justify-between">
                <div class="w-2/6 flex flex-col items-start">
                  <p class="font-medium text-8xl mb-12">Projects</p>
                  <div class="gap-7 flex flex-col mb-6 ">
                    <p class="text-4xl font">{{projectsList[0].projectName}}</p>
                    <ProjectInfo :icon="AddressIcon" icon-name="Address" :value="project.address"/>
                    <ProjectInfo :icon="HomeIcon" icon-name="Apartments for sale" :value="project.apartmentsForSale+' apartments left'"/>
                    <ProjectInfo :icon="StatusIcon" icon-name="Status" :value="project.status"/>
                  </div>
                  <button class="bg-[#F0EEEC] flex items-center gap-3 px-6 py-3 rounded-2xl mb-7 ">More About Project <right-arrow/></button>
                  <div class="flex gap-7 relative">
                    <p class="text-xl">Scroll to view other projects</p>

                  </div>
                </div>

                <img class="w-2/4" alt="" :src="project.image">
              </div>
            </div>
          </SplideSlide>
        </SplideTrack>

        <div class="splide__arrows absolute">
          <button class="splide__arrow splide__arrow--next"></button>
        </div>


      </div>


    </Splide>
  </section>
</template>


<style>
.splide__arrow--prev{
  display: none;
}
</style>
