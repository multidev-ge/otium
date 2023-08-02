<script setup>
import useInfo from "@/composables/contact/useInfo";

const info = useInfo();
</script>

<template>
  <div class="flex justify-between">
    <div v-for="(item, index) in info" :key="index" class="flex items-center space-x-6">
      <div class="bg-[#F2F2F2] p-4 rounded-xl">
        <component :is="item.icon"/>
      </div>
      <div>
        <span v-text="item.label" class="text-lg font-medium leading-8 opacity-60"/>
        <p v-text="item.text" class="text-2xl font-medium"/>
      </div>
    </div>
  </div>
</template>
