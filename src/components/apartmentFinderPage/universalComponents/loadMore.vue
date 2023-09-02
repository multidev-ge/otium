

<template>
  <div class="flex justify-between md:flex-row  flex-col items-center md:gap-0 gap-6 mt-12">
    <p class="text-[#00000066] text-lg">You have seen <span class="text-black">13</span> apartments out of <span class="text-black">426</span></p>
    <button class="bg-black md:w-auto w-full items-center justify-center gap-2 flex text-white px-12 py-2 rounded-2xl">Explore More <span><arrow-for-projects-splide class="w-5 h rotate-0 md:rotate-90"/></span></button>
  </div>
</template>

<script setup>
import ArrowForProjectsSplide from "@/assets/icons/Projects/arrowForProjectsSplide.vue";
</script>