<script setup>
import useFloor from "@/composables/useFloor"
import FloorApartment from "@/components/Floor/FloorApartment.vue"

const {width, height, apartments} = useFloor()
</script>

<template>
  <!-- Floor Plan -->
  <div class="relative mx-auto mt-20" :style="{width, height}">
    <img class="absolute" loading="lazy" src="../../assets/images/floor/plan.png" alt="floor plan">
    <FloorApartment v-for="(apartment, index) in apartments" :apartment="apartment" :key="index"/>
  </div>
  <!-- Floor Plan -->
</template>