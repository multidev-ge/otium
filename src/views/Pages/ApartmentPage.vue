<script setup>
import mainLayout from "@/layouts/mainLayout.vue";
import ContactRightArrowIcon from "@/assets/icons/Contact/ContactRightArrowIcon.vue";
import ApartmentPlan from "@/components/Apartment/ApartmentPlan.vue";
import ApartmentDetails from "@/components/Apartment/ApartmentDetails.vue";
import ApartmentMortgageCalculator from "@/components/Apartment/ApartmentMortgageCalculator.vue";
</script>

<template>
  <mainLayout>
    <div class="container mx-auto flex flex-col px-4 gap-y-5">
      <router-link :to="{name: 'Floor'}"
                   class="flex items-center gap-x-1.5 px-3 py-6 rounded-2xl font-medium leading-8">
        <ContactRightArrowIcon class="rotate-180" stroke="black"/>
        Back to floor
      </router-link>
      <div class="flex relative">
        <ApartmentDetails/>
        <ApartmentPlan/>
      </div>
      <ApartmentMortgageCalculator/>
    </div>
  </mainLayout>
</template>