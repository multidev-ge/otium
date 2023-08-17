<script setup>
import apartmentFinder from "@/composables/apartmentFinder";
import Dropdown from "@/components/apartmentFinderPage/universalComponents/Dropdown.vue";
import TwoDotRange from "@/components/mediaInnerPage/universalComponents/twoDotRange.vue";
const apartments = apartmentFinder
const {dropDowns, rooms, selectRoom, clearFilter} = apartments()
</script>
<template>
  <div class="w-1/6 flex flex-col font-medium  gap-10">
    <p class="text-4xl ">Find your apartment</p>
    <dropdown :name="dropDowns.project.name" :defaultName="dropDowns.project.default" :options="dropDowns.project.list"/>
    <dropdown :name="dropDowns.block.name" :defaultName="dropDowns.block.default" :options="dropDowns.block.list"/>
    <div class="flex flex-col gap-3" >
      <label class="text-xl" for="project">{{rooms.name}}</label>
      <div class="flex gap-2">
        <div class="text-lg flex items-center border-black cursor-pointer justify-center border w-10	h-10 rounded-md" @click="selectRoom(index+1)"  v-for="(room,index) in rooms.quantity"><p>{{index+1}}</p></div>
      </div>
    </div>
    <dropdown type="floor" :name="dropDowns.floor.name" :defaultName="dropDowns.floor.default" :options="dropDowns.floor.list"/>
    <TwoDotRange />
    <TwoDotRange />
    <p @click="clearFilter" class="underline opacity-40 text-base cursor-pointer">Clear Filter</p>
  </div>
</template>
