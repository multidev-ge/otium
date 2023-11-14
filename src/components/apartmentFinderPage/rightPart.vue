<script>
import { mapGetters, mapActions } from "vuex";
import RightArrow from "@/assets/icons/apartmentFinderPage/rightArrow.vue";
import apartmentFinder from "@/composables/forApartmentFinder/apartmentFinder";
import CardsForMobile from "@/components/apartmentFinderPage/universalComponents/Cards.vue";
import { useI18n } from "vue-i18n";

export default {
  components: {
    RightArrow,
    CardsForMobile,
  },
  setup(){
    const { t } = useI18n({ useScope: "global" })
    const apartments = apartmentFinder
    const {filterApartments, maxFloors, apartmentComponents,prefix} = apartments()

    return { t, filterApartments, maxFloors, apartmentComponents, prefix }
  },
  computed: {
    ...mapGetters('flats', ['flats'])
  },
}

</script>

<template>
  <div class=" hidden md:flex flex-col w-3/5 	font-medium">
    <div class="overflow-x-auto ">
      <div class="inline-block min-w-full ">
        <div class="overflow-hidden">
          <table class="min-w-full text-left ">
            <thead class="">
            <tr class="text-xl opacity-40 md:visible invisible">
              <th scope="col" class="">{{ t("apartmentsList.apartment") }}</th>
              <th scope="col" class="">{{ t("apartmentsList.floor") }}</th>
              <th scope="col" class="">{{ t("apartmentsList.rooms") }}</th>
              <th scope="col" class="">{{ t("apartmentsList.area") }}</th>
              <th scope="col" class="">{{ t("apartmentsList.price") }}</th>
            </tr>
            </thead>

            <tbody>
            <tr class="text-xl " v-for="apartment in flats">
              <td class="whitespace-nowrap w-1/4 py-4"><img class="rounded-lg w-28" :src="apartment.image_url" alt=""></td>
              <td class="whitespace-nowrap w-1/4 py-4"><span>{{apartment.floor}}</span><span class="opacity-30"> / </span><span class="opacity-30">{{maxFloors}}</span></td>
              <td class="whitespace-nowrap w-1/4 py-4">{{apartment.rooms}}</td>
              <td class="whitespace-nowrap w-1/4 py-4">{{ apartment.area }}</td>
              <td class="whitespace-nowrap w-1/4 py-4">{{prefix}} {{apartment.price.toLocaleString()}}</td>
              <td class="whitespace-nowrap px-6 w-1/4 py-4"><RightArrow class="cursor-pointer"/></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <p class="text-[#00000066]">You have seen <span class="text-black">13</span> apartments out of <span class="text-black">426</span></p>
      <button class="bg-black text-white px-12 py-2 rounded-2xl">Loader More</button>

    </div>
  </div>

  <cards-for-mobile/>

</template>
