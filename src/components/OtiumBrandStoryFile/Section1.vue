<script setup>
import useOtiumBrandStory from "@/composables/useOtiumBrandStory";

const { BrandStory } = useOtiumBrandStory();
</script>
<template>
  <div class="xl:flex  xl:gap-8 pb-14  ">
    <div class=" w-[340px] pb-6 xl:pt-0 xl:w-[63%]">
      <h2 class="xl:text-8xl  text-5xl xl:gap-8 	 text-[#000000] font-ppNeueMontrealMedium">{{ BrandStory[0].BrandStoryName.title }} <img class="xl:mt-16 inline " src="../../assets/icons/forward.svg" alt="" /></h2>

    </div>
    <div class="w-[415px]">
      <h3 class=" text-2xl pr-20 font-ppNeueMontrealMedium">
        {{ BrandStory[0].BrandStoryDescription.description5 }}
      </h3>
    </div>
  </div>
  <div class="mydiv xl:flex  xl:gap-8 pb-12 " >
    <img class="photo  pb-7 xl:pb-0" src="../../assets/images/Rectangle940.png"  alt="" />
    <img src="../../assets/images/Rectangle941.png" alt="" />
  </div>
  <div class="xl:flex xl:gap-8">
    <p class="xl:w-[640px] pb-8 xl:pb-0 text-xl font-ppNeueMontrealMedium leading-8 pr-10 text-[#00000099]">
      {{ BrandStory[0].BrandStoryDescription.description }}
    </p>
    <p class="xl:w-[640px] text-xl font-ppNeueMontrealMedium leading-8 text-[#00000099]">
      {{ BrandStory[0].BrandStoryDescription.description1 }}
    </p>
  </div>
  <div class=" flex">
    <div class="pt-24 flex gap-8 pb-20 w-[700px]">
      <h2 class="text-8xl font-ppNeueMontrealMedium">{{ BrandStory[0].BrandStoryName.title1 }}</h2>
      <img class="pt-10" src="../../assets//icons/forward.svg" alt="" />
    </div>
    <div class="w-[640px]"></div>
  </div>
</template>
<style scoped>
@media (max-width: 1399px) {
    .mydiv {
      justify-content: center ;
    }
    .photo {
      width: 63%;
    }
  }
  @media (max-width: 1279px) {
    .photo {
      width: auto;
    }
  }
 
</style>