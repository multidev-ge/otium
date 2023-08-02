<template>
  <div class="mx-4 mb-28">
    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="(slide, index) in brandStoryData" :key="index">
        <div class="carousel__item">
          <img :src="slide.BrandStoryPhotos.img1" alt="Slide Image" />
          <div class="carousel__content">
            <h2 class="pt-2 font-medium text-2xl grid justify-start">
              {{ slide.BrandStoryName.name }}
            </h2>
            <p
              class="pt-2 text-xl font-medium text-[#00000099] grid justify-start"
            >
              {{ slide.BrandStoryName.position1 }}
            </p>
          </div>
        </div>
      </Slide>

      <Slide v-for="(slide, index) in brandStoryData" :key="index">
        <div class="carousel__item">
          <img :src="slide.BrandStoryPhotos.img2" alt="Slide Image" />
          <div class="carousel__content">
            <h2 class="pt-2 font-medium text-2xl grid justify-start">
              {{ slide.BrandStoryName.name }}
            </h2>
            <p
              class="pt-2 text-xl font-medium text-[#00000099] grid justify-start"
            >
              {{ slide.BrandStoryName.position1 }}
            </p>
          </div>
        </div>
      </Slide>

      <Slide v-for="(slide, index) in brandStoryData" :key="index">
        <div class="carousel__item">
          <img :src="slide.BrandStoryPhotos.img3" alt="Slide Image" />
          <div class="carousel__content">
            <h2 class="pt-2 font-medium text-2xl grid justify-start">
              {{ slide.BrandStoryName.name }}
            </h2>
            <p
              class="pt-2 text-xl font-medium text-[#00000099] grid justify-start"
            >
              {{ slide.BrandStoryName.position2 }}
            </p>
          </div>
        </div>
      </Slide>

      <Slide v-for="(slide, index) in brandStoryData" :key="index">
        <div class="carousel__item">
          <img :src="slide.BrandStoryPhotos.img4" alt="Slide Image" />
          <div class="carousel__content">
            <h2 class="pt-2 font-medium text-2xl grid justify-start">
              {{ slide.BrandStoryName.name }}
            </h2>
            <p
              class="pt-2 text-xl font-medium text-[#00000099] grid justify-start"
            >
              {{ slide.BrandStoryName.position2 }}
            </p>
          </div>
        </div>
      </Slide>

      <template #addons>
        <div class="w-full flex justify-center">
          <div class="w-[1200px]"></div>
          <div class="flex">
            <Navigation>
              <template #next>
                <img src="../../assets/icons//next.svg" />
              </template>
              <template #prev>
                <img src="../../assets/icons/prev.svg" />
              </template>
            </Navigation>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import useOtiumBrandStory from "@/composables/useOtiumBrandStory";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    const { BrandStory } = useOtiumBrandStory();

    const brandStoryData = BrandStory; // Moved brandStoryData here

    // carousel settings
    const settings = {
      itemsToShow: 1,
      snapAlign: "center",
    };

    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    const breakpoints = {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: "start",
      },
    };

    return {
      brandStoryData,
      settings,
      breakpoints,
    };
  },
});
</script>
