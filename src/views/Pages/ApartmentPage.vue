<script setup>
import mainLayout from "@/layouts/mainLayout.vue";
import ContactRightArrowIcon from "@/assets/icons/Contact/ContactRightArrowIcon.vue";
import MortgageCalculator from "@/components/Apartment/MortgageCalculator.vue";
import Apartment from "@/components/Apartment/Apartment.vue";
</script>

<template>
  <mainLayout>
    <!-- Apartment Page -->
    <div
        class="container flex flex-col max-md:px-4 md:mx-auto mt-1 sm:max-2xl:mt-2 2xl:mt-4 mb-56 sm:max-2xl:mb-48 2xl:mb-40">
      <!-- Back To Floor -->
      <router-link class="flex items-center gap-x-1.5 px-3 py-6 rounded-2xl font-medium leading-8"
                   :to="{name: 'Floor'}">
        <ContactRightArrowIcon class="rotate-180" stroke="black"/>
        Back to floor
      </router-link>

      <Apartment class="mt-7"/>

      <MortgageCalculator class="mt-28"/>

      <!--      <ApartmentFinder class="mt-40" />-->
    </div>
  </mainLayout>
</template>