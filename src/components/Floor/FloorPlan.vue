<script setup>
import useFloor from "@/composables/floor/useFloor";
import FloorApartment from "@/components/Floor/FloorApartment.vue";
import FloorCaretUpIcon from "@/assets/icons/Floor/FloorCaretUpIcon.vue";
import {ref} from "vue";


const block = useFloor()
const floorNumber = ref(Math.round(block.length / 2));
</script>

<template>
  <div class="flex gap-x-10">
    <div class="relative w-[65vw] h-[28.75vw]">
      <img class="absolute w-full h-full" loading="lazy" src="../../assets/images/floor/plan.png" alt="floor plan">
      <FloorApartment v-for="(apartment, index) in block[floorNumber - 1]" :apartment="apartment" :key="index"/>
    </div>
    <div class="flex flex-col justify-between items-center">
      <template v-for="i in 5" :key="i">
        <floor-caret-up-icon v-if="floorNumber === floorNumber + 3 - i" @click="floorNumber++" class="cursor-pointer"
                             :style="{
          pointerEvents: floorNumber === block.length - 2 ? 'none' : 'auto'
        }"/>
        <span v-text="floorNumber + 3 - i" class="cursor-pointer font-medium text-5xl"
              :class="floorNumber === floorNumber + 3 - i ? 'text-6xl text-[#88407C] px-6 py-2 rounded-3xl border-2 border-[#88407C]' : ''"/>
        <floor-caret-up-icon class="rotate-180 cursor-pointer" v-if="floorNumber === floorNumber + 3 - i"
                             @click="floorNumber--" :style="{
          pointerEvents: floorNumber === 3 ? 'none' : 'auto'
        }"/>
      </template>
    </div>
  </div>
</template>