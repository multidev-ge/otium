<script setup>
import useFloor from "@/composables/floor/useFloor";
import FloorApartment from "@/components/Floor/FloorApartment.vue";
import FloorCarousel from "@/components/Floor/FloorCarousel.vue";
import {ref, watch} from "vue";

const block = useFloor();
const blockLength = block.value.length;
const floorNumber = ref(Math.round(blockLength / 2));
const currentFloor = ref(block.value[floorNumber.value - 1]);

watch(floorNumber, (newFloor) => currentFloor.value = block.value[newFloor - 1]);
</script>

<template>
  <div class="flex gap-x-10 gap-y-7 max-lg:flex-col justify-center">
    <h1 class="text-3xl lg:text-4xl font-medium leading-normal lg:hidden">
      6th floor
    </h1>
    <div class="relative w-[91vw] lg:w-[65vw] h-[40vw] lg:h-[29vw]">
      <img class="absolute w-full h-full" src="../../assets/images/floor/plan.png" alt="floor plan">
      <FloorApartment v-for="(apartment, index) in currentFloor" :apartment="apartment" :key="index"/>
    </div>
    <FloorCarousel
        :floorNumber="floorNumber"
        :blockLength="blockLength"
        @previousFloor="floorNumber--"
        @nextFloor="floorNumber++"
        @changeFloor="(floor) => floorNumber = floor"/>
  </div>
</template>