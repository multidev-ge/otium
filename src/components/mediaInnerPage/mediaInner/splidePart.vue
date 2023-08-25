<script setup>
import '@splidejs/vue-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import SplideArrow from "@/assets/icons/mediaInnerPage/splideArrow.vue";
import mediaInner from "@/composables/mediaInner";
const {currentPageInfo} = mediaInner()
const mainOptions = {
  type: 'slide',
  perPage: 1,
  pagination: true,
  focus: 'center',
  gap: '1rem',
  arrows: true,
  rewind: true,
  autoplay:true,

};
</script>
<template>
  <section class="">
    <Splide class="w-full" :options="mainOptions" :has-track="false" aria-label="My Favorite Images">
          <SplideTrack>
            <SplideSlide v-for="img in currentPageInfo.images">
              <img class="rounded-lg" :src="img" alt="">
            </SplideSlide>
          </SplideTrack>
          <div class="splide__arrows">
            <div class="flex">
              <div class="splide__arrows">
                <button class="splide__arrow splide__arrow--prev "><splide-arrow color="white"/></button>
                <button class="splide__arrow splide__arrow--next "><splide-arrow color="white"/></button>
              </div>
            </div>
          </div>
    </Splide>
  </section>
</template>

