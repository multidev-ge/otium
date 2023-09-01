<script setup>
const {data} = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="bg-[#F2F2F2] p-3 lg:p-4 rounded-xl">
    <component class="max-lg:w-6 max-lg:h-6" :is="data.icon"/>
  </div>

  <div>
    <span v-text="data.label" class="text-base lg:text-lg font-medium lg:leading-8 opacity-60"/>
    <p v-text="data.text" class="text-lg lg:text-2xl font-medium"/>
  </div>
</template>
