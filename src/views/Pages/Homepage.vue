<script setup>
import { onMounted } from "vue"
import MainLayout from "@/layouts/mainLayout.vue"
import PageTitle from "@/components/Headings/PageTitle.vue"
import ProjectBanner from "@/components/ProjectInner/ProjectBanner.vue"
import ContactMap from "@/components/Contact/ContactMap.vue"
import ApartmentFinder from "@/components/Blocks/ApartmentFinder.vue"
import MortgageCalculator from "@/components/Apartment/MortgageCalculator.vue"
import usePages from "@/composables/usePages"
import { useI18n } from "vue-i18n"
const { getPage, title, blocks, components } = usePages()
const { t } = useI18n({ useScope: 'global' })
onMounted(() => getPage())
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
    </div>
  </MainLayout>
</template>