<script setup>
import useFloor from "@/composables/useFloor";
import FloorCorridor from "@/components/Floor/FloorCorridor.vue";

const {_plan, flat} = useFloor();
</script>

<template>
  <div :class="`w-[${_plan.width}px] h-[${_plan.height}px]`" class="relative mx-auto mt-20">
    <FloorCorridor/>
    <img v-for="(_flat, index) in flat" :key="index" :src="_flat.imgPath" :alt="`floor flat${index}`" class="absolute"
         :class="_flat.tw">
  </div>
</template>