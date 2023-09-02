<script setup>
import apartmentFinder from "@/composables/forApartmentFinder/apartmentFinder";
import LoadMore from "@/components/apartmentFinderPage/universalComponents/loadMore.vue";
const apartments = apartmentFinder
const {filterApartments, maxFloors,prefix} = apartments()
</script>

<template>
  <div class="mt-7 w-11/12 mx-auto  md:hidden">
    <div class="  flex flex-col   rounded-lg border mb-5 border-[#9999994D] gap-3" v-for="card in filterApartments">
      <img class="w-full" :src="card.img" alt="">
      <div class="w-full flex justify-center">
        <div class="grid grid-cols-2 gap-12 py-3 text-xl">

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
    <load-more/>

  </div>

</template>

