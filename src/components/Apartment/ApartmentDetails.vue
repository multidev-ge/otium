<script setup>
import ApartmentDownloadIcon from "@/assets/icons/Apartment/ApartmentDownloadIcon.vue"
import ContactRightArrowIcon from "@/assets/icons/Contact/ContactRightArrowIcon.vue"
import floorOrder from "@/helpers/floorOrder"
</script>

<template>
  <!-- Apartment Details -->
  <div class="flex sm:max-xl:w-3/5 flex-col justify-between xl:py-14">
    <div class="flex flex-col gap-y-1.5">
      <h3 class="text-xl xl:text-xl font-medium leading-8" v-text="'Floor'"/>

      <select
          class="w-full font-medium leading-6 py-3 px-4 focus:outline-0 rounded-md border border-black border-opacity-40">
        <option v-for="i in 9" :selected="10 - i === 6" v-text="floorOrder(10 - i)"/>
      </select>
    </div>

    <div class="flex xl:flex-col max-xl:mt-10 sm:max-xl:justify-between max-xl:gap-x-10 xl:gap-y-7">
      <div class="flex flex-col xl:gap-y-1.5 max-xl:justify-between">
        <span class="font-medium leading-6 opacity-40" v-text="'Area, m2'"/>
        <p class="text-xl font-medium leading-8" v-text="'120 m2'"/>
      </div>

      <div class="flex flex-col xl:gap-y-1.5 max-xl:justify-between">
        <span class="font-medium leading-6 opacity-40" v-text="'Price'"/>
        <p class="text-4.5xl font-bold text-[#7B9F89]" v-text="'$ 80 000'"/>
      </div>
    </div>

    <div class="flex flex-col gap-y-5 mt-28">
      <router-link :to="{name: 'Contact'}"
                   class="lg:w-fit whitespace-nowrap bg-[#883F7C] flex items-center gap-x-1.5 px-7 py-3 rounded-2xl text-[#FFFAFA] font-medium leading-6">
        Request a Call
        <contact-right-arrow-icon/>
      </router-link>

      <a href="#"
         class="lg:w-fit whitespace-nowrap bg-[#F0EEEC] flex items-center gap-x-1.5 px-6 py-3 rounded-2xl font-medium leading-6">
        Download PDF
        <apartment-download-icon/>
      </a>
    </div>

  </div>
</template>