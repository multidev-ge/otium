<script setup>
import FiltersPart from "@/components/apartmentFinderPage/filtersPart.vue";
import RightPart from "@/components/apartmentFinderPage/rightPart.vue";
import MainLayout from "../../layouts/mainLayout.vue";
</script>

<template>
<main-layout>
  <div class="flex container mx-auto justify-center gap-64">
    <FiltersPart/>
    <RightPart/>
  </div>
</main-layout>
</template>
