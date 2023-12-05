<script setup>
import FiltersPart from "@/components/apartmentFinderPage/filtersPart.vue"
import RightPart from "@/components/apartmentFinderPage/rightPart.vue"
import MainLayout from "../../layouts/mainLayout.vue"
import { useProjectBanner } from "@/composables/useProjectBanner";

const { data, functions } = useProjectBanner()

const { blocks } = data

console.log(blocks)

</script>

<template>
  <main-layout>
    <div class="flex md:flex-row flex-col justify-between">
      <FiltersPart />
      <RightPart>
        <template #blocks>
          <div class="relative mb-4">
            <img class="w-full h-full rounded-xl" src="../../assets/images/01_00002.jpg">
            <div v-for="f in blocks"
              class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300"
              @click="goTo(currentFloor.floor)" @mouseover="showTooltip(f)" @mouseleave="hideTooltip" :style="{
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
