<script setup>
import useContact from "@/composables/useContact";
import ContactItem from "@/components/Contact/ContactItem.vue";

const {contactInfo} = useContact;
</script>

<template>
  <div class="flex justify-between gap-x-9 max-lg:flex-col max-lg:gap-y-9">
    <div v-for="(item, index) in contactInfo" :key="index" class="flex items-center gap-x-4 lg:gap-x-6 ">
      <ContactItem :data="item"/>
    </div>
  </div>
</template>
