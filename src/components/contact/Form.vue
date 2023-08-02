<script setup>
import useForm from "@/composables/contact/useForm";

const {name, phoneNumber, message, label, RightArrow} = useForm();
</script>

<template>
  <form @submit.prevent="" class="space-y-7 font-medium">
    <input v-model="name" name="name" type="text" placeholder="Name"
           class="block w-full pl-5 py-3 border-2 border-opacity-30 rounded-md" required>
    <input v-model="phoneNumber" name="phone-number" type="tel" placeholder="Phone Number"
           class="block w-full pl-5 py-3 border-2 border-opacity-30 rounded-md" required>
    <textarea v-model="message" name="message" placeholder="Message"
              class="h-36 block w-full pl-5 pt-3 leading-6 border-2 border-opacity-30 resize-none rounded-md" required/>
    <button type="submit"
            class="float-right w-36 flex items-center justify-center bg-black text-white px-6 py-3 rounded-2xl gap-x-1.5"
    >
      {{ label }}
      <right-arrow/>
    </button>
  </form>
</template>