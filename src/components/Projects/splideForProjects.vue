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
import { ref, onMounted } from "vue";
import { useI18n } from 'vue-i18n'
import { useTitle } from '@vueuse/core';
defineProps(['content'])
const projectsInfo = Projects
const { projectsList } = projectsInfo()
const mainOptions = {
  type: 'slide',
  perPage: 1,
  pagination: false,
  focus: 'center',
  gap: '1rem',
  arrows: true,
  rewind: true,
  // breakpoints: {
    // 768: {
      // heightRatio: 2.1,
      // direction: 'ttb',
    // }
  // },
  // dragMinThreshold: {
    // mouse: 0,
    // touch: 10,
  // },
};
const currentValue = ref(1)
const changeValue = (value) => {
  currentValue.value = value
}
const { t } = useI18n({ useScope: "global" })
onMounted(() => useTitle(`${t("projects.title")} - ${t('main.brand')}`))
</script>
<template>
  <section class="">
    <Splide :options="mainOptions" :has-track="false" @splide:moved="function (newIndex, prevIndex, destIndex) {
      changeValue(newIndex.index + 1)
    }">
      <div class="custom-wrapper flex flex-col">
        <div>
          <SplideTrack>
            <SplideSlide v-for="(project) in content">
                <div class="flex 2xl:flex-row flex-col 2xl:w-full justify-between">
                  <div class="2xl:w-2/6 flex flex-col 2xl:items-start">
                    <p class="font-medium text-5xl 2xl:text-8xl 2xl:mb-12 mb-7">{{ t("projects.title") }}</p>
                    <div class="gap-7 flex flex-col mb-6 ">
                      <p class="text-4xl font">{{ project?.title }}</p>
                      <img class="2xl:hidden" alt="" :src="project?.image_url">
                      <ProjectInfo :icon="AddressIcon" :icon-name="t('projects.address')" :value="project?.address" />
                      <div class="flex 2xl:flex-col justify-between gap-7">
                        <ProjectInfo :icon="HomeIcon" :icon-name="t('projects.sale')"
                          :value="`${project?.apartments_left} ${t('projects.left')}`" />
                        <ProjectInfo :icon="StatusIcon" :icon-name="t('projects.status')" :value="project?.status" />
                      </div>
                    </div>
                    <router-link :to="{ name: 'Project', params: { id: project?.id } }"
                      class="bg-[#F0EEEC] flex items-center gap-3 px-6 py-3 justify-center  rounded-2xl mb-7 ">{{ t("projects.more") }}<right-arrow /></router-link>
                  </div>
                  <div class="2xl:w-7/12 2xl:flex hidden">
                    <img class="object-contain aspect-auto object-top" alt="" :src="project?.image_url">
                  </div>
                </div>
            </SplideSlide>
          </SplideTrack>
        </div>
        <div class=" flex  max-w-md relative items-center  justify-between">
          <p class="text-xl mr-4 2xl:w-auto w-1/2">{{ t("projects.next") }}</p>
          <div class="splide__arrows !flex relative pt-24">
            <button class="splide__arrow splide__arrow--prev !hidden">{{ t("projects.prev") }}</button>
            <button class="splide__arrow !bg-black !w-12 !h-12 text-xl splide__arrow--next">
              <ArrowForProjectsSplide />
            </button>
          </div>
          <p class="2xl:-ml-16 2xl:pl-0 pl-8 text-2xl"><span>{{ currentValue }}</span> / <span class="opacity-30">{{
            content.length }}</span></p>
        </div>
      </div>
    </Splide>
  </section>
</template>
