<script>
import FiltersPart from "@/components/apartmentFinderPage/filtersPart.vue"
import RightPart from "@/components/apartmentFinderPage/rightPart.vue"
import MainLayout from "../../layouts/mainLayout.vue"
import { useProjectBanner } from "@/composables/useProjectBanner";
import MapedImage from "@/components/MapedImage.vue";
import image_path from "../../assets/images/maped/blocks/01.jpg"
export default {
  components: {
    FiltersPart, RightPart, MainLayout, MapedImage
  },
  setup() {
    const { data } = useProjectBanner()
    const { blocks } = data
    return {
      blocks,
      image_path
    }
  },
  methods: {
    async blockClicked({ block }){
      this.$store.commit("flats/SET_PROJECT_ID", 1)
      this.$store.commit("flats/SET_BLOCK", block)
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
          <MapedImage :image_path="image_path" :options="blocks" @blockClicked="blockClicked" />
        </template>
      </RightPart>
    </div>
  </main-layout>
</template>
