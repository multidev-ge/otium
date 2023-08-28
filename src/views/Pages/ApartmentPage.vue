<script setup>
import mainLayout from "@/layouts/mainLayout.vue";
import ContactRightArrowIcon from "@/assets/icons/Contact/ContactRightArrowIcon.vue";

import ApartmentPlan from "@/components/Apartment/ApartmentPlan.vue";
import ApartmentDownloadIcon from "@/assets/icons/Apartment/ApartmentDownloadIcon.vue";
</script>

<template>
  <mainLayout>
    <div class="container mx-auto flex flex-col px-4 gap-y-5">
      <router-link :to="{name: 'Floor'}"
                   class="flex items-center gap-x-1.5 px-3 py-6 rounded-2xl font-medium leading-8">
        <contact-right-arrow-icon class="rotate-180" stroke="black"/>
        Back to floor
      </router-link>
      <div class="flex relative">
        <svg class="absolute bottom-0 -z-10" xmlns="http://www.w3.org/2000/svg" width="448" height="315"
             viewBox="0 0 448 315" fill="none">
          <path d="M223.988 159.732L448 315V155.291L223.988 0L0 155.291V315L223.988 159.732Z" fill="#0A0A0A"
                fill-opacity="0.03"/>
        </svg>
        <div class="flex flex-col gap-y-7">
          <h1 class="text-3.5xl xl:text-4.5xl font-medium whitespace-nowrap" v-text="'Apartment name'"/>
          <div class="flex flex-col gap-y-1.5">
            <h3 class="text-xl xl:text-xl font-medium leading-8" v-text="'Floor'"/>
            <select
                class="font-medium leading-6 py-3 px-4 focus:outline-0 rounded-md border border-black border-opacity-40">
              <option value="10">10th</option>
              <option value="9">9th</option>
              <option value="8">8th (sold)</option>
              <option value="7">7th</option>
              <option value="6" selected>6th</option>
              <option value="5">5th</option>
              <option value="4">4th</option>
              <option value="3">3rd</option>
              <option value="2">2nd</option>
              <option value="1">1st</option>
            </select>
          </div>
          <div class="flex xl:flex-col gap-x-7 xl:gap-y-7">
            <div class="flex flex-col gap-y-1.5">
              <span class="font-medium leading-6 opacity-40" v-text="'Area, m2'"/>
              <p class="text-xl font-medium leading-8" v-text="'120 m2'"/>
            </div>
            <div class="flex flex-col gap-y-1.5">
              <span class="font-medium leading-6 opacity-40" v-text="'Price'"/>
              <p class="text-4.5xl font-bold text-[#7B9F89]" v-text="'$ 80 000'"/>
            </div>
          </div>
          <div class="flex flex-col gap-y-5 mt-28">
            <router-link :to="{name: 'Contact'}"
                         class="xl:w-fit bg-[#883F7C] flex items-center gap-x-1.5 px-7 py-3 rounded-2xl text-[#FFFAFA] font-medium leading-6">
              Request a Call
              <contact-right-arrow-icon/>
            </router-link>
            <a href="#"
               class="xl:w-fit bg-[#F0EEEC] flex items-center gap-x-1.5 px-6 py-3 rounded-2xl font-medium leading-6">
              Download PDF
              <ApartmentDownloadIcon/>
            </a>
          </div>
        </div>
        <ApartmentPlan/>
      </div>
      <!--      <apartment-mortgage-calculator/>-->
    </div>
  </mainLayout>
</template>