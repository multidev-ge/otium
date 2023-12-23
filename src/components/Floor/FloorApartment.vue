<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
const { apartment } = defineProps({ apartment: { type: Object, required: true } })
const { t } = useI18n({ useScope: 'global' })
onMounted(() => null)
// const { width, height, points, top, left } = apartment
</script>

<template>
  <router-link :to="{ name: 'Apartment', params: { id: apartment?.id } }">
    <div class="absolute flex justify-center items-center opacity-80 cursor-pointer hover:!bg-[#7B9F89] apartment"
      :class="{ 'sold-apartment': apartment?.isSold }" :style="{
        width: apartment?.width,
        height: apartment?.height,
        clipPath: `polygon(${apartment?.points})`,
        backgroundColor: apartment?.isSold ? 'white' : 'transparent',
        top: apartment?.top,
        left: apartment?.left
      }">
      <span v-if="apartment?.sold"
        class="max-md:hidden block lg:max-3xl:text-[20px] 3xl:text-xl font-bold leading-8 !opacity-100 text-[#E24A4A] rounded-2xl border-2 border-[#E24A4A] md:max-lg:px-2 lg:max-2xl:px-4 2xl:px-6 md:max-lg:py-1 lg:max-2xl:py-2 2xl:py-3 -rotate-12 sold">
        {{ t("statuses.sold") }}</span>

      <div class="hidden max-md:!hidden !opacity-100 details md:max-lg:text-xs lg:max-xl:text-sm">
        <p class="text-white font-medium leading-7"><span class="opacity-70">{{ t("apartment.size") }}:</span>
          {{ t('dimentions.sqmeter', { amount: apartment?.area }) }}
        </p>

        <p class="text-white font-medium leading-7"><span class="opacity-70">{{ t("apartment.bedroom") }}:</span> 
        {{  t('dimentions.sqmeter', { amount: apartment?.for_living }) }} </p>

        <p class="text-white font-medium leading-7"><span class="opacity-70">{{ t("apartment.price") }}:</span> $
          {{ apartment?.details?.price.toLocaleString('en-US', { useGrouping: true }).replace(/,/g, ' ') }}</p>
      </div>
    </div>
  </router-link>
</template>


<style scoped>
.apartment:hover .details {
  display: block;
}


.apartment:hover .sold {
  display: none;
}

@media not all and (min-width: 768px) {
  .sold-apartment {
    background-color: #E35553 !important;
    opacity: 0.7 !important;
  }
}
</style>