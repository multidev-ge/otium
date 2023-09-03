<script setup>
import {useProjectBanner} from "@/composables/useProjectBanner";
import ArrowRight from "@/assets/icons/arrow-right.vue";
import XIcon from "@/assets/icons/xIcon.vue";
import RightArrow from "@/assets/icons/apartmentFinderPage/rightArrow.vue";
import {useRouter} from "vue-router";

const router = useRouter()
const project = useProjectBanner()
const {data, functions} = project
const {floors,popupIsOpen, floorHovered, currentFloor, currentFloorNum, floorNum} = data
const {openPopup, closePopup, showTooltip, hideTooltip, getClassForFloorButtons, updateCurrFloorNum} = functions


</script>

<template>
  <div class="relative">
    <img class="w-full h-full rounded-xl" src="@/assets/images/projectBanner/plan.png">
    <div v-for="f in floors"
         class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300"
         @click="router.push('projects/123/floor/123')"
         @mouseover="showTooltip(f)" @mouseleave="hideTooltip"
         :style="{
                width: f.width,
                height: f.height,
                clipPath: `polygon(${f.points})`,
                top: f.top,
                left:f.left
          }">
    </div>

    <div
        :style="{
            top: currentFloor.tooltip_pos.top,
            left: currentFloor.tooltip_pos.left
            }"
        v-if="floorHovered"
        :class="floorHovered?'text-opacity-100':'opacity-0'"
        class="tooltip absolute  h-60 p-8  bg-[#FFFFFF] rounded-xl  duration-300">

      <h3 class="pb-6 text-xl font-medium">{{ currentFloor.floor }}th floor</h3>
      <div class="text-base font-medium grid grid-cols-2 gap-y-6">
        <div v-for="det in currentFloor.details">
          <h4 class="opacity-40">{{ det.name }}</h4>
          <h4>{{ det.value }}</h4>
        </div>
      </div>

    </div>
  </div>


  <button @click="openPopup" class="block lg:hidden w-full py-3 mt-5 px-6 bg-[#F0EEEC] rounded-2xl font-medium">
    Choose a floor
    <arrow-right class="inline-block ml-1"/>
  </button>

  <div v-if="popupIsOpen" class="block lg:hidden fixed w-full bg-[#FFFFFF] left-0 bottom-0 z-50 rounded-t-xl p-6">
    <xIcon @click="closePopup" class="absolute top-6 right-6"/>
    <div class="flex flex-col items-center">
      <p class="text-xl font-medium">choose a floor</p>

      <div class="flex flex-col w-full my-7">
        <div v-for="i in 7" class="w-full p-2 flex justify-center" :class="getClassForFloorButtons(i)">
          <p @click="updateCurrFloorNum(i)">{{ (currentFloorNum + 4 - i + floorNum) % floorNum + 1 }} th</p>
        </div>
      </div>

      <button @click="()=>{
          closePopup()
          router.push('projects/123/floor/123')
        }" class="w-full p-3 bg-black rounded-2xl text-[#FFFFFF]">
        Choose
        <right-arrow color="white" class="inline-block ml-1"/>
      </button>

    </div>
  </div>
</template>

<style scoped>
.tooltip {
  transform: translateX(18px) translateY(-50%);
}

.tooltip::after {
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
</style>