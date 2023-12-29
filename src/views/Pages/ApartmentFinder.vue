<script>
import FiltersPart from "@/components/apartmentFinderPage/filtersPart.vue"
import RightPart from "@/components/apartmentFinderPage/rightPart.vue"
import MainLayout from "@/layouts/mainLayout.vue"
import { useProjectBanner } from "@/composables/useProjectBanner";
// import MapedImage from "@/components/MapedImage.vue";
import image_path from "@/assets/images/maped/blocks/01.jpg"
import ApartmentFinder from "@/components/Blocks/ApartmentFinder.vue";
export default {
  components: {
    FiltersPart, RightPart, MainLayout,
    ApartmentFinder
},
  setup() {
    const { data } = useProjectBanner()
    const { blocks } = data

    return {
      blocks,
      image_path
    }
  },
  computed: {
    block_id() { return this.$store.getters['flats/block_id'] },
    project_id() { return this.$store.getters['flats/project_id'] },
  },
  methods: {
    async blockClicked({ block }) {
      this.$store.commit("flats/SET_PROJECT_ID", 1)
      this.$store.commit("flats/SET_BLOCK_ID", block?.id)
      this.$store.dispatch("flats/getFloors")
      this.$store.commit("flats/SET_STATE", { key: "floor_id", value: null })
      this.$store.dispatch("flats/getFlats")
    }
  }
}
</script>

<template>
  <main-layout>
    <!-- <div class="flex flex-col lg:flex-row justify-between space-y-2 space-x-2"> -->
      <!-- <FiltersPart /> -->
      <ApartmentFinder>
        <template #mapedHeader>
          <!-- <MapedImage :image_path="image_path" :options="blocks" @clicked="blockClicked" /> -->
          <div class="relative mb-4">
            <img class="w-full h-full rounded-xl" src="../../assets/images/01_00002.jpg">
            <div v-show="blocks?.length && project_id" v-for="f in blocks"
              class="pointer-events-auto absolute opacity-50 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300"
              :class="{ 'bg-[#FFFFFF]': f.block.id == block_id }" @click="blockClicked(f)" @touchstart="blockClicked(f)" :style="{
                width: f.width,
                height: f.height,
                clipPath: `polygon(${f.points})`,
                top: f.top,
                left: f.left
              }">
            </div>
          </div>
        </template>
      </ApartmentFinder>
    <!-- </div> -->
  </main-layout>
</template>
