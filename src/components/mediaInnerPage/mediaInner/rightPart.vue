<script setup>
import mediaInner from "@/composables/forMediaInner/mediaInner";
defineProps(['content'])
const {similarNews} = mediaInner()
</script>

<template>
  <section class="h-fit flex flex-col gap-8 md:w-28/100 bg-[#F2F2F2] rounded-lg py-8 px-6 font-medium text-3xl">
      <p class="font-medium text-3xl">Similar news</p>
      <div :class="['flex flex-col gap-5   border-[#D9D9D9]', index!==content.length-1 ? 'border-b' : '']" v-for="(news, index) in content">
          <img class=" h-40  rounded-lg" :src="news.image_url" alt="">
          <div class="flex gap-2 flex-col ">
              <p class="text-lg text-[#00000099]">{{news?.category?.title}} // {{news?.date}}</p>
              <p class="text-2xl pb-5 leading-9">{{news?.description}}</p>
          </div>
      </div>
  </section>
</template>
