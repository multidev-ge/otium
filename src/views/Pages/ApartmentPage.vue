<script setup>
import { onMounted } from "vue"
import { useI18n } from "vue-i18n"
import useApartments from "@/composables/useApartments"
import mainLayout from "@/layouts/mainLayout.vue"
import ContactRightArrowIcon from "@/assets/icons/Contact/ContactRightArrowIcon.vue"
import MortgageCalculator from "@/components/Apartment/MortgageCalculator.vue"
import ApartmentSection from "@/components/Apartment/ApartmentSection.vue"
import ApartmentFinder from "@/components/Blocks/ApartmentFinder.vue"
const props = defineProps(['id', 'fid', 'aid'])
const { t } = useI18n({ useScope: "global" })
const { getFlat } = useApartments()
onMounted(async () => { await getFlat(props.aid) })
</script>
<template>
  <mainLayout>
    <div class="flex flex-col md:mx-auto mt-1 sm:max-2xl:mt-2 2xl:mt-4 mb-56 sm:max-2xl:mb-48 2xl:mb-40">
      <div class="flex flex-row justify-start">
        <router-link class="flex flex-row justify-start items-center gap-2 py-6 rounded-2xl font-medium leading-8"
          :to="{ name: 'Floor', params: { id: id, fid: fid } }">
          <contact-right-arrow-icon class="rotate-180" stroke="black" />
          {{ t("apartment.backToFloor") }}
        </router-link>
      </div>
      <ApartmentSection class="xl:mt-7" />
      <MortgageCalculator class="mt-20 xl:mt-28" />
      <ApartmentFinder />
    </div>
  </mainLayout>
</template>