<script setup>
import mainLayout from "@/layouts/mainLayout.vue";
import Section1 from "../../components/OtiumBrandStoryFile/Section1.vue";
import Section2 from "../../components/OtiumBrandStoryFile/Section2.vue";
import Section3Vue from "../../components/OtiumBrandStoryFile/Section3.vue";
import Carousel from "../../components/OtiumBrandStoryFile/carousel.vue"
</script>
<template>
  <mainLayout>
    <div class="container mx-auto ">
      <Section1 />
      <Section2 />
      <Carousel />
      <Section3Vue />
    </div>
  </mainLayout>
</template>
