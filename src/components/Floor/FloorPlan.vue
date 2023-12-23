<script setup>
import { onMounted } from "vue";
// import useFloor from "@/composables/floor/useFloor"
import imageDimensions from "@/helpers/imageDimensions";
import processPoints from "@/helpers/processPoints";
import FloorApartment from "@/components/Floor/FloorApartment.vue"
import FloorCarousel from "@/components/Floor/FloorCarousel.vue"
import { ref, watch, computed } from "vue"
import useProjects from "../../composables/useProjects";
import MapedImage from "../MapedImage.vue";
// const props = defineProps(['id'])
// const block = useFloor()
// const blockLength = block.value.length
// const floorNumber = ref(Math.round(blockLength / 2))
// const currentFloor = ref(block.value[floorNumber.value - 1])
const props = defineProps(['id'])
const { floor, getFloor } = useProjects()

// const floors = processPoints([...leftBlock.value, ...rightBlock.value], planWidth, planHeight)
// 

// const currentFloorFlats = computed(() => {
//   return (planWidth && planHeight)
//     ? processPoints(floor.value.flats.map(flat => {
//       flat.points = flat['map'].split(',').map(point => Number(point))
//       return {
//         ...flat,
//         isSold: !!flat.sold,
//         details: {
//           size: flat?.area,
//           beedroom: flat?.for_living,
//           price: flat?.price,
//         }
//       }
//     }), dimensions.planWidth, dimensions.planHeight)
//     : []
// })

// watch(floorNumber, (newFloor) => currentFloor.value = block.value[newFloor - 1])

</script>

<template>
  <!-- Floor Plan -->
  <div class="flex flex-1 items-stretch xl:gap-x-10 max-xl:gap-y-7 max-xl:flex-col justify-center">
    <!-- <h1 class="text-[32px] xl:text-4xl font-medium leading-normal xl:hidden">
      6th floor
    </h1> -->

    <!-- Floor Apartments, Mapped image -->
    <!-- <MapedImage v-if="!!floor?.image_url" :image="floor?.image_url" :maps="floor?.flats" /> -->
    <div v-if="floor" class="relative flex-1">
      <img class="w-full max-sm:h-[152px] h-full" :src="floor?.image_url" alt="floor plan">
      <FloorApartment v-if="floor?.image_url" v-for="apartment in floor?.flats ?? []" :apartment="apartment"
        :key="apartment?.id" />
    </div>
    <!-- {{ currentFloorFlats }} -->
    <!-- <floor-carousel :floorNumber="floorNumber" :blockLength="blockLength" @previousFloor="floorNumber--" -->
    <!-- @nextFloor="floorNumber++" @changeFloor="(floor) => floorNumber = floor" /> -->
  </div>
</template>