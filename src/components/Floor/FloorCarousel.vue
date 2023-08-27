<script setup>
import FloorCaretUpIcon from "@/assets/icons/Floor/FloorCaretUpIcon.vue";

const {floorNumber, blockLength} = defineProps({
  floorNumber: {
    type: Number,
    required: true
  },
  blockLength: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['previousFloor', 'nextFloor', 'changeFloor']);

const previous = () => {
  emit('previousFloor');
};

const next = () => {
  emit('nextFloor');
};

const change = (i) => {
  emit('changeFloor', i)
};

const isValid = (i) => {
  return i >= 1 && i <= blockLength
};
</script>

<template>
  <div class="flex lg:justify-between items-center max-lg:flex-row-reverse max-lg:gap-x-6">
    <div class=" flex lg:flex-col justify-between lg:space-y-8 items-center">
      <div v-for="i in 5" :key="i" :class="floorNumber === floorNumber + 3 - i ? 'flex flex-col items-center' : ''">
        <floor-caret-up-icon
            v-if="floorNumber === floorNumber + 3 - i"
            @click="next"
            class="max-lg:rotate-180 cursor-pointer"
            :disabled="floorNumber === blockLength"/>
        <span
            v-text="floorNumber + 3 - i"
            @click="change(floorNumber + 3 - i)"
            class="cursor-pointer font-medium lg:max-xl:text-xl xl:max-2xl:text-3xl 2xl:text-5xl"
            :class="
            floorNumber === floorNumber + 3 - i ?
            'text-3xl lg:max-xl:text-2xl xl:max-2xl:text-4xl 2xl:text-6xl text-[#88407C] px-6 lg:py-2 lg:rounded-3xl lg:border-2 lg:border-[#88407C] featured' :
            'not-featured'"
            :style="{ visibility: isValid(floorNumber + 3 - i) ? 'visible' : 'hidden' }"
        />
        <floor-caret-up-icon
            class="lg:rotate-180 cursor-pointer"
            v-if="floorNumber === floorNumber + 3 - i"
            @click="previous"
            :disabled="floorNumber === 1"/>
      </div>
    </div>
    <span class="lg:-rotate-90 font-medium max-lg:opacity-40 lg:text-xs whitespace-nowrap">Floor Number</span>
  </div>
</template>