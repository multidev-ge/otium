<script setup>
import useOtiumBrandStory from "@/composables/useOtiumBrandStory";

const { BrandStory } = useOtiumBrandStory();
</script>
<template>
  <div class="flex justify-center gap-20  pb-14">
    <div class="flex gap-8">
      <h2 class="text-8xl font-medium text-[#000000]">Otium brand story</h2>
      <img
        class="mt-16"
        src="../../assets/icons/forward_FILL0_wght400_GRAD0_opsz48 1.svg"
        alt=""
      />
    </div>
    <div class="w-[415px]">
      <h3 class="font-medium text-2xl pr-20">
        Our Journey to Simplify Construction: Crafting Timeless Spaces
      </h3>
    </div>
  </div>
  <div class="flex justify-center gap-20 pb-12 ">
    <img src="../../assets/images/Rectangle 940.png" alt="" />
    <img src="../../assets/images/Rectangle 941.png" alt="" />
  </div>
  <div class="flex gap-8 justify-center ">
    <p class="w-[640px] text-xl	font-medium	leading-8	">{{ BrandStory[0].BrandStoryDescription.description }}</p>
    <p class="w-[640px] text-xl	font-medium	leading-8	">{{ BrandStory[0].BrandStoryDescription.description1 }}</p>
  </div>
</template>
