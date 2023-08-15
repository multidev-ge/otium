<script setup>
import useContact from "@/composables/useContact";
import ContactItem from "@/components/Contact/ContactItem.vue";

const {contactInfo} = useContact;
</script>

<template>
  <div class="flex justify-between">
    <div v-for="(item, index) in contactInfo" :key="index" class="flex items-center space-x-6">
      <ContactItem :data="item"/>
    </div>
  </div>
</template>
