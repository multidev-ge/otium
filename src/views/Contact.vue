<script setup>
import {ref} from "vue";

const data = ref("Contact");
</script>

<template>
  <p v-text="data"/>
</template>
