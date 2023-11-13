<script setup>
import SplidePart from "@/components/mediaInnerPage/mediaInner/splidePart.vue";
defineProps(['content'])
</script>
<template>
    <SplidePart class="mb-5" :content="content" />
</template>