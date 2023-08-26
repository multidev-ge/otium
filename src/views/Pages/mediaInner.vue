<script setup>
import LeftSide from "@/components/mediaInnerPage/mediaInner/leftSide.vue";
import RightPart from "@/components/mediaInnerPage/mediaInner/rightPart.vue";
import MainLayout from "@/layouts/mainLayout.vue";
</script>

<template>
  <main-layout>
    <div class="flex container md:flex-row w-full flex-col mx-auto justify-between">
      <left-side/>
      <right-part/>
    </div>
  </main-layout>
</template>
