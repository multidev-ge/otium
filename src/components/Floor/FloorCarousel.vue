<script setup>
import FloorCaretUpIcon from "@/assets/icons/Floor/FloorCaretUpIcon.vue"
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from "vue-i18n";
const {t} = useI18n({useScope:'global'})
const emit = defineEmits(['previousFloor', 'nextFloor', 'changeFloor'])
const { floorNumber, blockLength } = defineProps({
  floorNumber: { type: Number, required: true },
  blockLength: { type: Number, required: true }
})
const isFeatured = (floor) => floorNumber === floorNumber + 3 - floor
const isValid = (floor) => floor >= 2 && floor <= blockLength + 1
const screenWidth = ref(window.innerWidth)
const updateScreenWidth = () => screenWidth.value = window.innerWidth
onMounted(() => window.addEventListener('resize', updateScreenWidth))
onBeforeUnmount(() => window.removeEventListener('resize', updateScreenWidth))
</script>
<template>
  <!-- Floor Carousel -->
  <div class="flex items-center justify-end max-xl:flex-row-reverse max-xl:gap-x-6">
    <div class="xl:w-24 flex xl:flex-col xl:h-full xl:justify-between xl:items-center">

      <div v-for="floor in 5" :key="floor" class="hover:text-[#7b9f89] transition duration-100 ease-in-out" :class="[
        isFeatured(floor) ? 'flex flex-row-reverse xl:flex-col items-center' : 'max-xl:invisible',
        { 'invisible': !isValid(floorNumber + 3 - floor) }
      ]">

        <floor-caret-up-icon v-if="isFeatured(floor)" @click="emit('nextFloor')"
          :fill="screenWidth < 1280 ? 'black' : undefined" class="cursor-pointer"
          :disabled="floorNumber === blockLength + 1" />

        <span v-text="floorNumber + 3 - floor" @click="emit('changeFloor', floorNumber + 3 - floor)"
          class="cursor-pointer font-medium lg:max-xl:text-xl xl:max-3xl:text-[42px] xl:max-3xl:leading-[50.4px] 3xl:text-5xl"
          :class="{
            'text-3xl lg:max-xl:text-2xl xl:max-3xl:text-[64px] xl:max-3xl:leading-[76.8px] 3xl:text-6xl text-[#88407C] px-6 xl:py-2 xl:rounded-3xl xl:border-2 xl:border-[#88407C]': isFeatured(floor)
          }" />

        <floor-caret-up-icon v-if="isFeatured(floor)" @click="emit('previousFloor')"
          :fill="screenWidth < 1280 ? 'black' : undefined" class="rotate-180 cursor-pointer"
          :disabled="floorNumber === 2" />
      </div>

    </div>
    <span class="xl:-rotate-90 xl:-translate-x-1/4 font-medium max-xl:opacity-40 xl:text-xs whitespace-nowrap">
      {{ t("floors.floorNumber") }}</span>
  </div>
</template>