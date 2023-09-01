<script setup>
import ExpandMoreIcon from "@/assets/icons/Apartment/ExpandMoreIcon.vue"
import {ref} from "vue";

defineProps({
  options: {
    type: Array,
    required: true
  },
  selected: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['changeFloor'])

const showDropDown = ref(false)
</script>

<template>
  <div
      @click="showDropDown = !showDropDown"
      class="flex justify-between items-center w-full font-medium leading-6 py-3 pl-4 pr-3 focus:outline-0 rounded-md border border-black border-opacity-40 cursor-pointer">
    <p v-text="selected"/>
    <expand-more-icon/>
  </div>
  <div :class="showDropDown ? 'visible' : 'invisible'"
       class="scroll-container flex flex-col gap-y-4 h-60 overflow-y-scroll w-full py-3 pl-4 pr-3 rounded-md border border-black border-opacity-40">
    <p class="cursor-pointer font-medium leading-6" v-for="floor in options.length" :key="options.length - floor + 1"
       v-text="options[options.length - floor]" @changeFloor="emit('changeFloor', floor)"/>
  </div>
</template>

<style scoped>
.scroll-container::-webkit-scrollbar {
  width: 5px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: #D9D9D9;
  border-radius: 12px;
}
</style>