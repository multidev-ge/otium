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
          class="font-medium text-5xl sm:max-2xl:text-6.5xl 2xl:text-8xl leading-normal">
        Contact
      </h1>

      <contact-info/>

      <div class="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-y-20 lg:gap-x-36">
        <contact-form/>
        <contact-map class="h-56 sm:max-md:h-64 md:max-lg:h-80 lg:h-full"/>
      </div>
    </div>
  </main-layout>
</template>
