<script setup>
import ImageSlider from "@/components/Sliders/ImageSlider.vue"
defineProps(["content"])
</script>
<template>
    <ImageSlider :images="content?.slides" />
</template>