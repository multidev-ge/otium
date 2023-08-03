<script setup>
import useNavigation from "@/composables/mediaInner";
const {similarNews} = useNavigation()
</script>

<template>
  <section class="h-fit flex flex-col gap-5 max-w-lg bg-[#F2F2F2] rounded-lg py-5 px-10  font-medium text-3xl">
      <p >Similar news</p>
      <div class="flex flex-col   gap-5 border-b pb-5  border-[#D9D9D9]" v-for="news in similarNews">
          <img class=" h-40  rounded-lg" :src="news.img" alt="">
          <div class="flex  gap-5 flex-col ">
              <p class="text-lg text-[#00000099]">{{news.type}} // {{news.date}}</p>
              <p class="text-2xl ">{{news.text}}</p>
          </div>
      </div>

  </section>

</template>
