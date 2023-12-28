<script setup>
import MainLayout from "@/layouts/mainLayout.vue"
import ContactForm from "@/components/Contact/ContactForm.vue"
import ContactMap from "@/components/Contact/ContactMap.vue"
import usePages from "@/composables/usePages"
const { getPage, title, blocks, components } = usePages()
getPage()
</script>
<template>
  <MainLayout>
    <div class="flex flex-col space-y-8 lg:space-y-16">
      <h1 class="text-5xl font-medium leading-[57.6px] md:text-[100px] md:leading-[120px]">{{ title }}</h1>
      <!-- dynamic components according to api -->
      <component v-if="blocks.length" v-for="block in blocks" :is="components[block.type]" :content="block.data" />
      <div class="flex max-lg:flex-col items-center max-lg:space-y-20 lg:space-x-36">
        <ContactForm class="w-full" />
        <ContactMap class="w-full max-md:h-[198px] md:max-lg:h-80 lg:h-[370px]" />
      </div>
    </div>
  </MainLayout>
</template>
