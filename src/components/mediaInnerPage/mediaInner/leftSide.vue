<script setup>
import mediaInner from "@/composables/mediaInner";
import DoubleText from "@/components/mediaInnerPage/universalComponents/doubleText.vue";
import SplidePart from "@/components/mediaInnerPage/mediaInner/splidePart.vue";
const {currentPageInfo} = mediaInner()

</script>

<template>
    <section class="w-3/5	">
      <div class="flex  gap-5 flex-col">
        <img class="rounded-lg" :src="currentPageInfo.images[0]" alt="">
        <p class="text-[#00000099] font-medium text-xl">{{currentPageInfo.mainPart.type}} // {{currentPageInfo.mainPart.date}}</p>
        <div class="flex  flex-col gap-10">
          <p class="font-medium text-6.5xl leading-6.5xl ">{{currentPageInfo.mainPart.title}}</p>
          <DoubleText :text2="currentPageInfo.mainPart.text2" :text1="currentPageInfo.mainPart.text1"/>
        </div>
        <div class="flex flex-col gap-10">
          <SplidePart class="mb-5"/>
          <DoubleText :text2="currentPageInfo.mainPart.text4" :text1="currentPageInfo.mainPart.text3"/>
        </div>
        <div class="flex flex-col gap-10">
          <p class="font-medium text-4xl ">{{currentPageInfo.secondPart.title}}</p>
          <DoubleText :text2="currentPageInfo.secondPart.text2" :text1="currentPageInfo.secondPart.text1"/>
        </div>
      </div>
    </section>
</template>
