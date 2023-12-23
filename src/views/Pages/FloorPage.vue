<script setup>
import { onMounted } from "vue"
import MainLayout from "@/layouts/mainLayout.vue"
import FloorPlan from "@/components/Floor/FloorPlan.vue"
import FloorDetails from "@/components/Floor/FloorDetails.vue"
import useProjects from "../../composables/useProjects"

const props = defineProps(['id'])

const { floor, getFloor } = useProjects()



onMounted(async () => floor.value ?? await getFloor(props?.id))
</script>
<template>
  <main-layout>
    <div
      class="flex max-xl:flex-col-reverse xl:gap-x-14 max-xl:gap-y-7 md:mx-auto mt-1 sm:max-2xl:mt-20 2xl:mt-40 mb-40 sm:max-2xl:mb-52 2xl:mb-60">
      <floor-details />
      <floor-plan v-if="floor" />
    </div>
  </main-layout>
</template>