<script setup>
import mainLayout from "@/layouts/mainLayout.vue"
import ContactRightArrowIcon from "@/assets/icons/Contact/ContactRightArrowIcon.vue"
import MortgageCalculator from "@/components/Apartment/MortgageCalculator.vue"
import ApartmentSection from "@/components/Apartment/ApartmentSection.vue"
import FiltersPart from "@/components/apartmentFinderPage/filtersPart.vue";
import RightPart from "@/components/apartmentFinderPage/rightPart.vue";
import { useI18n } from "vue-i18n";

defineProps(['id', 'fid', 'aid'])
const { t } = useI18n({ useScope: "global" })
</script>

<template>
  <mainLayout>
    <!-- Apartment Page -->
    <div class="flex flex-col md:mx-auto mt-1 sm:max-2xl:mt-2 2xl:mt-4 mb-56 sm:max-2xl:mb-48 2xl:mb-40">
      <div class="flex flex-row justify-start">
        <router-link class="flex flex-row justify-start items-center gap-2 py-6 rounded-2xl font-medium leading-8"
          :to="{ name: 'Floor', params: { id: id, fid: fid } }">
          <contact-right-arrow-icon class="rotate-180" stroke="black" />
          {{ t("apartment.backToFloor") }}
        </router-link>
      </div>

      <apartment-section class="xl:mt-7" />

      <mortgage-calculator class="mt-20 xl:mt-28" />

      <!-- should be extracted as component and rendered like below -->
      <!--      <apartment-finder class="mt-20 sm:max-2xl:mt-32 2xl:mt-40" />-->
      <div class="md:flex justify-between mt-20 sm:max-2xl:mt-32 2xl:mt-40">
        <filters-part />
        <right-part />
      </div>
    </div>
  </mainLayout>
</template>