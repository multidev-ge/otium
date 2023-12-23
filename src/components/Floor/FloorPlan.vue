<script setup>
// import useFloor from "@/composables/floor/useFloor"
import imageDimensions from "@/helpers/imageDimensions";
import processPoints from "@/helpers/processPoints";
import FloorApartment from "@/components/Floor/FloorApartment.vue"
import FloorCarousel from "@/components/Floor/FloorCarousel.vue"
import { onMounted, ref, watch, computed } from "vue"
import useProjects from "../../composables/useProjects";
import MapedImage from "../MapedImage.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
// const props = defineProps(['id'])
// const block = useFloor()


// const currentFloor = ref(block.value[floorNumber.value - 1])
const props = defineProps(['id'])
// const { floor, getFloor } = useProjects()

const store = useStore()
const router = useRouter()

const getFloor = async (...args) => {

  await store.dispatch('floors/getFloor', ...args)

  const { planWidth, planHeight } = await imageDimensions(floor.value?.image_url)//.then(dimensions => dimensions).catch(err => console.log(err))

  floor.value.flats = processPoints(floor.value.flats.map(flat => {
    // console.log(flat['map'])
    flat.points = (flat['map']) ? flat['map'].split(',').map(point => Number(point)) : []
    return {
      ...flat,
      isSold: !!flat.sold,
      details: {
        size: flat?.area,
        beedroom: flat?.for_living,
        price: flat?.price,
      }
    }
  }), planWidth, planHeight)

  // store.commit('floors/SET_STATE', { key: 'floor', value: floor })

}

const floor = computed(() => store.getters['floors/floor'])
const floors = computed(() => store.getters['floors/floors'])

const blockLength = computed(() => store.getters['floors/floors']?.length)
const floorNumber = ref(1) //(() => Math.round(floor.value?.floor) ?? null)

function navigate(newVal) {

  console.log(newVal)

  const filtered = floors.value.filter(fl => fl.floor === newVal)

  router.push({ name: "Floor", params: { id: filtered[0]?.id } })

  getFloor(filtered[0]?.id)
  // await store.dispatch("floors/getFloor", props.id)

  // store.commit('floors/SET_STATE', { key: "block_id", value: floor.value?.block?.id })
  // store.dispatch("floors/getFloors")
  floorNumber.value = newVal

}
// const floorNumber = computed({
//   get: () => store.getters['floors/floor']?.floor,
//   set: (newVal) => {
//     store.commit('floors/SET_STATE', {key: })
//   }
// })

onMounted(async () => {
  await getFloor(props.id)
  // await store.dispatch("floors/getFloor", props.id)
  store.commit('floors/SET_STATE', { key: "block_id", value: floor.value?.block?.id })
  await store.dispatch("floors/getFloors")
  floorNumber.value = Math.round(floor.value?.floor) ?? null
})
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
    <floor-carousel v-if="blockLength && floorNumber" :floorNumber="floorNumber" :blockLength="blockLength"
      @previousFloor="navigate(floorNumber - 1)" @nextFloor="navigate(floorNumber + 1)" @changeFloor="navigate" />
  </div>
</template>