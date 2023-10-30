<script setup>
import useFloor from "@/composables/floor/useFloor"
import FloorApartment from "@/components/Floor/FloorApartment.vue"
import FloorCarousel from "@/components/Floor/FloorCarousel.vue"
import {ref, watch} from "vue"

const block = useFloor()
const blockLength = block.value.length
const floorNumber = ref(Math.round(blockLength / 2))
const currentFloor = ref(block.value[floorNumber.value - 1])

watch(floorNumber, (newFloor) => currentFloor.value = block.value[newFloor - 1])
</script>

<template>
  <!-- Floor Plan -->
  <div class="flex flex-1 items-stretch xl:gap-x-10 max-xl:gap-y-7 max-xl:flex-col justify-center">
    <h1 class="text-[32px] xl:text-4xl font-medium leading-normal xl:hidden">
      6th floor
    </h1>

    <!-- Floor Apartments -->
    <div class="relative flex-1">
      <img class="w-full h-full" src="../../assets/images/floor/plan.png" alt="floor plan">
      <floor-apartment v-for="(apartment, index) in currentFloor" :apartment="apartment" :key="index"/>
    </div>

    <floor-carousel
        :floorNumber="floorNumber"
        :blockLength="blockLength"
        @previousFloor="floorNumber--"
        @nextFloor="floorNumber++"
        @changeFloor="(floor) => floorNumber = floor"/>
  </div>
</template>