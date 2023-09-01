<script setup>
import useContact from "@/composables/useContact"
import ContactRightArrowIcon from "@/assets/icons/Contact/ContactRightArrowIcon.vue"

const {contactFormData, submitContactForm} = useContact()
</script>

<template>
  <!-- Contact From -->
  <form @submit.prevent="submitContactForm" class="space-y-6 lg:space-y-7 font-medium">
    <input v-model="contactFormData.name" name="name" type="text" placeholder="Name"
           class="block w-full pl-5 py-3 border-2 border-opacity-30 rounded-md" required>
    <input v-model="contactFormData.phoneNumber" name="phone-number" type="tel" placeholder="Phone Number"
           class="block w-full pl-5 py-3 border-2 border-opacity-30 rounded-md" required>
    <textarea v-model="contactFormData.message" name="message" placeholder="Message"
              class="h-36 block w-full pl-5 pt-3 leading-6 border-2 border-opacity-30 resize-none rounded-md" required/>
    <button type="submit"
            class="w-full md:w-36 flex items-center justify-center bg-black text-white px-6 py-3 rounded-2xl gap-x-1.5 lg:float-right">
      Send
      <contact-right-arrow-icon/>
    </button>
  </form>
</template>