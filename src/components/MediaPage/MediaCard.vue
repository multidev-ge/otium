<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="w-full">
    <div class="h-44 w-full rounded-lg mb-7">
      <img alt="media img" :src="data.image" class="rounded-lg w-full h-full object-cover">
    </div>
    <p class="text-lg font-medium text-[#626262] mb-2">
      {{ data.category }}, {{ data.date }}
    </p>
    <div class="h-28 text-3xl font-medium text-[#000] truncate-last-line">
      {{ data.title }}
    </div>
  </div>
</template>