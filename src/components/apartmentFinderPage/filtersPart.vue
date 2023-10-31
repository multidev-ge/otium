<script setup>
import Dropdown from "@/components/apartmentFinderPage/universalComponents/Dropdown.vue";
import TwoDotRange from "@/components/apartmentFinderPage/universalComponents/twoDotRange.vue";
import apartmentFinder from "@/composables/forApartmentFinder/apartmentFinder";
const apartments = apartmentFinder
const {dropDowns, rooms, selectRoom, doubleSliderOptions, clearFilter,changeSoldApartmentValue, soldApartmentOption} = apartments()

</script>
<template>
  <div class="md:w-1/6 w-full md:mx-0 mx-auto flex flex-col font-medium  gap-[28px]">
    <p class="text-5xl  leading-[57.6px]">Find your apartment</p>
    <dropdown :name="dropDowns.project.name" :defaultName="dropDowns.project.value" :options="dropDowns.project.list"/>
    <dropdown :name="dropDowns.block.name" :defaultName="dropDowns.block.value" :options="dropDowns.block.list"/>
    <div class="flex flex-col gap-3" >
      <label class="text-xl" for="project">{{rooms.name}}</label>
      <div class="flex gap-2">
        <div class="text-lg flex items-center border-black cursor-pointer justify-center border w-10	h-10 rounded-md" @click="selectRoom(index+1)"  v-for="(room,index) in rooms.quantity"><p>{{index+1}}</p></div>
      </div>
    </div>
    <dropdown type="floor" :name="dropDowns.floor.name" :defaultName="dropDowns.floor.value" :options="dropDowns.floor.list"/>
    <TwoDotRange name="area" :displayName=doubleSliderOptions.area.name :max-value="doubleSliderOptions.area.maxValue" :default-values="[doubleSliderOptions.area.minValue+10,doubleSliderOptions.area.maxValue-50]" :decimal=0 :merge="35" />
    <TwoDotRange name="price" :displayName=doubleSliderOptions.price.name :max-value="doubleSliderOptions.price.maxValue" :default-values=[doubleSliderOptions.price.minValue+50000,doubleSliderOptions.price.maxValue-100000]  :merge="200000" :prefix="doubleSliderOptions.price.prefix" :decimal=0 thousand=","  />
    <div class="flex flex-col gap-3">
      <p class="text-xl">Sold Apartments</p>
      <div class="flex gap-10">
        <div class="flex gap-2">
          <input v-model="soldApartmentOption" @input="changeSoldApartmentValue" class="w-5 h-5 accent-black   rounded-full" name="hideShow" value="option1"  type="radio">
          <label>Show</label>
        </div>
        <div class="flex gap-2">
          <input v-model="soldApartmentOption" @input="changeSoldApartmentValue" class="w-5 h-5 accent-black rounded-full" value="option2" name="hideShow" type="radio">
          <label>Hide</label>
        </div>
      </div>
    </div>
    <p @click="clearFilter"  class="underline opacity-40 text-base cursor-pointer">Clear Filter</p>
  </div>
</template>
