<script setup>
import '@splidejs/vue-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import SplideArrow from "@/assets/icons/mediaInnerPage/splideArrow.vue";
import mediaInner from "@/composables/forMediaInner/mediaInner";
defineProps(['content'])
const { currentPageInfo } = mediaInner()
const mainOptions = {
  type: 'slide',
  perPage: 1,
  pagination: true,
  focus: 'center',
  gap: '1rem',
  arrows: true,
  rewind: true,
  autoplay: true,

};
</script>
<template>
  <section class="">
    <Splide class="w-full" :options="mainOptions" :has-track="false" aria-label="My Favorite Images">
      <SplideTrack>
        <SplideSlide v-for="img in content.images">
          <img class="rounded-lg w-full" :src="`https://dashboard.otium.ge/uploads/${img}`" alt="">
        </SplideSlide>
      </SplideTrack>
      <div class="flex">
        <div class="splide__arrows">
          <button class="splide__arrow splide__arrow--prev"><splide-arrow /></button>
          <button class="splide__arrow splide__arrow--next"><splide-arrow /></button>
        </div>
      </div>
    </Splide>
  </section>
</template>

