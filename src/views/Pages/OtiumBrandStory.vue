<script setup>
import mainLayout from "@/layouts/mainLayout.vue";
import Section1 from "../../components/OtiumBrandStoryFile/Section1.vue";
import Section2 from "../../components/OtiumBrandStoryFile/Section2.vue";
import Carousel from "../../components/OtiumBrandStoryFile/Carousel.vue"
import Section3Vue from "../../components/OtiumBrandStoryFile/Section3.vue";
</script>
<template>
  <mainLayout>
    <div class=" pt-24">
      <Section1 />
      <Section2 />
      <Carousel />
      <Section3Vue />
    </div>
  </mainLayout>
</template>
