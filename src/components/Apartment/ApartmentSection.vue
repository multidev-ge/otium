<script setup>
import ApartmentDetails from "@/components/Apartment/ApartmentDetails.vue"
import ApartmentPlan from "@/components/Apartment/ApartmentPlan.vue"
import ApartmentRoomSelector from "@/components/Apartment/ApartmentRoomSelector.vue"
import useApartments from "../../composables/useApartments"
import { useI18n } from "vue-i18n"
const { currentRoom, rooms, flat } = useApartments()
const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <div class="flex flex-col xl:flex-row relative justify-between gap-10">
    <h1 v-if="flat" class="absolute xl:-top-6 text-3.5xl xl:text-4.5xl font-medium whitespace-nowrap"
      v-text="(flat?.current?.is_office) ? t('apartment.office', { number: flat?.current?.number }) : t('apartment.name', { number: flat?.current?.number })" />
    <ApartmentDetails class="max-xl:order-2 xl:w-1/6" />
    <ApartmentPlan :currentRoom="currentRoom" :rooms="rooms" class="flex xl:flex-1" />
    <ApartmentRoomSelector class="max-xl:order-3 max-xl:mt-20" :currentRoom="currentRoom" :rooms="rooms" />
  </div>
</template>

<!-- @changeRoom="(room) => currentRoom = room" :currentRoom="currentRoom" :rooms="rooms" -->