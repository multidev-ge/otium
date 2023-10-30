<script setup>
import ContactInfo from "@/components/Contact/ContactInfo.vue"
import ContactForm from "@/components/Contact/ContactForm.vue"
import ContactMap from "@/components/Contact/ContactMap.vue"
import MainLayout from "@/layouts/mainLayout.vue"
</script>

<template>
  <main-layout>
    <!-- Contact Page -->
    <div
        class="flex flex-col gap-y-8 lg:gap-y-16">
      <h1
          class="text-5xl font-medium leading-[57.6px] md:text-[100px] md:leading-[120px]">
        Contact
      </h1>

      <contact-info/>

      <div class="flex max-lg:flex-col items-center max-lg:gap-y-20 lg:gap-x-36">
        <contact-form/>
        <contact-map class="w-full lg:w-[640px] max-md:h-[198px] md:max-lg:h-80 lg:h-[370px]"/>
      </div>
    </div>
  </main-layout>
</template>
