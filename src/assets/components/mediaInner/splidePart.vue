<script setup>
import '@splidejs/vue-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import SplideArrow from "@/assets/components/Icons/splideArrow.vue";
import useNavigation from "@/composables/mediaInner";
const {currentPageInfo} = useNavigation()
const mainOptions = {
  type: 'slide',
  perPage: 1,
  pagination: false,
  focus: 'center',
  gap: '1rem',
  arrows: true,
  rewind: true
};
</script>
<template>
  <section>
    <Splide class="w-full" :options="mainOptions" :has-track="false" aria-label="My Favorite Images">
        <div class="custom-wrapper relative flex flex-col gap-5">
          <SplideTrack>
            <SplideSlide v-for="img in currentPageInfo.images">
              <img class="rounded-lg" :src="img" alt="">
            </SplideSlide>
          </SplideTrack>
          <div class="splide__arrows">
            <div class="flex gap-4 absolute right-0">
              <button class="splide__arrow--prev border  rounded-full p-1.5 border-black"><splide-arrow/></button>
              <button class="splide__arrow--next border rounded-full p-1.5 border-black"><splide-arrow/></button>
            </div>
          </div>
        </div>
    </Splide>
  </section>
</template>

