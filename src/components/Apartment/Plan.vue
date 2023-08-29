<script setup>
import Room from "@/components/Apartment/Room.vue"

defineProps({
  currentRoom: {type: Number, required: true},
  rooms: {type: Object, required: true}
})
</script>

<template>
  <!-- Apartment Plan -->
  <div class="relative">
    <img class="h-full w-full" src="../../assets/images/apartment/plan.png" alt="apartment plan">
    <Room v-for="(room, index) in rooms" :room="room" :key="index"
          :display="currentRoom === index + 1 ? 'block' : undefined"/>
  </div>
</template>