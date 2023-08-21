<script setup>
const {stroke} = defineProps({
  stroke: {
    type: String,
    default: "white"
  }
})
</script>

<template>
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.90039 8L14.1004 8" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.5 2.40039L14.1 8.00039L8.5 13.6004" :stroke="stroke" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round"/>
  </svg>
</template>