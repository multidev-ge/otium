<script setup>
import FloorPlan from "@/components/Floor/FloorPlan.vue"
import MainLayout from "@/layouts/mainLayout.vue"
import FloorDetails from "@/components/Floor/FloorDetails.vue"
</script>
<template>
  <main-layout>
    <!-- Floor Page -->
    <div
        class="container flex max-xl:flex-col-reverse xl:gap-x-14 max-xl:gap-y-7 max-md:px-4 md:mx-auto mt-1 sm:max-2xl:mt-20 2xl:mt-40 mb-40 sm:max-2xl:mb-52 2xl:mb-60">
      <floor-details/>

      <floor-plan/>
    </div>
  </main-layout>
</template>
