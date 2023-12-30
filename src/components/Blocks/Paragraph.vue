<script setup>
defineProps(['content'])
</script>
<template>
    <div class="font-medium md:text-6.5xl text-2xl leading-6.5xl" v-html="content?.description"></div>
</template>