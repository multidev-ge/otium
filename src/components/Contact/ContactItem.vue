<script setup>
const {data} = defineProps({
  data: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="bg-[#F2F2F2] p-4 rounded-xl">
    <component :is="data.icon"/>
  </div>
  <div>
    <span v-text="data.label" class="text-lg font-medium leading-8 opacity-60"/>
    <p v-text="data.text" class="text-2xl font-medium"/>
  </div>
</template>
