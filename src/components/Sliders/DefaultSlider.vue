<script setup>
import { Splide, SplideTrack, SplideSlide } from '@splidejs/vue-splide'
import ArrowForProjectsSplide from "@/assets/icons/Projects/arrowForProjectsSplide.vue";
import '@splidejs/vue-splide/css';
const images = [
    { src: "https://picsum.photos/200/300", alt: "1" },
    { src: "https://picsum.photos/200/300", alt: "2" },
    { src: "https://picsum.photos/200/300", alt: "2" },
    { src: "https://picsum.photos/200/300", alt: "2" },
    { src: "https://picsum.photos/200/300", alt: "2" },
]
defineProps()
const options = {
    type: 'slide',
    perPage: 1,
    pagination: false,
    focus: 'center',
    gap: '1rem',
    arrows: true,
    rewind: true,
}
</script>
<template>
    <Splide :options="options" aria-label="Main Gallery" :has-track="false">
        <SplideTrack class="rounded-xl">
            <SplideSlide v-for="image in images" class="">
                <img :src="image?.src" :alt="image?.alt">
            </SplideSlide>
        </SplideTrack>
        <div class="splide__arrows">
            <div class="flex flex-row justify-between items-center">
                <button v-for="arrow in ['prev', 'next']" class="splide__arrow !bg-black !w-12 !h-12 text-xl"
                    :class="`splide__arrow--${arrow}`">
                    <ArrowForProjectsSplide />
                </button>
            </div>
        </div>
    </Splide>
</template>
<style scopped>
.splide__slide img {
    width: 100%;
    max-height: 100svh;
}
</style>