<script setup>
import FloorPlan from "@/components/Floor/FloorPlan.vue";
import ContactRightArrowIcon from "@/assets/icons/Contact/ContactRightArrowIcon.vue";
import MainLayout from "@/layouts/mainLayout.vue";

</script>
<template>
  <mainLayout>
    <div
        class="flex w-fit space-x-14 mx-4 sm:max-2xl:mx-10 2xl:mx-auto mt-7 sm:max-2xl:mt-28 2xl:mt-48 mb-40 sm:max-2xl:mb-52 2xl:mb-60">
      <div class="space-y-6">
        <h1 class="text-3xl lg:text-4xl font-medium leading-normal">
          6th floor
        </h1>
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
        <a href="#"
           class="w-full bg-[#F0EEEC] flex items-center justify-center text-black px-6 py-3 rounded-2xl gap-x-1.5 font-medium">
          All Apartments
          <contact-right-arrow-icon stroke="black"/>
        </a>
      </div>
      <FloorPlan/>
    </div>
    </mainLayout>
</template>
