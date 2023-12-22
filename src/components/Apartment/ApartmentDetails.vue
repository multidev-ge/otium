<script setup>
import ApartmentDownloadIcon from "@/assets/icons/Apartment/ApartmentDownloadIcon.vue"
import ContactRightArrowIcon from "@/assets/icons/Contact/ContactRightArrowIcon.vue"
import { useI18n } from "vue-i18n"
import useApartments from "../../composables/useApartments";
const { t } = useI18n({ useScope: 'global' })
const { flat } = useApartments()
function downloadPdf() {
    const link = document.createElement('a');
    link.href = flat.value?.current?.pdf;
    link.target = '_blank';
    // link.download = "";
    // Simulate a click on the element <a>
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
</script>

<template>
  <div class="flex sm:max-xl:w-3/5 flex-col justify-between xl:py-14">
    <!-- <div class="flex flex-col gap-y-1.5">
      <h3 class="text-xl xl:text-xl font-medium leading-8" v-text="'Floor'" />

      <apartment-drop-down :options="floors" @changeFloor="(floor) => selectedFloor = floors[floor]"
        :selected="String(selectedFloor)" />
    </div> -->
    <div class="flex xl:flex-col max-xl:mt-10 sm:max-xl:justify-between max-xl:gap-x-10 xl:gap-y-7">
      <div class="flex flex-col xl:gap-y-1.5 max-xl:justify-between">
        <span class="font-medium leading-6 opacity-40" v-text="t('filters.area')" />
        <p class="text-xl font-medium leading-8" v-text="flat?.current?.area" />
      </div>

      <div class="flex flex-col xl:gap-y-1.5 max-xl:justify-between">
        <span class="font-medium leading-6 opacity-40" v-text="t('filters.price')" />
        <p class="text-4.5xl font-bold text-[#7B9F89]" v-text="flat?.current?.price" />
      </div>
    </div>
    <div class="flex flex-col gap-y-5 mt-28">
      <router-link :to="{ name: 'Contact' }"
        class="hover:bg-[#A258A6] transition duration-100 ease-in-out lg:w-fit whitespace-nowrap bg-[#883F7C] flex items-center gap-x-1.5 px-7 py-3 rounded-2xl text-[#FFFAFA] font-medium leading-6">
        {{ t('buttons.RequestCall') }}
        <contact-right-arrow-icon />
      </router-link>

      <a href="#" v-if="flat?.current?.pdf" @click.prevent="downloadPdf"
        class="hover:brightness-90 transition duration-100 ease-in-out lg:w-fit whitespace-nowrap bg-[#F0EEEC] flex items-center gap-x-1.5 px-6 py-3 rounded-2xl font-medium leading-6">
        {{ t('buttons.DownloadPdf') }}
        <apartment-download-icon />
      </a>

    </div>
  </div>
</template>