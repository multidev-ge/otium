<script>
import { mapGetters, mapActions } from "vuex"
import MainLayout from "@/layouts/mainLayout.vue";
import ArrowDownIcon from "@/assets/icons/MediaPage/ArrowDownIcon.vue";
// import {useMedia} from "@/composables/useMedia";
import MediaCard from "@/components/MediaPage/MediaCard.vue";
import { useI18n } from "vue-i18n";
import { useTitle } from "@vueuse/core";


// const {
//   categories,
//   filteredData,
//   selectedCategory,
//   setCategory,
// } = useMedia()

export default {
  components: { MainLayout, ArrowDownIcon, MediaCard },
  computed: {
    ...mapGetters('media', ['categories', 'active', 'filteredMedias', 'next_page'])
  },
  setup() {
    const { t } = useI18n({ useScope: "global" })

    return { t }
  },
  methods: {
    ...mapActions('media', ['getCategories', 'getMedias', 'setActive'])
  },
  mounted() {
    this.getCategories()
    this.getMedias()
    useTitle(`${this.t("media.title")} - ${this.t('main.brand')}`)
  }
}

</script>

<template>
  <MainLayout>
    <div class="">
      <h1 class="mb-12 text-5xl md:text-8xl font-medium text-[#000]">{{ t("media.title") }}</h1>
      <div class="overflow-scroll md:overflow-hidden flex gap-2.5 md:gap-4 mb-8 w-full">
        <button v-for="category in categories" @click="setActive(category.id)"
          :class="active === category.id ? 'bg-[#000] text-white' : ''" class="flex-none px-6 py-3 rounded-2xl text-base md:text-xl font-medium transition-all duration-250
                        hover:bg-[#000] hover:text-white border border-[#000]">
          {{ category.title }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8 pb-16">
        <MediaCard v-for="data in filteredMedias" :data="data" />
      </div>

      <button v-if="next_page" class="flex gap-1.5  mx-auto px-6 py-3 bg-[#F0EEEC] font-medium text-base rounded-2xl"
        @click.prevent="getMedias(true)">
        More
        <ArrowDownIcon />
      </button>

    </div>
  </MainLayout>
</template>

<style scoped></style>