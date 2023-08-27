<script setup>
import FloorCaretUpIcon from "@/assets/icons/Floor/FloorCaretUpIcon.vue";

const emit = defineEmits(['previousFloor', 'nextFloor', 'changeFloor']);

const {floorNumber, blockLength} = defineProps({
  floorNumber: {type: Number, required: true},
  blockLength: {type: Number, required: true}
});

const isFeatured = (floor) => floorNumber === floorNumber + 3 - floor;
const isValid = (floor) => floor >= 1 && floor <= blockLength;
</script>

<template>
  <div class="flex items-center max-lg:flex-row-reverse max-lg:gap-x-6">
    <div class="flex lg:flex-col h-full lg:justify-between lg:items-center">
      <div v-for="floor in 5"
           :key="floor"
           :class="[
            isFeatured(floor) ? 'flex flex-row-reverse lg:flex-col items-center': 'max-lg:invisible',
            {'invisible': !isValid(floor)}
          ]">
        <floor-caret-up-icon v-if="isFeatured(floor)"
                             @click="emit('nextFloor')"
                             class="cursor-pointer"
                             :disabled="floorNumber === blockLength"/>
        <span v-text="floorNumber + 3 - floor"
              @click="emit('changeFloor', floorNumber + 3 - floor)"
              class="cursor-pointer font-medium lg:max-xl:text-xl xl:max-2xl:text-3xl 2xl:text-5xl"
              :class="{
              'text-3xl lg:max-xl:text-2xl xl:max-2xl:text-4xl 2xl:text-6xl text-[#88407C] px-6 lg:py-2 lg:rounded-3xl lg:border-2 lg:border-[#88407C]': isFeatured(floor)}"/>
        <floor-caret-up-icon v-if="isFeatured(floor)"
                             @click="emit('previousFloor')"
                             class="rotate-180 cursor-pointer"
                             :disabled="floorNumber === 1"/>
      </div>
    </div>
    <span class="lg:-rotate-90 lg:-translate-x-1/4 font-medium max-lg:opacity-40 lg:text-xs whitespace-nowrap">Floor Number</span>
  </div>
</template>