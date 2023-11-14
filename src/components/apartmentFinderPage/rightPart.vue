<script>
import { mapGetters } from "vuex";
import RightArrow from "@/assets/icons/apartmentFinderPage/rightArrow.vue";
// import CardsForMobile from "@/components/apartmentFinderPage/universalComponents/Cards.vue";
import { useI18n } from "vue-i18n";
export default {
  components: {
    RightArrow,
    // CardsForMobile,
  },
  setup() {
    const { t } = useI18n({ useScope: "global" })
    return { t }
  },
  computed: {
    ...mapGetters('flats', ['flats', 'meta'])
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
                <td class="whitespace-nowrap w-1/4 py-4"><img class="rounded-lg w-28" :src="apartment.image_url" alt="">
                </td>
                <td class="whitespace-nowrap w-1/4 py-4"><span>{{ apartment.floor }}</span><span class="opacity-30"> /
                  </span><span class="opacity-30">{{ apartment?.max_floors }}</span></td>
                <td class="whitespace-nowrap w-1/4 py-4">{{ apartment.rooms }}</td>
                <td class="whitespace-nowrap w-1/4 py-4">{{ apartment.area }}</td>
                <td class="whitespace-nowrap w-1/4 py-4">$ {{ apartment.price.toLocaleString() }}</td>
                <td class="whitespace-nowrap px-6 w-1/4 py-4">
                  <RouterLink :to="{ name: 'Apartment', params: { id: apartment.project_id, fid: apartment.floor, aid: apartment.id } }">
                    <RightArrow class="cursor-pointer" />
                  </RouterLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <p class="text-[#00000066]">{{ t("defaults.pagination.showing") }} <span class="text-black">{{ flats.length
      }}</span> {{ t("defaults.pagination.out") }} <span class="text-black">{{ meta.total }}</span></p>
      <button class="bg-black text-white px-12 py-2 rounded-2xl">{{ t("apartmentsList.more") }}</button>
    </div>
  </div>

  <div class="md:hidden flex flex-col w-11/12 mx-auto rounded-lg border mb-5 border-[#9999994D] mt-10"
    v-for="card in flats">
    <img class="w-full" :src="card.image_url" alt="">
    <div class="w-full">
      <div class="flex flex-row justify-between py-3 text-xl">
        <div class="w-full flex flex-col space-y-3 px-2">
          <div class="flex space-x-1">
            <label class="opacity-40 whitespace-nowrap">{{ t("apartmentsList.floor") }}</label>
            <div class="whitespace-nowrap">
              <span>{{ card.floor }}</span><span class="opacity-30"> / </span>
              <span class="opacity-30">{{ card.max_floors }}</span>
            </div>
          </div>
          <div class="flex space-x-1">
            <p class="opacity-40 whitespace-nowrap">{{ t("apartmentsList.area") }}</p>
            <div class="whitespace-nowrap">{{ card.area }}</div>
          </div>
        </div>
        <div class="w-full flex flex-col space-y-3 px-2">
          <div class="flex space-x-1">
            <p class="opacity-40 whitespace-nowrap">{{ t("apartmentsList.rooms") }}</p>
            <p class="whitespace-nowrap">{{ card.rooms }}</p>
          </div>
          <div class="flex space-x-1">
            <p class="opacity-40 whitespace-nowrap">{{ t("apartmentsList.price") }}</p>
            <div class="whitespace-nowrap">${{ card.price.toLocaleString() }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <cards-for-mobile/> -->
</template>
