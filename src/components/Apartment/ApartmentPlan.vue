<script setup>
import ApartmentRoom from "@/components/Apartment/ApartmentRoom.vue";
import useApartment from "@/composables/apartment/useApartment";
import {ref} from "vue";

const currentRoom = ref(3);
const rooms = useApartment();
</script>

<template>
  <div class="flex gap-x-1" v-if="rooms">
    <div class="relative">
      <img class="h-full w-full" src="../../assets/images/apartment/apartment.png" alt="apartment image">
      <ApartmentRoom v-for="(room, index) in rooms" :room="room" :key="index"
                     :display="currentRoom === index + 1 ? 'block' : undefined"/>
    </div>
    <!--    <div class="flex flex-col justify-between py-5">-->
    <!--      <div @click="currentRoom = index + 1" v-for="(room, index) in rooms" :key="index"-->
    <!--           class="cursor-pointer flex flex-col gap-y-1.5">-->
    <!--        <div class="flex gap-x-1.5" :class="{'text-[#7B9F89] opacity-80': currentRoom === index + 1}">-->
    <!--          <component :is="room.icon"/>-->
    <!--          <span v-text="room.title" class="whitespace-nowrap font-medium leading-6 opacity-40"/>-->
    <!--        </div>-->
    <!--        <p class="text-xl font-medium leading-8" :class="{'text-[#7B9F89]': currentRoom === index + 1}"-->
    <!--           v-text="room.area + ' m2'"/>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>