<script setup>
defineProps(['content'])
</script>
<template>
    <p class="font-medium md:text-6.5xl text-2xl leading-6.5xl">{{ content?.title }}</p>
    <div v-html="content?.description" class="text-xl leading-6.5xl text-[#00000099] text-opacity-60"></div>
</template>