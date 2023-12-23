<script setup>
import { useProjectBanner } from "@/composables/useProjectBanner";

import { useRouter } from "vue-router";
import MobileFloorsPicker from "../../components/Pickers/MobileFloorsPicker.vue"
import floorOrder from "@/helpers/floorOrder";
import { useI18n } from "vue-i18n";

import useApartments from "../../composables/useApartments"
import useProjects from "../../composables/useProjects"
import { onMounted } from "vue";

const { block } = useApartments()
const { blocks, getBlocks } = useProjects()

const router = useRouter()
const project = useProjectBanner()
const { t } = useI18n({ useScope: 'global' })

const { data, functions } = project
const { floors, popupIsOpen, floorHovered, currentFloor, currentFloorNum } = data
const { openPopup, closePopup, showTooltip, hideTooltip } = functions

function goTo(floor) {
  router.push({ name: "Floor", params: { id: floor } })
}

onMounted(() => blocks ?? getBlocks())
</script>

<template>
  <div class="relative">
    <img class="w-full h-full rounded-xl" src="../../assets/images/01_00001.jpg">
    <div v-for="f in floors"
      class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300"
      @click="goTo(currentFloor.floor)" @mouseover="showTooltip(f)" @mouseleave="hideTooltip" :style="{
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
      <h3 class="pb-6 text-xl font-medium">{{ floorOrder(currentFloor.floor) }} floor</h3>
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