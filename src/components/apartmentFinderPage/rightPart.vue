<script setup>
import RightArrow from "@/assets/icons/apartmentFinderPage/rightArrow.vue";
import apartmentFinder from "@/composables/forApartmentFinder/apartmentFinder";
import CardsForMobile from "@/components/apartmentFinderPage/universalComponents/Cards.vue";
import LoadMore from "@/components/apartmentFinderPage/universalComponents/loadMore.vue";
const apartments = apartmentFinder
const {filterApartments, maxFloors, apartmentComponents,prefix} = apartments()
</script>

<template>



  <div class=" hidden md:flex flex-col w-3/5 	font-medium">
    <div class="overflow-x-auto ">
      <div class="inline-block min-w-full ">
        <div class="overflow-hidden">
          <table class="min-w-full  text-left ">
            <thead>

            <tr class="text-xl opacity-40 md:visible invisible">
              <th v-for="component in apartmentComponents" scope="col" class="">{{component}}</th>
            </tr>

            </thead>

            <tbody v-for="apartment in filterApartments">
            <tr class="text-xl gap items-end" >
              <td class="whitespace-nowrap w-1/4 py-4"><img class="rounded-lg w-28" :src="apartment.img" alt=""></td>
              <td class="whitespace-nowrap w-1/4 py-4"><span>{{apartment.floor}}</span><span class="opacity-30"> / </span><span class="opacity-30">{{maxFloors}}</span></td>
              <td class="whitespace-nowrap w-1/4 py-4">{{apartment.rooms}}</td>
              <td class="whitespace-nowrap w-1/4 py-4">{{apartment.area.toFixed(1)}}</td>
              <td class="whitespace-nowrap w-1/4 py-4">{{prefix}} {{apartment.price.toLocaleString()}}</td>
              <td class="whitespace-nowrap pl-10 pr-2 w-1/4 py-4"><RightArrow class="cursor-pointer"/></td>
            </tr>

            <tr class="w-full border border-[#E0DAD8] opacity-10 ">


            </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>

 <load-more/>

  </div>
  <cards-for-mobile/>


</template>
