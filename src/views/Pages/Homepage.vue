<script setup>
import { onMounted, computed } from "vue"
import MainLayout from "@/layouts/mainLayout.vue"
import PageTitle from "@/components/Headings/PageTitle.vue"
import ProjectBanner from "@/components/ProjectInner/ProjectBanner.vue"
import ContactMap from "@/components/Contact/ContactMap.vue"
import ApartmentFinder from "@/components/Blocks/ApartmentFinder.vue"
import MortgageCalculator from "@/components/Apartment/MortgageCalculator.vue"
import rightArrow from "../../assets/icons/apartmentFinderPage/rightArrow.vue"
import ArrowUpRight from "../../assets/icons/arrow-up-right.vue"
import usePages from "@/composables/usePages"
import { useI18n } from "vue-i18n"
import { useStore } from "vuex"
import { RouterLink } from "vue-router"
const { getPage, title, blocks, components } = usePages()
const { t } = useI18n({ useScope: 'global' })
const store = useStore()
const medias = computed(() => store.getters['media/medias'])
const isMore = computed(() => store.getters['media/isMore'])
const loadMore = () => store.dispatch('media/loadMore')
onMounted(() => {
  getPage()
  store.dispatch('media/getMedias')
})
</script>
<template>
  <MainLayout>
    <PageTitle :title="t('home.title')" />
    <div class="flex flex-col fa-1xlg:gap-40 gap-20">
      <!-- static componetns on homepage -->
      <ProjectBanner />
      <!-- dynamic components according to api -->
      <component v-if="blocks.length" v-for="block in blocks" :is="components[block.type]" :content="block.data" />
      <!-- static components on homepage -->
      <ContactMap class="w-full h-[840px] md:h-[640px] relative" :with-filter="true" />
      <ApartmentFinder />
      <MortgageCalculator />
      <div v-if="medias?.data?.length" class="hidden w-full xl:flex flex-col lg:flex-row justify-between flex-start">
        <div class="w-2/6">
          <PageTitle :title="t('media.title')" :class="'2xl:text-[48px]'" />
        </div>
        <div class="w-full lg:w-4/6 flex flex-col">
          <div class="w-full flex flex-col lg:flex-row  border-b border-[#D9D9D9] lg:py-8 gap-10 items-center"
            v-for="media in  medias?.data">
            <RouterLink class="w-full lg:w-2/6" :to="{ name: 'MediaInner', params: { id: media?.id } }">
              <img class="w-full h-auto rounded-lg" :src="media.image_url" alt="">
            </RouterLink>
            <div class="w-full flex gap-2 flex-col ">
              <p class="text-lg text-[#00000099]">{{ media?.category?.title }} // {{ media?.date }}</p>
              <p class="text-2xl pb-5 leading-9">{{ media?.title }}</p>
            </div>
            <div class="flex h-full w-auto items-end">
              <ArrowUpRight />
            </div>

          </div>
          <div class="mt-8 flex flex-col xl:flex-row justify-between items-center">
            <p class="text-[#00000066]">{{ t("defaults.pagination.showing") }} <span class="text-black">{{
            medias?.data?.length
          }}</span> {{ t("defaults.pagination.out") }} <span class="text-black">{{ medias?.meta?.total }}</span></p>
            <button v-if="isMore" @click="loadMore"
            class="bg-black text-white px-6 py-3 rounded-2xl w-full xl:w-fit flex items-center space-x-2 justify-center">
            <span>{{ t("flatsList.more") }}</span>
            <rightArrow class="invert" />
          </button>
        </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>