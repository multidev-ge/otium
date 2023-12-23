<script setup>
import { useProjectBanner } from "@/composables/useProjectBanner"
import { useRouter } from "vue-router"
import MobileFloorsPicker from "../../components/Pickers/MobileFloorsPicker.vue"
import floorOrder from "@/helpers/floorOrder"
import { useI18n } from "vue-i18n"
import useApartments from "../../composables/useApartments"
import useProjects from "../../composables/useProjects"
import { onMounted, computed } from "vue"
import { useStore } from "vuex"

const { block } = useApartments()
const { blocks, getBlocks } = useProjects()

const router = useRouter()
const project = useProjectBanner()

const { t } = useI18n({ useScope: 'global' })

const { data, functions } = project
const { floors, popupIsOpen, floorHovered, currentFloor, currentFloorNum } = data
const { openPopup, closePopup, showTooltip, hideTooltip } = functions

const store = useStore()

const original_floors = computed(() => store.getters['flats/floors'])
const original_blocks = computed(() => store.getters['flats/blocks'])

const mappedFloors = computed(() => {
  return floors.map(floor => {
    let block_id = floor.post === 'left' ? 1 : 2
    const filtered_floor = original_floors.value.filter(f => f.floor === floor.floor && f.block_id === block_id)
    floor.details = [
      { name: t(`tooltip.apartments`), value: `${filtered_floor[0]?.apartments.free} / ${filtered_floor[0]?.apartments.total}` },
      { name: t(`tooltip.prices`), value: `$${filtered_floor[0]?.price.min} - $${filtered_floor[0]?.price.max}` },
      { name: t(`tooltip.sizes`), value: `${filtered_floor[0]?.area.min} - ${filtered_floor[0]?.area.max}` },
      { name: t(`tooltip.rooms`), value: `${filtered_floor[0]?.rooms.min} - ${filtered_floor[0]?.rooms.max}` },
    ]
    // console.log(filtered_floor[0])
    // floor.test = "test"

    return { ...floor, ...filtered_floor[0] }
  })
})

function goTo(floor) {
  router.push({ name: "Floor", params: { id: floor } })
}

onMounted(() => {
  store.commit('flats/SET_STATE', { key: 'project_id', value: 1 })
  store.dispatch("flats/getBlocks")
  store.dispatch("flats/getFloors")
})
</script>

<template>
  <div class="relative">
    <img class="w-full h-full rounded-xl" src="../../assets/images/01_00001.jpg">
    <div v-for="f in mappedFloors"
      class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300"
      @click="goTo(f?.id)" @mouseover="showTooltip(f)" @mouseleave="hideTooltip" :style="{
        width: f.width,
        height: f.height,
        clipPath: `polygon(${f.points})`,
        top: f.top,
        left: f.left
      }">
    </div>
    <div v-if="floorHovered" class="tooltip absolute h-60 p-8 bg-[#FFFFFF] rounded-xl duration-300" :class="[
      floorHovered ? 'text-opacity-100' : 'opacity-0',
      (currentFloor.pos === 'right') ? 'rightTooltip' : 'leftTooltip'
    ]" :style="{
  top: currentFloor.tooltip_pos.top,
  // left: (currentFloor.pos === 'left') ? currentFloor.tooltip_pos.left : 'auto',
  // right: (currentFloor.pos === 'right') ? currentFloor.tooltip_pos.right : 'auto',
  left: currentFloor.tooltip_pos.left,
}">
      <h3 class="pb-6 text-xl font-medium">{{ currentFloor.floor }} {{ t("tooltip.floor") }}</h3>
      <div class="text-base font-medium grid grid-cols-2 gap-y-6">

        <div v-for="det in currentFloor.details">
          <h4 class="opacity-40">{{ det.name }}</h4>
          <h4>{{ det.value }}</h4>
        </div>

      </div>
    </div>
  </div>

  <MobileFloorsPicker />
</template>

<style scoped>
.tooltip {
  transform: translateX(18px) translateY(-50%);
}

.leftTooltip::after {
  content: " ";
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -12px;
  border-width: 12px;
  border-style: solid;
  border-color: transparent white transparent transparent;
  transform: translateX(1px);
}

.rightTooltip::after {
  content: " ";
  position: absolute;
  top: 50%;
  left: 100%;
  margin-top: -12px;
  border-width: 12px;
  border-style: solid;
  border-color: transparent white transparent transparent;
  transform: scaleX(-1);
}
</style>