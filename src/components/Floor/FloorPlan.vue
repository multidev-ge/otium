<script setup>
import useFloor from "@/composables/floor/useFloor";
import FloorApartment from "@/components/Floor/FloorApartment.vue";
import FloorCaretUpIcon from "@/assets/icons/Floor/FloorCaretUpIcon.vue";
import {ref} from "vue";

const block = useFloor()
const floorNumber = ref(Math.round(block.value.length / 2));
</script>

<template>
  <div class="flex gap-x-10 gap-y-7 max-lg:flex-col justify-center">
    <h1 class="text-3xl lg:text-4xl font-medium leading-normal lg:hidden">
      6th floor
    </h1>
    <div class="relative w-[91vw] lg:w-[65vw] h-[40vw] lg:h-[29vw]">
      <img class="absolute w-full h-full" loading="lazy" src="../../assets/images/floor/plan.png" alt="floor plan">
      <FloorApartment v-for="(apartment, index) in block[floorNumber - 1]" :apartment="apartment" :key="index"/>
    </div>
    <div class="flex lg:justify-between items-center max-lg:flex-row-reverse max-lg:gap-x-6">
      <div class="flex lg:flex-col justify-between lg:space-y-8 items-center">
        <template v-for="i in 5" :key="i" class="flex max-lg:flex-col">
          <floor-caret-up-icon v-if="floorNumber === floorNumber + 3 - i" @click="floorNumber++"
                               class="max-lg:rotate-180 cursor-pointer"
                               :style="{
          pointerEvents: floorNumber === block.length - 2 ? 'none' : 'auto'
        }"/>
          <span v-text="floorNumber + 3 - i"
                class="pointer-events-none font-medium lg:max-xl:text-xl xl:max-2xl:text-3xl 2xl:text-5xl"
                :class="floorNumber === floorNumber + 3 - i ? 'text-3xl lg:max-xl:text-2xl xl:max-2xl:text-4xl 2xl:text-6xl text-[#88407C] px-6 lg:py-2 lg:rounded-3xl lg:border-2 lg:border-[#88407C] featured' : 'not-featured'"/>
          <floor-caret-up-icon class="lg:rotate-180 cursor-pointer" v-if="floorNumber === floorNumber + 3 - i"
                               @click="floorNumber--" :style="{
          pointerEvents: floorNumber === 3 ? 'none' : 'auto'
        }"/>
        </template>
      </div>
      <span class="lg:-rotate-90 font-medium max-lg:opacity-40 lg:text-xs">Floor Number</span>
    </div>
  </div>
</template>

<style scoped>
@media not all and (min-width: 1024px) {
  .featured {
    display: block; /* Show featured item */
  }

  .not-featured {
    display: none; /* Hide non-featured items */
  }
}
</style>