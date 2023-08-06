<script setup>
import useNavigation from "@/composables/mediaInner";
const {similarNews} = useNavigation()
</script>

<template>
  <section class="h-fit flex flex-col gap-8 w-28/100	bg-[#F2F2F2] rounded-lg py-8 px-8  font-medium text-3xl">
      <p class="font-medium text-3xl">Similar news</p>
      <div :class="['flex flex-col gap-5   border-[#D9D9D9]', index!==similarNews.length-1 ? 'border-b' : '']" v-for="(news,index) in similarNews">
          <img class=" h-40  rounded-lg" :src="news.img" alt="">
          <div class="flex gap-5 flex-col ">
              <p class="text-lg text-[#00000099]">{{news.type}} // {{news.date}}</p>
              <p class="text-2xl pb-5 leading-9">{{news.text}}</p>
          </div>
      </div>

  </section>

</template>
