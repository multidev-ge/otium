<script setup>
defineProps({
    title: String
})
</script>
<template>
    <h1 class="mb-6 pb-6">
        <span class="text-start font-medium text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            {{ title }}
        </span>
    </h1>
</template>