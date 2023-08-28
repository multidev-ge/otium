<script setup>
const {room, display} = defineProps({
  room: {
    type: Object,
    required: true
  },
  display:{
    type: String,
    default: 'none'
  }
})
console.log(room)
</script>

<template>
  <div
      class="absolute flex justify-center items-center bg-[#7B9F89] bg-opacity-60 cursor-pointer"
      :style="{
                display: display,
                width: room.width,
                height: room.height,
                clipPath: `polygon(${room.points})`,
                top: room.top,
                left:room.left
  }"/>
</template>