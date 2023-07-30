<script setup>
import useOtiumBrandStory from "@/composables/useOtiumBrandStory";

const { BrandStory } = useOtiumBrandStory();
</script>
<template>
  <div class="flex justify-center gap-8 pb-14">
    <div class="flex gap-8">
      <h2 class="text-8xl font-medium text-[#000000]">Otium brand story</h2>
      <img class="mt-16" src="../../assets/icons/forward.svg" alt="" />
    </div>
    <div class="w-[415px]">
      <h3 class="font-medium text-2xl pr-20">
        Our Journey to Simplify Construction: Crafting Timeless Spaces
      </h3>
    </div>
  </div>
  <div class="flex justify-center gap-8 pb-12">
    <img src="../../assets/images/Rectangle940.png" alt="" />
    <img src="../../assets/images/Rectangle941.png" alt="" />
  </div>
  <div class="flex gap-8 justify-center">
    <p class="w-[640px] text-xl font-medium leading-8 pr-10 text-[#00000099]">
      {{ BrandStory[0].BrandStoryDescription.description }}
    </p>
    <p class="w-[640px] text-xl font-medium leading-8 text-[#00000099]">
      {{ BrandStory[0].BrandStoryDescription.description1 }}
    </p>
  </div>
  <div class="justify-center flex">
    <div class="pt-24 flex gap-8 pb-20 w-[700px]">
      <h2 class="text-8xl font-medium">Team</h2>
      <img class="pt-10" src="../../assets//icons/forward.svg" alt="" />
    </div>
    <div class="w-[640px]"></div>
  </div>
</template>
