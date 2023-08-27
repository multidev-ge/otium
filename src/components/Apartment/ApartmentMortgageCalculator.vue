<script setup>
import ContactRightArrowIcon from "@/assets/icons/Contact/ContactRightArrowIcon.vue";
import BOGLogo from "../../assets/logos/apartment/BOGLogo.png";
import TBCLogo from "../../assets/logos/apartment/TBCLogo.png";
</script>

<template>
  <div class="grid grid-cols-2 bg-black rounded-xl">
    <div class="flex flex-col justify-between p-16">
      <div class="flex flex-col gap-y-4">
        <h2 class="text-white font-medium text-4.5xl">Calculator</h2>
        <p class="text-white text-xl font-medium leading-8 opacity-60">
          Fusce volutpat lectus nisl consectetur finibus scelerisque augue varius eros sapien diam, euismod pretium
          id, volutpat tortor. In vulputate lorem quis
        </p>
      </div>
      <div class="flex items-center gap-x-6">
        <div class="relative py-8 pl-6 pr-12 bg-[#FCE1D3] rounded-xl">
          <div class="flex gap-x-4 items-center">
            <img :src="BOGLogo" alt="BOG logo">
            <span class="text-xl font-medium leading-8">Start applying</span>
          </div>
          <contact-right-arrow-icon stroke="black" class="-rotate-45 absolute top-3 right-3"/>
        </div>
        <div class="relative py-8 pl-6 pr-12 bg-[#E5F7FD] rounded-xl">
          <div class="flex gap-x-4 items-center">
            <img :src="TBCLogo" alt="TBC logo">
            <span class="text-xl font-medium leading-8">Start applying</span>
          </div>
          <contact-right-arrow-icon stroke="black" class="-rotate-45 absolute top-3 right-3"/>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-xl m-4 p-12 flex flex-col gap-y-12">
      <div class="flex flex-col gap-y-4">
        <h3 class="text-2xl font-medium leading-8">
          Calculate mortgage
        </h3>
        <p class="text-xl font-medium leading-8 opacity-40">
          This numbers are bulk, in order to get exact numbers please visit on of the bank’s official website and apply
          there
        </p>
      </div>
      <div class="grid grid-cols-2 gap-8">
        <div class="pl-6 pt-4 pb-5 border border-opacity-20 rounded-md">
          <span class="block text-sm font-medium leading-6 opacity-40">Total property price</span>
          $<input type="number" value="80_000">
        </div>
        <div class="pl-6 pt-4 pb-5 border border-opacity-20 rounded-md">
          <span class="block text-sm font-medium leading-6 opacity-40">Split payment in years</span>
          <input type="number" value="12">
        </div>
        <div class="pl-6 pt-4 pb-5 border border-opacity-20 rounded-md">
          <span class="block text-sm font-medium leading-6 opacity-40">Percentage</span>
          %<input type="number" value="6">
        </div>
        <div class="pl-6 pt-4 pb-5 border border-opacity-20 rounded-md">
          <span class="block text-sm font-medium leading-6 opacity-40">Pre payment</span>
          $<input type="number" value="0">
        </div>
      </div>
      <div class="flex items-center justify-between">
        <p class="text-xl font-medium leading-8 opacity-40">Your monthly payment</p>
        <p class="text-2xl font-medium leading-8">$540</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>