<script setup>
import useFloor from "@/composables/floor/useFloor"
import FloorApartment from "@/components/Floor/FloorApartment.vue";
// import FloorCaretUpIcon from "@/assets/icons/Floor/FloorCaretUpIcon.vue";
//
// const floorNumber = 6;
const {width, height, apartments} = useFloor()
</script>

<template>
  <div class="flex gap-x-10">
    <!-- Floor Plan -->
    <div class="relative" :style="{width, height}">
      <img class="absolute" loading="lazy" src="../../assets/images/floor/plan.png" alt="floor plan">
      <FloorApartment v-for="(apartment, index) in apartments" :apartment="apartment" :key="index"/>
    </div>
    <!--    &lt;!&ndash; Floor Plan &ndash;&gt;-->
    <!--    <div class="flex flex-col justify-between items-center">-->
    <!--      <template v-for="i in 5" :key="i">-->
    <!--        <floor-caret-up-icon v-if="floorNumber === floorNumber + 3 - i"/>-->
    <!--        <span v-text="floorNumber + 3 - i" class="cursor-pointer font-medium text-5xl"-->
    <!--              :class="floorNumber === floorNumber + 3 - i ? 'text-6xl text-[#88407C] px-6 py-2 rounded-3xl border-2 border-[#88407C]' : ''"/>-->
    <!--        <floor-caret-up-icon class="rotate-180" v-if="floorNumber === floorNumber + 3 - i"/>-->
    <!--      </template>-->
    <!--    </div>-->
  </div>
</template>