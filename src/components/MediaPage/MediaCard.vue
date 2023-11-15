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
    <RouterLink :to="`/media/${data.id}`">
      <div class="h-36 md:h-44 w-full rounded-lg mb-2 md:mb-7">
        <img alt="media img" :src="data.image_url" class="rounded-lg w-full h-full object-cover">
      </div>
    </RouterLink>
    <p class="text-lg font-medium text-[#626262] md:mb-2">
      {{ data.category.title }}, {{ data.date }}
    </p>

    <RouterLink :to="`/media/${data.id}`">
      <div class="h-28 text-xl md:text-3xl font-medium text-[#000] truncate-last-line">
        {{ data.title }}
      </div>
    </RouterLink>

  </div>
</template>

<style scoped>
.truncate-last-line {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>