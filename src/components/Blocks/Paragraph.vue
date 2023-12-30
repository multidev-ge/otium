<script setup>
defineProps(['content'])
</script>
<template>
    <p class="font-medium text-2xl md:text-[40px] leading-6.5xl">{{ content?.title }}</p>
    <div v-html="content?.description" class="text-xl leading-6.5xl text-[#00000099] text-opacity-60"></div>
</template>