<script setup>
import useNavigation from "@/composables/mediaInner";
import DoubleText from "@/assets/components/universalComponents/doubleText.vue";
import SplidePart from "@/assets/components/mediaInner/splidePart.vue";
const {currentPageInfo} = useNavigation()

</script>

<template>
    <section class="border	max-w-screen-lg border-r-amber-400">
      <div class="flex  gap-10 flex-col">
        <img class="rounded-lg" :src="currentPageInfo.images[0]" alt="">
        <p class="text-[#00000099] font-medium text-xl">{{currentPageInfo.mainPart.type}} // {{currentPageInfo.mainPart.date}}</p>
        <div class="flex  flex-col gap-10">
          <p class="font-medium text-7xl   ">{{currentPageInfo.mainPart.title}}</p>
          <DoubleText :text2="currentPageInfo.mainPart.text2" :text1="currentPageInfo.mainPart.text1"/>
        </div>
        <div class="flex flex-col gap-10">
          <SplidePart/>
          <DoubleText :text2="currentPageInfo.mainPart.text4" :text1="currentPageInfo.mainPart.text3"/>
        </div>
        <div class="flex flex-col gap-10">
          <p class="font-medium text-4xl ">{{currentPageInfo.secondPart.title}}</p>
          <DoubleText :text2="currentPageInfo.secondPart.text2" :text1="currentPageInfo.secondPart.text1"/>
        </div>
      </div>
    </section>
</template>
