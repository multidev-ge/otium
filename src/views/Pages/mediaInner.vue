<script setup>
import LeftSide from "@/components/mediaInnerPage/mediaInner/leftSide.vue";
import RightPart from "@/components/mediaInnerPage/mediaInner/rightPart.vue";
import MainLayout from "@/layouts/mainLayout.vue";
</script>

<template>
  <main-layout>
    <div class="flex md:flex-row w-full gap-[78px] flex-col justify-between">
      <left-side/>
      <right-part/>
    </div>
  </main-layout>
</template>
