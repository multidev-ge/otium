<template>
  <swiper :navigation="true" :modules="modules" :slidesPerView="4" :slidesPerGroup="4" class="mySwiper h-[440px]">
    <!-- Slide 1 with the image from BrandStoryPhotos -->
    <swiper-slide v-if="BrandStory && BrandStory.length > 0">
        <div class="">
          <img :src="BrandStory[0].BrandStoryPhotos.img1" alt="Image 1">
          <h2 class="pt-2 font-medium	text-2xl	">{{BrandStory[0].BrandStoryName.name}}</h2>
          <p class="pt-2 text-xl	font-medium text-[#00000099]">{{BrandStory[0].BrandStoryName.position1}}</p>
        </div>
      </swiper-slide>
      <swiper-slide v-if="BrandStory && BrandStory.length > 0">
        <div class="">
          <img :src="BrandStory[0].BrandStoryPhotos.img2" alt="Image 1">
          <h2 class="pt-2 font-medium	text-2xl	">{{BrandStory[0].BrandStoryName.name}}</h2>
          <p class="pt-2 text-xl	font-medium text-[#00000099]">{{BrandStory[0].BrandStoryName.position1}}</p>
        </div>
      </swiper-slide>
      <swiper-slide v-if="BrandStory && BrandStory.length > 0">
        <div class="">
          <img :src="BrandStory[0].BrandStoryPhotos.img3" alt="Image 1">
          <h2 class="pt-2 font-medium	text-2xl	">{{BrandStory[0].BrandStoryName.name}}</h2>
          <p class="pt-2 text-xl	font-medium text-[#00000099]">{{BrandStory[0].BrandStoryName.position2}}</p>
        </div>
      </swiper-slide>
      <swiper-slide v-if="BrandStory && BrandStory.length > 0">
        <div class="">
          <img :src="BrandStory[0].BrandStoryPhotos.img4" alt="Image 1">
          <h2 class="pt-2 font-medium	text-2xl	">{{BrandStory[0].BrandStoryName.name}}</h2>
          <p class="pt-2 text-xl	font-medium text-[#00000099]">{{BrandStory[0].BrandStoryName.position2}}</p>
        </div>
      </swiper-slide>
      

    <!-- Additional slides for other cards -->
    <swiper-slide v-for="(item, index) in 1" :key="index">
      <div class="swiper-card">
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { ref } from "vue";
import useOtiumBrandStory from "@/composables/useOtiumBrandStory";
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/navigation';

  import '../../assets/main.css';

  // import required modules
  import { Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const { BrandStory } = useOtiumBrandStory();
      return {
        BrandStory,
        modules: [Navigation],
      };
    },
  };
</script>
