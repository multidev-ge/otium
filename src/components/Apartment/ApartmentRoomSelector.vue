<script>
import { defineEmits } from 'vue';
import useApartments from '../../composables/useApartments';
// import apartmentPlan from "@/assets/images/apartment/plan.png"
import KitchenLivingRoom from "@/assets/icons/Apartment/ApartmentKitchenIcon.vue"
import Hall from "@/assets/icons/Apartment/ApartmentHallIcon.vue"
import Bedroom from "@/assets/icons/Apartment/ApartmentBedroomIcon.vue"
import Terrace from "@/assets/icons/Apartment/ApartmentTerraceIcon.vue"
import Wc from "@/assets/icons/Apartment/ApartmentWCIcon.vue"
import Closet from "@/assets/icons/Apartment/ApartmentClosetIcon.vue"
// import KitchenLivingRoom
// import WC
// import Bedroom
// import Terrace
// defineProps({
//   currentRoom: {type: Number, required: true},
//   rooms: {type: Object, required: true}
// })

export default {
  components: {
    KitchenLivingRoom,
    Hall,
    Bedroom,
    Terrace,
    Wc,
    Closet,
  },
  setup() {
    const { flat } = useApartments()
    const emit = defineEmits(['changeRoom'])
    return {
      flat,
      emit
    }
  }
}

</script>

<template>
  <!-- Apartment Room Selector -->
  <div class="xl:flex xl:flex-col xl:justify-between xl:py-12 max-xl:grid max-xl:grid-cols-2 max-xl:gap-y-5">
    <div v-if="flat?.current?.area_details" @click="emit('changeRoom', index + 1)"
      v-for="({ area, type }, index) in flat?.current?.area_details" :key="index"
      class="cursor-pointer flex flex-col gap-y-1.5">
      <div class="flex gap-x-1.5">
        <component :is="type" :fill="currentRoom === index + 1 ? '#7B9F89' : undefined"
          :opacity="currentRoom === index + 1 ? '0.8' : undefined" />
        <span v-text="type" class="whitespace-nowrap font-medium leading-6 opacity-40"
          :class="{ 'text-[#7B9F89] opacity-80': currentRoom === index + 1 }" />
      </div>

      <p class="text-xl font-medium leading-8" :class="{ 'text-[#7B9F89]': currentRoom === index + 1 }" v-text="area" />
    </div>
  </div>
</template>