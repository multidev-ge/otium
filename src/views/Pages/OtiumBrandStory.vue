<script setup>
import mainLayout from "@/layouts/mainLayout.vue";
import usePages from "@/composables/usePages"
const { getPage, blocks, components } = usePages()
getPage()
</script>
<template>
  <mainLayout>
    <component v-if="blocks.length" v-for="block in blocks" :is="components[block.type]" :content="block.data" />
  </mainLayout>
</template>
