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
  },
  mounted() {
    if (!this.flats?.data?.length) {
      this.$store.dispatch("flats/getFlats")
    }
  }
}
</script>
<template>
  <div class="w-full lg:w-3/5">
    <div class="flex flex-col">
      <slot name="mapedHeader"></slot>
      <div class="hidden lg:flex flex-col w-full font-medium">
        <div class="overflow-x-auto">
          <div class="inline-block min-w-full">
            <div class="overflow-hidden">
              <table class="min-w-full text-left">
                <thead class="">
                  <tr class="text-xl opacity-40 lg:visible invisible">
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
                    <td class="whitespace-nowrap w-1/4 py-4">
                      <div class="relative w-28">
                        <img class="w-full rounded-lg" :src="item?.image_url" alt="">
                        <div v-show="item?.sold"
                          class="absolute inset-0 flex items-center justify-center rounded-lg bg-[#E3555399] bg-opacity-60">
                          <span class="text-[#FFFFFF] font-medium">{{ t('statuses.sold') }}</span>
                        </div>
                      </div>
                      <!-- <img class="rounded-lg w-28" :src="item?.image_url" alt=""> -->
                    </td>
                    <td class="whitespace-nowrap w-1/4 py-4"><span>{{ item?.floor?.floor_num }}</span>
                      <span class="opacity-30"> /
                      </span><span class="opacity-30">{{ item?.max_floors }}</span>
                    </td>
                    <td class="whitespace-nowrap w-1/4 py-4">{{ item.rooms }}</td>
                    <td class="whitespace-nowrap w-1/4 py-4">{{ item.area }}</td>
                    <td class="whitespace-nowrap w-1/4 py-4">$ {{ item.price?.toLocaleString() }}</td>
                    <td class="whitespace-nowrap px-6 w-1/4 py-4">
                      <RouterLink :to="{ name: 'Apartment', params: { id: item.id } }">
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
          <p class="text-[#00000066]">{{ t("defaults.pagination.showing") }} <span class="text-black">{{
            flats.data?.length
          }}</span> {{ t("defaults.pagination.out") }} <span class="text-black">{{ flats.meta?.total }}</span></p>
          <button v-if="isMore" @click="loadMore"
            class="bg-black text-white px-6 py-3 rounded-2xl flex items-center space-x-2">
            <span>{{ t("flatsList.more") }}</span>
            <RightArrow class="invert" />
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile -->
    <TransitionGroup name="list" tag="div" class="lg:hidden">
      <div class="flex flex-col w-100 mx-auto lg:mx-0 rounded-lg border mb-5 border-[#9999994D] mt-10" v-for="item in flats.data"
        :key="item?.id">
        <RouterLink :to="{ name: 'Apartment', params: { id: item.id } }">
          <div class="relative">
            <img class="w-full" :src="item?.image_url" alt="">
            <div v-show="item?.sold"
              class="absolute inset-0 flex items-center justify-center rounded-lg bg-[#E3555399] bg-opacity-60">
              <span class="text-[#FFFFFF] font-medium">{{ t('statuses.sold') }}</span>
            </div>
          </div>
        </RouterLink>
        <div class="w-full">
          <div class="flex flex-row justify-between py-3 text-xl">
            <div class="w-full flex flex-col space-y-3 px-2">
              <div class="flex space-x-1 items-center justify-start">
                <label class="opacity-40 whitespace-nowrap">{{ t("flatsList.floor") }}</label>
                <p class="whitespace-nowrap">
                  <span>{{ item?.floor?.floor_num }}</span><span class="opacity-30"> / </span>
                  <span class="opacity-30">{{ item.max_floors }}</span>
                </p>
              </div>
              <div class="flex space-x-1 items-center justify-start">
                <p class="opacity-40 whitespace-nowrap">{{ t("flatsList.area") }}</p>
                <p class="whitespace-nowrap">{{ item.area }}</p>
              </div>
            </div>
            <div class="w-full flex flex-col space-y-3 px-2">
              <div class="flex space-x-1 items-center justify-start">
                <p class="opacity-40 whitespace-nowrap">{{ t("flatsList.rooms") }}</p>
                <p class="whitespace-nowrap">{{ item.rooms }}</p>
              </div>
              <div class="flex space-x-1 items-center justify-start">
                <p class="opacity-40 whitespace-nowrap">{{ t("flatsList.price") }}</p>
                <p class="whitespace-nowrap">${{ item.price.toLocaleString() }}</p>
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
  </div>
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