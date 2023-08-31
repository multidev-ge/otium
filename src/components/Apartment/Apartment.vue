<script setup>
import Details from "@/components/Apartment/Details.vue"
import Plan from "@/components/Apartment/Plan.vue"
import RoomSelect from "@/components/Apartment/RoomSelect.vue"
import useApartment from "@/composables/apartment/useApartment"
import {ref} from "vue"

const currentRoom = ref(3)
const rooms = useApartment()
</script>

<template>
  <div class="flex max-xl:flex-col relative">
    <h1 class="absolute xl:-top-6 text-3.5xl xl:text-4.5xl font-medium whitespace-nowrap" v-text="'Apartment name'"/>
    <Details class="max-xl:order-2"/>
    <Plan :currentRoom="currentRoom" :rooms="rooms" class="xl:ml-1 xl:mr-8 max-xl:order-1 max-xl:mt-14 max-xl:mb-7"/>
    <RoomSelect @changeRoom="(room) => currentRoom = room" :currentRoom="currentRoom" :rooms="rooms"
                class="max-xl:order-3 max-xl:mt-20"/>
  </div>
</template>