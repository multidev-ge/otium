<script setup>
// import useFloor from "@/composables/floor/useFloor"
import imageDimensions from "@/helpers/imageDimensions";
import processPoints from "@/helpers/processPoints";
import FloorApartment from "@/components/Floor/FloorApartment.vue"
import FloorCarousel from "@/components/Floor/FloorCarousel.vue"
import { ref, watch, computed } from "vue"
import useProjects from "../../composables/useProjects";
import MapedImage from "../MapedImage.vue";

// const block = useFloor()
// const blockLength = block.value.length
// const floorNumber = ref(Math.round(blockLength / 2))
// const currentFloor = ref(block.value[floorNumber.value - 1])

const { floor } = useProjects()


// const floors = processPoints([...leftBlock.value, ...rightBlock.value], planWidth, planHeight)
// 
const currentFloorFlats = computed(() => (floor.value?.flats.length) ? floor.value?.flats.map(flat => {
  const {
    planWidth,
    planHeight
  } = (floor.value?.image_url) ? imageDimensions(floor.value?.image_url).then(dimensions => dimensions).catch(err => console.log(err)) : { panWIdth: null, planHeight: null }
// 
// 
  return {
    ...flat,
    points: processPoints((flat?.map) ? { points: flat?.map } : [], planWidth, planHeight),
    isSold: !!flat.sold,
    details: {
      size: flat?.area,
      beedroom: flat?.for_living,
      price: flat?.price,
    }
  }
}
) : [])


// watch(floorNumber, (newFloor) => currentFloor.value = block.value[newFloor - 1])

</script>

<template>
  <!-- Floor Plan -->
  <div class="flex flex-1 items-stretch xl:gap-x-10 max-xl:gap-y-7 max-xl:flex-col justify-center">
    <h1 class="text-[32px] xl:text-4xl font-medium leading-normal xl:hidden">
      6th floor
    </h1>

    <!-- Floor Apartments, Mapped image -->
    <!-- <MapedImage v-if="!!floor?.image_url" :image="floor?.image_url" :maps="floor?.flats" /> -->
    <div class="relative flex-1">
      <img class="w-full max-sm:h-[152px] h-full" :src="floor?.image_url" alt="floor plan">
      <FloorApartment v-if="currentFloorFlats.length" v-for="apartment in currentFloorFlats" :apartment="apartment" :key="apartment?.id" />
    </div>

    <floor-carousel :floorNumber="floorNumber" :blockLength="blockLength" @previousFloor="floorNumber--"
    @nextFloor="floorNumber++" @changeFloor="(floor) => floorNumber = floor" />
  </div>
</template>