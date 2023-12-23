<script setup>
import { ref, watch } from "vue"
import ApartmentDownloadIcon from "@/assets/icons/Apartment/ApartmentDownloadIcon.vue"
import ContactRightArrowIcon from "@/assets/icons/Contact/ContactRightArrowIcon.vue"
import { useI18n } from "vue-i18n"
import useApartments from "../../composables/useApartments";
import ContactForm from "../Contact/ContactForm.vue";
import XIcon from "@/assets/icons/xIcon.vue"
const { t } = useI18n({ useScope: 'global' })
const { flat } = useApartments()
const fomSubmitedSuccessfully = ref(false)
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
function showSuccessAlert() {
  fomSubmitedSuccessfully.value = true

  setTimeout(() => {
    fomSubmitedSuccessfully.value = false
  }, 5000)
  
}
function hideSuccessAlert() {
  fomSubmitedSuccessfully.value = false
}

watch(fomSubmitedSuccessfully, () => {
  if(!!fomSubmitedSuccessfully.value){
    window.scrollTo(0, 0)
    document.body.classList.toggle('overflow-hidden')
    document.body.classList.toggle('touch-none')
  }else{
    document.body.classList.toggle('overflow-hidden')
    document.body.classList.toggle('touch-none')
  }
})
</script>

<template>
  <div class="flex sm:max-xl:w-3/5 flex-col justify-start xl:py-14">
    <Teleport to="body">
      <div v-if="!!fomSubmitedSuccessfully" class="hidden md:block absolute inset-0 bg-black bg-opacity-50">
        <div class="w-full h-full flex content-center items-center justify-center">
          <div class="relative bg-white p-8 rounded-md w-1/4">
            <div class="w-full flex justify-content-end">
              <XIcon @click.prevent="hideSuccessAlert" class="absolute top-6 right-6 cursor-pointer" />
            </div>
            <div class="">
              <h2 class="font-semibold text-2xl">Thank You!</h2>
            </div>
            <div class="mt-2">
              <p>Our sales will contact you soon</p>
            </div>

          </div>
        </div>
      </div>
    </Teleport>
    <!-- <div class="flex flex-col gap-y-1.5">
      <h3 class="text-xl xl:text-xl font-medium leading-8" v-text="'Floor'" />

      <apartment-drop-down :options="floors" @changeFloor="(floor) => selectedFloor = floors[floor]"
        :selected="String(selectedFloor)" />
    </div> -->
    <div class="flex xl:flex-col max-xl:mt-10 sm:max-xl:justify-between max-xl:gap-x-10 xl:gap-y-7">
      <div class="flex flex-col xl:gap-y-1.5 max-xl:justify-between">
        <span class="font-medium leading-6 opacity-40" v-text="t('filters.area')" />
        <p class="text-xl font-medium leading-8" v-text="t('dimentions.sqmeter', {amount: flat?.current?.area})" />
      </div>

      <div class="flex flex-col xl:gap-y-1.5 max-xl:justify-between">
        <span class="font-medium leading-6 opacity-40" v-text="t('filters.price')" />
        <p class="text-4.5xl font-bold text-[#7B9F89]" v-text="`$${flat?.current?.price}`" />
      </div>
    </div>
    <div class="flex flex-col gap-y-5 mt-6">

      <contact-form :messageField="false" @formSubmited="showSuccessAlert">
        <template #submitButton>
          <button type="submit"
            class="hover:bg-[#A258A6] transition duration-100 ease-in-out w-full whitespace-nowrap bg-[#883F7C] flex items-center justify-center gap-x-1.5 px-7 py-3 rounded-2xl text-[#FFFAFA] font-medium leading-6">
            {{ t('buttons.RequestCall') }}
            <contact-right-arrow-icon />
          </button>
        </template>
      </contact-form>

      <a href="#" v-if="flat?.current?.pdf" @click.prevent="downloadPdf"
        class="hover:brightness-90 transition duration-100 ease-in-out lg:w-fit whitespace-nowrap bg-[#F0EEEC] flex items-center gap-x-1.5 px-6 py-3 rounded-2xl font-medium leading-6">
        {{ t('buttons.DownloadPdf') }}
        <apartment-download-icon />
      </a>

    </div>
  </div>
</template>