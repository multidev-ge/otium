<script setup>
import FiltersPart from "@/components/apartmentFinderPage/filtersPart.vue"
import RightPart from "@/components/apartmentFinderPage/rightPart.vue"
import MainLayout from "../../layouts/mainLayout.vue"
</script>

<template>
<main-layout>
  <div class="flex md:flex-row flex-col justify-between">
    <FiltersPart/>
    <RightPart/>
  </div>
</main-layout>
</template>
