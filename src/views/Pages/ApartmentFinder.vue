<script>
import FiltersPart from "@/components/apartmentFinderPage/filtersPart.vue"
import RightPart from "@/components/apartmentFinderPage/rightPart.vue"
import MainLayout from "../../layouts/mainLayout.vue"
import { useProjectBanner } from "@/composables/useProjectBanner";
// import MapedImage from "@/components/MapedImage.vue";
import image_path from "../../assets/images/maped/blocks/01.jpg"
export default {
  components: {
    FiltersPart, RightPart, MainLayout
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
    block_id() { return this.$store.getters['flats/block_id'] }
  },
  methods: {
    async blockClicked({ block }) {
      this.$store.commit("flats/SET_PROJECT_ID", 1)
      this.$store.commit("flats/SET_BLOCK_ID", block?.id)
      this.$store.dispatch("flats/getFlats")
    }
  }
}
</script>

<template>
  <main-layout>
    <div class="flex md:flex-row flex-col justify-between">
      <FiltersPart />
      <RightPart>
        <template #mapedHeader>
          <!-- <MapedImage :image_path="image_path" :options="blocks" @clicked="blockClicked" /> -->
          <div class="relative mb-4">
            <img class="w-full h-full rounded-xl" src="../../assets/images/01_00002.jpg">
            <div v-for="f in blocks"
              class="pointer-events-none lg:pointer-events-auto absolute opacity-50 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300"
              :class="{ 'bg-[#FFFFFF]': f.block.id == block_id }" @click="blockClicked(f)" :style="{
                width: f.width,
                height: f.height,
                clipPath: `polygon(${f.points})`,
                top: f.top,
                left: f.left
              }">
            </div>
          </div>
        </template>
      </RightPart>
    </div>
  </main-layout>
</template>
