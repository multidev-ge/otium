<script setup>
import apartmentFinder from "@/composables/forApartmentFinder/apartmentFinder";
import RightArrow from "@/assets/icons/apartmentFinderPage/rightArrow.vue";
const apartments = apartmentFinder
const {filterApartments, maxFloors,prefix} = apartments()
</script>

<template>
  <div class="mt-[58px]">
    <div class=" md:hidden flex flex-col w-full mb-[28px] mx-auto rounded-lg border   border-[#9999994D] " v-for="card in filterApartments">
      <img class="w-full h-[243px]" :src="card.img" alt="">
      <div class=" flex justify-start">
        <div class="grid grid-cols-2 gap-4 p-[18px] text-xl">

          <div>

            <div class="flex gap-3 mb-2">
              <p class="opacity-40">Floor</p>
              <div>
                <span>{{card.floor}}</span><span class="opacity-30"> / </span><span class="opacity-30">{{maxFloors}}</span>
              </div>
            </div>

            <div class="flex gap-3 mb-2">
              <p class="opacity-40">Area</p>
              <div>{{card.area.toFixed(1)}} m2</div>
            </div>

          </div>

          <div class="flex flex-col gap-3">

            <div class="flex gap-3">
              <p class="opacity-40">Rooms</p>
              <p>{{card.rooms}}</p>
            </div>
            <div class="flex gap-3">
              <p class="opacity-40">Price</p>
              <div>{{prefix}}{{card.price.toLocaleString()}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden md:flex  flex-col gap-[24px]">
        <p class="text-[20px]  text-[#00000066]">You have seen <span class="text-black">13</span> apartments out of <span class="text-black">426</span></p>
        <button class="w-full bg-black rounded-[16px] items-center justify-center text-white h-[48px] gap-[6px] flex">Explore more <span><RightArrow color="white"/></span></button>
      </div>
    </div>

    <div class="flex md:hidden flex-col gap-[24px]">
      <p class="text-[20px]  text-[#00000066]">You have seen <span class="text-black">13</span> apartments out of <span class="text-black">426</span></p>
      <button class="w-full bg-black rounded-[16px] items-center justify-center text-white h-[48px] gap-[6px] flex">Explore more <span><RightArrow color="white"/></span></button>
    </div>

  </div>
</template>

