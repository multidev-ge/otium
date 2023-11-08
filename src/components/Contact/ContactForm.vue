<script setup>
import useContact from "@/composables/useContact"
import ContactRightArrowIcon from "@/assets/icons/Contact/ContactRightArrowIcon.vue"

const {contactFormData, submitContactForm} = useContact()
</script>

<template>
  <!-- Contact From -->
  <form @submit.prevent="submitContactForm" class="font-medium space-y-7 w-full lg:w-[528px]">
    <input v-model="contactFormData.name" name="name" type="text" placeholder="Name"
           class="block w-full rounded-md border border-opacity-30 leading-6 pt-[11px] pb-[13px] pl-[22px]" required>
    <input v-model="contactFormData.phoneNumber" name="phone-number" type="tel" placeholder="Phone Number"
           class="block w-full rounded-md border border-opacity-30 leading-6 pt-[11px] pb-[13px] pl-[22px]" required>
    <textarea v-model="contactFormData.message" name="message" placeholder="Message"
              class="block w-full resize-none rounded-md border border-opacity-30 leading-6 h-[142px] pt-[11px] pl-[22px]" required/>
    <button type="submit"
            class="max-md:!mt-[25px] w-full md:w-48 flex items-center justify-center bg-black hover:bg-[#883F7C] text-white px-6 py-3 rounded-2xl gap-x-1.5 lg:float-right transition duration-100 ease-in-out">
      Send
      <contact-right-arrow-icon/>
    </button>
  </form>
</template>