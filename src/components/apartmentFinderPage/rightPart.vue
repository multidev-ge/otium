<script>
import { mapGetters, mapActions } from "vuex";
import RightArrow from "@/assets/icons/apartmentFinderPage/rightArrow.vue";
// import CardsForMobile from "@/components/flatFinderPage/universalComponents/Cards.vue";
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
    ...mapGetters('flats', ['flats', 'isMore'])
  },
  methods: {
    ...mapActions('flats', ['loadMore'])
  }
}
</script>
<template>
  <div class="hidden md:flex  flex-col w-3/5 font-medium">
    <slot name="mapedHeader"></slot>
    <div class="overflow-x-auto">
      <div class="inline-block min-w-full">
        <div class="overflow-hidden">
          <table class="min-w-full text-left">
            <thead class="">
              <tr class="text-xl opacity-40 md:visible invisible">
                <th v-for="key in [
                  'flat',
                  'floor',
                  'rooms',
                  'area',
                  'price',
                ]" scope="col" class="">
                  {{ t(`flatsList.${key}`) }}
                </th>
              </tr>
            </thead>
            <TransitionGroup name="list" tag="tbody">
              <tr class="text-xl" v-for="item in flats.data" :key="item?.id">
                <td class="whitespace-nowrap w-1/4 py-4"><img class="rounded-lg w-28" :src="item?.image_url" alt="">
                </td>
                <td class="whitespace-nowrap w-1/4 py-4"><span>{{ item.floor }}</span><span class="opacity-30"> /
                  </span><span class="opacity-30">{{ item?.max_floors }}</span></td>
                <td class="whitespace-nowrap w-1/4 py-4">{{ item.rooms }}</td>
                <td class="whitespace-nowrap w-1/4 py-4">{{ item.area }}</td>
                <td class="whitespace-nowrap w-1/4 py-4">$ {{ item.price?.toLocaleString() }}</td>
                <td class="whitespace-nowrap px-6 w-1/4 py-4">
                  <RouterLink :to="{ name: 'Apartment', params: { id: item.project_id, fid: item.floor, aid: item.id } }">
                    <RightArrow class="cursor-pointer" />
                  </RouterLink>
                </td>
              </tr>
            </TransitionGroup>
          </table>
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <p class="text-[#00000066]">{{ t("defaults.pagination.showing") }} <span class="text-black">{{ flats.data?.length
      }}</span> {{ t("defaults.pagination.out") }} <span class="text-black">{{ flats.meta?.total }}</span></p>
      <button v-if="isMore" @click="loadMore"
        class="bg-black text-white px-6 py-3 rounded-2xl flex items-center space-x-2">
        <span>{{ t("flatsList.more") }}</span>
        <RightArrow class="invert" />
      </button>
    </div>
  </div>
  <!-- Mobile -->
  <TransitionGroup name="list" tag="div" class="md:hidden">
    <div class="flex flex-col w-100 mx-auto rounded-lg border mb-5 border-[#9999994D] mt-10" v-for="card in flats.data"
      :key="card?.id">
      <img class="w-full" :src="card?.image_url" alt="">
      <div class="w-full">
        <div class="flex flex-row justify-between py-3 text-xl">
          <div class="w-full flex flex-col space-y-3 px-2">
            <div class="flex space-x-1">
              <label class="opacity-40 whitespace-nowrap">{{ t("flatsList.floor") }}</label>
              <div class="whitespace-nowrap">
                <span>{{ card.floor }}</span><span class="opacity-30"> / </span>
                <span class="opacity-30">{{ card.max_floors }}</span>
              </div>
            </div>
            <div class="flex space-x-1">
              <p class="opacity-40 whitespace-nowrap">{{ t("flatsList.area") }}</p>
              <div class="whitespace-nowrap">{{ card.area }}</div>
            </div>
          </div>
          <div class="w-full flex flex-col space-y-3 px-2">
            <div class="flex space-x-1">
              <p class="opacity-40 whitespace-nowrap">{{ t("flatsList.rooms") }}</p>
              <p class="whitespace-nowrap">{{ card.rooms }}</p>
            </div>
            <div class="flex space-x-1">
              <p class="opacity-40 whitespace-nowrap">{{ t("flatsList.price") }}</p>
              <div class="whitespace-nowrap">${{ card.price.toLocaleString() }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button v-if="isMore" @click="loadMore"
      class="bg-black text-white px-6 py-3 rounded-2xl w-full flex items-center space-x-2 justify-center">
      <span>{{ t("flatsList.more") }}</span>
      <RightArrow class="invert" />
    </button>
  </TransitionGroup>
  <!-- <cards-for-mobile/> -->
</template>
<style scopped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>