<script setup>
import ContactRightArrowIcon from "@/assets/icons/Contact/ContactRightArrowIcon.vue"
import useProjects from "../../composables/useProjects";
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: 'global' })
const { floor } = useProjects()
</script>

<template>
  <!-- Floor Details -->
  <div class="flex flex-col justify-between">
    <h1 class="text-3xl lg:text-4.5xl font-medium leading-normal max-xl:hidden">
      {{ floor?.floor }} {{ (floor?.floor === 1) ? 'st' : (floor?.floor === 2) ? 'nd' : 'th' }} floor
    </h1>

    <div class="grid max-xl:grid-cols-2 gap-y-6">
      <div>
        <span v-text="t('projects.apartments')" class="font-medium opacity-40" />
        <p class="font-medium">{{ floor?.free_apartments }}<span class="opacity-40"> / {{ floor?.apartments }}</span></p>
      </div>

      <div>
        <span v-text="t('filters.price')" class="text-base lg:text-lg font-medium lg:leading-8 opacity-60" />
        <p v-text="`${floor?.price?.min} - ${floor?.price?.max}`" class="font-medium" />
      </div>

      <div>
        <span v-text="t('filters.area')" class="font-medium opacity-40" />
        <p v-text="`${floor?.area?.min} - ${floor?.area?.max}`" class="font-medium" />
      </div>

      <div>
        <span v-text="t('filters.rooms')" class="font-medium opacity-40" />
        <p v-text="`${floor?.rooms?.min} - ${floor?.rooms?.max}`" class="font-medium" />
      </div>
    </div>
    <RouterLink :to="{ name: 'ApartmentFinder' }" as="button"
      class="hover:bg-[#FCE1D3] max-lg:mt-12 lg:max-xl:mt-6 xl:mt-3 w-full md:w-fit bg-[#F0EEEC] flex items-center justify-center text-black px-6 py-3 rounded-2xl gap-x-1.5 font-medium whitespace-nowrap transition duration-100 ease-in-out">
      {{ t('apartment.allApartments') }}
      <contact-right-arrow-icon stroke="black" />
    </RouterLink>
  </div>
</template>