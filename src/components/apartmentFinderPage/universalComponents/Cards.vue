<script setup>
import apartmentFinder from "@/composables/forApartmentFinder/apartmentFinder";
const apartments = apartmentFinder
const {filterApartments, maxFloors,prefix} = apartments()
</script>

<template>
  <div class=" md:hidden flex flex-col w-11/12 mx-auto rounded-lg border mb-5 border-[#9999994D] mt-10" v-for="card in filterApartments">
    <img class="w-full" :src="card.img" alt="">
    <div class="w-full flex justify-center">
      <div class="grid grid-cols-2 gap-14 py-3 text-xl">

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
    </div>
</template>

