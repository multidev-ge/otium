<script setup>
import ContactInfo from "@/components/ContactInfo.vue";
import ContactForm from "@/components/ContactForm.vue";
import ContactMap from "@/components/ContactMap.vue";
</script>

<template>
  <div class="max-w-7xl mt-20 mb-44 mx-auto space-y-14">
    <h1 class="text-8xl font-medium leading-normal">Contact</h1>
    <ContactInfo/>
    <div class="grid grid-cols-2 gap-36">
      <ContactForm/>
      <ContactMap/>
    </div>
  </div>
</template>
