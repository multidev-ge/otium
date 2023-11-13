<script setup>
defineProps(['content'])
</script>
<template>
    <p class="font-medium md:text-6.5xl text-2xl leading-6.5xl">{{ content?.title }}</p>
</template>