<script setup>
import ApartmentRoom from "@/components/Apartment/ApartmentRoom.vue"
import useApartments from "../../composables/useApartments"
// ../../assets/images/apartment/plan.png
const { flat } = useApartments()
defineProps({
  currentRoom: { type: Number, required: true },
  rooms: { type: Object, required: true }
})
</script>

<template>
  <!-- Apartment Plan -->
  <div class="relative w-full h-auto flex items-start justify-start">
    <img class="object-contain aspect-square" :src="flat?.current?.image_url" alt="apartment plan">
    <!-- <apartment-room v-for="(room, index) in rooms" :room="room" :key="index" -->
      <!-- :display="currentRoom === index + 1 ? 'block' : undefined" /> -->
  </div>
</template>