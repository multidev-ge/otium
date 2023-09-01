<script setup>
import ContactRightArrowIcon from "@/assets/icons/Contact/ContactRightArrowIcon.vue"
</script>

<template>
  <!-- Floor Details -->
  <div class="flex flex-col justify-between">
    <h1 class="text-3xl lg:text-4.5xl font-medium leading-normal max-xl:hidden">
      6th floor
    </h1>

    <div class="grid max-xl:grid-cols-2 gap-y-6">
      <div>
        <span v-text="'Apartments'" class="font-medium opacity-40"/>
        <p class="font-medium">4<span class="opacity-40"> / 12</span></p>
      </div>

      <div>
        <span v-text="'Prices'" class="text-base lg:text-lg font-medium lg:leading-8 opacity-60"/>
        <p v-text="'$30,000 - $60,000'" class="font-medium"/>
      </div>

      <div>
        <span v-text="'Sizes m2'" class="font-medium opacity-40"/>
        <p v-text="'64.0 - 110.0'" class="font-medium"/>
      </div>

      <div>
        <span v-text="'Rooms'" class="font-medium opacity-40"/>
        <p v-text="'2 - 6'" class="font-medium"/>
      </div>
    </div>
    <a href="#"
       class="max-lg:mt-12 lg:max-xl:mt-6 xl:mt-3 w-full md:w-fit bg-[#F0EEEC] flex items-center justify-center text-black px-6 py-3 rounded-2xl gap-x-1.5 font-medium whitespace-nowrap">
      All Apartments
      <contact-right-arrow-icon stroke="black"/>
    </a>
  </div>
</template>