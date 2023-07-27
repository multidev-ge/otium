<script setup>
import mainLayout from "@/layouts/mainLayout.vue";
import Section1 from "../../components/OtiumBrandStoryFile/Section1.vue";
import Section2 from "../../components/OtiumBrandStoryFile/Section2.vue";
import Carousel from "../../components/OtiumBrandStoryFile/Carousel.vue"
</script>
<template>
  <mainLayout>
    <div class="px-16 pt-24">
      <Section1 />
      <Section2 />
      <Carousel />
    </div>
  </mainLayout>
</template>
