<script setup>
const {room} = defineProps({
  room: {type: Object, required: true},
  display: {type: String, default: 'none'}
})

const {width, height, points, top, left} = room
</script>

<template>
  <!-- Apartment Room -->
  <div class="absolute bg-[#7B9F89] bg-opacity-60 cursor-pointer"
       :style="{ display, width, height,  top, left, clipPath: `polygon(${points})` }"/>
</template>