<script setup>
import ContactInfo from "@/components/Contact/ContactInfo.vue";
import ContactForm from "@/components/Contact/ContactForm.vue";
import ContactMap from "@/components/Contact/ContactMap.vue";
import MainLayout from "@/layouts/mainLayout.vue";
</script>

<template>
  <mainLayout>
    <div
        class="max-w-7xl mt-7 sm:max-2xl:mt-14 2xl:mt-20 mb-36 sm:max-2xl:mb-40 2xl:mb-44 mx-4 sm:max-2xl:mx-10 2xl:mx-auto space-y-7 sm:max-2xl:space-y-11 2xl:space-y-16">
      <h1 class="text-5xl sm:max-2xl:text-6.5xl 2xl:text-8xl font-medium leading-normal">Contact</h1>
      <ContactInfo/>
      <div class="grid max-lg:grid-rows-2 lg:grid-cols-2 max-lg:gap-y-20 lg:gap-x-36">
        <ContactForm/>
        <ContactMap/>
      </div>
    </div>
    </mainLayout>
</template>
