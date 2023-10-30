<script setup>
import ContactRightArrowIcon from "@/assets/icons/Contact/ContactRightArrowIcon.vue";
import BOGLogo from "../../assets/logos/apartment/BOGLogo.png";
import TBCLogo from "../../assets/logos/apartment/TBCLogo.png";
</script>

<template>
  <div class="flex max-xl:flex-col xl:grid xl:grid-cols-2 xl:grid-rows-2 bg-black rounded-xl">
    <div class="order-1 flex flex-col gap-y-4 p-4 xl:p-16">
      <h2 class="text-white font-medium text-[32px] leading-[38.4px] lg:text-[40px] lg:leading-normal">Calculator</h2>
      <p class="text-white text-xl font-medium leading-8 opacity-60">
        Fusce volutpat lectus nisl consectetur finibus scelerisque augue varius eros sapien diam, euismod pretium
        id, volutpat tortor. In vulputate lorem quis
      </p>
    </div>

    <div class="order-3 p-4 xl:p-16 flex max-xl:flex-col max-xl:gap-y-5 items-center gap-x-6 max-xl:mt-7">
      <a class="max-sm:w-full cursor-pointer transition duration-100 ease-in-out hover:brightness-90" target="_blank"
         href="https://bankofgeorgia.ge/ka/retail/loans/mortgage/mortgage-application">
        <div class="xl:relative flex items-center py-4 xl:py-8 pl-10 xl:pl-6 pr-20 xl:pr-12 bg-[#FCE1D3] rounded-xl">
          <div class="flex gap-x-4 items-center">
            <img :src="BOGLogo" alt="BOG logo">
            <span class="text-xl font-medium leading-8 whitespace-nowrap">Start applying</span>
          </div>
          <contact-right-arrow-icon stroke="black" class="-rotate-45 max-xl:ml-6 xl:absolute xl:top-3 xl:right-3"/>
        </div>
      </a>

      <a class="max-sm:w-full cursor-pointer transition duration-100 ease-in-out hover:brightness-90" target="_blank"
         href="https://tbcmortgage.ge/?utm_source=google&utm_medium=search_keyword&utm_campaign=tbcmortgage_general&utm_content=mainkeywords&gad=1&gclid=Cj0KCQjwi7GnBhDXARIsAFLvH4mgkdxtROzPQkwxdd07hEBVsQJBPCsAL5xW9bHiCyBuNCK9gf8j-9UaAuc1EALw_wcB">
        <div class="xl:relative flex  items-center py-4 xl:py-8 pl-10 xl:pl-6 pr-20 xl:pr-12 bg-[#E5F7FD] rounded-xl">
          <div class="flex gap-x-4 items-center">
            <img :src="TBCLogo" alt="TBC logo">
            <span class="text-xl font-medium leading-8 whitespace-nowrap">Start applying</span>
          </div>
          <contact-right-arrow-icon stroke="black" class="-rotate-45 max-xl:ml-6 xl:absolute xl:top-3 xl:right-3"/>
        </div>
      </a>
    </div>

    <div class="order-2 xl:row-span-2 bg-white rounded-xl m-4 p-12 flex flex-col gap-y-12">
      <div class="flex flex-col gap-y-4">
        <h3 class="text-2xl font-medium leading-8">
          Calculate mortgage
        </h3>
        <p class="text-xl font-medium leading-8 opacity-40">
          This numbers are bulk, in order to get exact numbers please visit on of the bank’s official website and apply
          there
        </p>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 text-xl leading-8 font-medium overflow-hidden">
        <div class="pl-6 pt-4 pb-5 border border-opacity-20 rounded-md whitespace-nowrap">
          <span class="block text-sm font-medium !leading-6 opacity-40">Total property price</span>
          $<input type="text" value="80 000" class="border-0 outline-0">
        </div>

        <div class="pl-6 pt-4 pb-5 border border-opacity-20 rounded-md whitespace-nowrap">
          <label for="paymentYears" class="block text-sm font-medium !leading-6 opacity-40">Split payment in
            years</label>
          <select id="paymentYears" class="border-0 outline-0">
            <option v-for="years in 9" :value="11 + years" v-text="11 + years"/>
          </select>
        </div>

        <div class="pl-6 pt-4 pb-5 border border-opacity-20 rounded-md whitespace-nowrap">
          <span class="block text-sm font-medium !leading-6 opacity-40">Percentage</span>
          %<input type="text" value="6" class="border-0 outline-0">
        </div>

        <div class="pl-6 pt-4 pb-5 border border-opacity-20 rounded-md  whitespace-nowrap">
          <span class="block text-sm font-medium !leading-6 opacity-40">Pre payment</span>
          $<input type="text" value="0" class="border-0 outline-0">
        </div>
      </div>

      <div class="flex max-lg:flex-col lg:items-center justify-between">
        <p class="text-xl font-medium leading-8 opacity-40">Your monthly payment</p>
        <p class="text-2xl font-medium leading-8">$540</p>
      </div>
    </div>
  </div>
</template>