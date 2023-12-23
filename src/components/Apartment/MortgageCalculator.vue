<script setup>
import ContactRightArrowIcon from "@/assets/icons/Contact/ContactRightArrowIcon.vue"
import BOGLogo from "../../assets/logos/apartment/BOGLogo.png"
import TBCLogo from "../../assets/logos/apartment/TBCLogo.png"
import axios from "../../interceptors/axios"
import { ref, computed, onMounted } from "vue"

import { useI18n } from 'vue-i18n'

const price = ref(80000)
const payments = ref(5)
const rate = ref(2)
const prepayment = ref(10000)

const { t } = useI18n({ useScope: 'global' })

const annuitet = ref('calculating ...')

const calculate = async () => {

  annuitet.value = 'calculating ...'

  setTimeout(async () => {

    const { data } = await axios.get('calculator', {
      params: {
        total_property_price: price.value,
        years: payments.value,
        percentage: rate.value,
        pre_payment: prepayment.value,
      }
    })

    annuitet.value = Math.round(data?.monthly_payment)
  }, 1000);

}

const currentYear = (new Date()).getFullYear()
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step))

const info = ref()


onMounted(async () => {
  calculate()
  // get calculator info
  info.value = await axios.get('calculator/info')

  // console.log(info.value)
})
</script>

<template>
  <div class="flex max-xl:flex-col xl:grid xl:grid-cols-2 xl:grid-rows-2 bg-black rounded-xl">
    <div class="order-1 flex flex-col gap-y-4 p-4 xl:p-16">
      <h2 class="text-white font-medium text-[32px] leading-[38.4px] lg:text-[40px] lg:leading-normal">{{ (info?.data) ?
        info.data.title : '' }}</h2>
      <p class="text-white text-xl font-medium leading-8 opacity-60">{{ (info?.data) ? info.data.description : '' }}
      </p>
    </div>

    <div class="order-3 p-4 xl:p-16 flex max-xl:flex-col max-xl:gap-y-5 items-center gap-x-6 max-xl:mt-7">
      <a class="max-sm:w-full cursor-pointer transition duration-100 ease-in-out hover:brightness-90" target="_blank"
        href="https://bankofgeorgia.ge/ka/retail/loans/mortgage/mortgage-application">
        <div class="xl:relative flex items-center py-4 xl:py-8 pl-10 xl:pl-6 pr-20 xl:pr-12 bg-[#FCE1D3] rounded-xl">
          <div class="flex gap-x-4 items-center">
            <img :src="BOGLogo" alt="BOG logo">
            <span class="text-xl font-medium leading-8 whitespace-nowrap">{{ t('calculator.startApplying') }}</span>
          </div>
          <contact-right-arrow-icon stroke="black" class="-rotate-45 max-xl:ml-6 xl:absolute xl:top-3 xl:right-3" />
        </div>
      </a>

      <a class="max-sm:w-full cursor-pointer transition duration-100 ease-in-out hover:brightness-90" target="_blank"
        href="https://tbcmortgage.ge/?utm_source=google&utm_medium=search_keyword&utm_campaign=tbcmortgage_general&utm_content=mainkeywords&gad=1&gclid=Cj0KCQjwi7GnBhDXARIsAFLvH4mgkdxtROzPQkwxdd07hEBVsQJBPCsAL5xW9bHiCyBuNCK9gf8j-9UaAuc1EALw_wcB">
        <div class="xl:relative flex  items-center py-4 xl:py-8 pl-10 xl:pl-6 pr-20 xl:pr-12 bg-[#E5F7FD] rounded-xl">
          <div class="flex gap-x-4 items-center">
            <img :src="TBCLogo" alt="TBC logo">
            <span class="text-xl font-medium leading-8 whitespace-nowrap">{{ t('calculator.startApplying') }}</span>
          </div>
          <contact-right-arrow-icon stroke="black" class="-rotate-45 max-xl:ml-6 xl:absolute xl:top-3 xl:right-3" />
        </div>
      </a>
    </div>

    <div class="order-2 xl:row-span-2 bg-white rounded-xl m-4 p-12 flex flex-col gap-y-12">
      <div class="flex flex-col gap-y-4">
        <h3 class="text-2xl font-medium leading-8">
          {{ (info?.data) ? info.data.subtitle : '' }}
        </h3>
        <p class="text-xl font-medium leading-8 opacity-40">
          {{ (info?.data) ? info.data.subdescription : '' }}
        </p>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 text-xl leading-8 font-medium overflow-hidden">
        <div class="pl-6 pt-4 pb-5 border border-opacity-20 rounded-md whitespace-nowrap">
          <span class="block text-sm font-medium !leading-6 opacity-40">{{ t('calculator.total') }}</span>
          $<input type="text" class="border-0 outline-0" v-model="price" @change="calculate">
        </div>

        <div class="pl-6 pt-4 pb-5 border border-opacity-20 rounded-md whitespace-nowrap">
          <label for="paymentYears" class="block text-sm font-medium !leading-6 opacity-40">{{ t('calculator.years')
          }}</label>
          <select id="paymentYears" class="border-0 outline-0 bg-white" v-model="payments" @change="calculate">
            <option v-for="year in range(1, 1 + 36, +1)" :value="year" v-text="year" />
          </select>
        </div>

        <div class="pl-6 pt-4 pb-5 border border-opacity-20 rounded-md whitespace-nowrap">
          <span class="block text-sm font-medium !leading-6 opacity-40">{{ t('calculator.percentage') }}</span>
          %<input type="text" class="border-0 outline-0" v-model="rate" @change="calculate">
        </div>

        <div class="pl-6 pt-4 pb-5 border border-opacity-20 rounded-md  whitespace-nowrap">
          <span class="block text-sm font-medium !leading-6 opacity-40">{{ t('calculator.prePayment') }}</span>
          $<input type="text" class="border-0 outline-0" v-model="prepayment" @change="calculate">
        </div>
      </div>

      <div class="flex max-lg:flex-col lg:items-center justify-between">
        <p class="text-xl font-medium leading-8 opacity-40">{{ t('calculator.yourMonthlyPayment') }}</p>
        <p class="text-2xl font-medium leading-8">${{ annuitet }}</p>
      </div>
    </div>
  </div>
</template>