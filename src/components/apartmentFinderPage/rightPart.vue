<script setup>
import RightArrow from "@/assets/icons/apartmentFinderPage/rightArrow.vue";
import apartmentFinder from "@/composables/apartmentFinder";
const apartments = apartmentFinder
const {filterApartments, maxFloors, apartmentComponents,} = apartments()
console.log(filterApartments)
</script>

<template>
  <div class="flex flex-col w-3/5	font-medium">
    <div class="overflow-x-auto ">
      <div class="inline-block min-w-full ">
        <div class="overflow-hidden">
          <table class="min-w-full text-left ">
            <thead>
              <tr class="text-xl opacity-40">
                <th v-for="componrnt in apartmentComponents" scope="col" class="px-6">{{componrnt}}</th>
              </tr>
            </thead>
            <tbody>
            <tr class="text-xl" v-for="apartment in filterApartments">
              <td class="whitespace-nowrap px-6 w-1/4 py-4"><img class="rounded-lg w-full" :src="apartment.img" alt=""></td>
              <td class="whitespace-nowrap px-6 w-1/4 py-4"><span>{{apartment.floor}}</span><span class="opacity-30"> / </span><span class="opacity-30">{{maxFloors}}</span></td>
              <td class="whitespace-nowrap px-6 w-1/4 py-4">{{apartment.rooms}}</td>
              <td class="whitespace-nowrap px-6 w-1/4 py-4">{{apartment.area.toFixed(1)}}</td>
              <td class="whitespace-nowrap px-6 w-1/4 py-4"><RightArrow class="cursor-pointer"/></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
