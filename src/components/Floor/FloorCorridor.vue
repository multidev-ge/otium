<script setup>
import useFloor from "@/composables/useFloor";

const {corridor} = useFloor();
</script>

<template>
  <img :src="corridor" alt="plan corridor" class="absolute">
</template>
