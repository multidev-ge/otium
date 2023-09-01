<script setup>
defineProps({
  currentRoom: {type: Number, required: true},
  rooms: {type: Object, required: true}
})

const emit = defineEmits(['changeRoom'])
</script>

<template>
  <!-- Apartment Room Selector -->
  <div class="xl:flex xl:flex-col xl:justify-between xl:py-12 max-xl:grid max-xl:grid-cols-2 max-xl:gap-y-5">
    <div @click="emit('changeRoom', index + 1)" v-for="(room, index) in rooms" :key="index"
         class="cursor-pointer flex flex-col gap-y-1.5">
      <div class="flex gap-x-1.5" :class="{'text-[#7B9F89] opacity-80': currentRoom === index + 1}">
        <component :is="room.icon"/>
        <span v-text="room.title" class="whitespace-nowrap font-medium leading-6 opacity-40"/>
      </div>

      <p class="text-xl font-medium leading-8" :class="{'text-[#7B9F89]': currentRoom === index + 1}"
         v-text="room.area + ' m2'"/>
    </div>
  </div>
</template>