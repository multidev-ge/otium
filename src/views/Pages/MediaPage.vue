<script setup>
import MainLayout from "@/layouts/mainLayout.vue";
import ArrowDownIcon from "@/assets/icons/MediaPage/ArrowDownIcon.vue";
import {useMedia} from "@/composables/useMedia";

const {
  categories,
  filteredData,
  selectedCategory,
  setCategory,
} = useMedia()

</script>

<template>
  <mainLayout>
    <div class="container mx-auto">
      <h1 class="mb-12 text-8xl font-medium text-[#000]">Media</h1>

      <div class="flex gap-4 mb-8">
        <button v-for="category in categories" @click="setCategory(category)"
                :class="selectedCategory === category?'bg-[#000] text-white':''"
                class="px-6 py-3 rounded-2xl text-xl font-medium transition-all duration-250
                        hover:bg-[#000] hover:text-white border border-[#000]">
          {{ category }}
        </button>
      </div>

      <div class="grid grid-cols-3 gap-8 pb-16">
        <div v-for="element in filteredData" class="w-full">
          <div class="h-44 w-full rounded-lg mb-7">
            <img alt="media img" :src="element.image" class="rounded-lg w-full h-full object-cover">
          </div>
          <p class="text-lg font-medium text-[#626262] mb-2">
            {{ element.category }}, {{ element.date }}
          </p>
          <div class="h-28 text-3xl font-medium text-[#000] truncate-last-line">
            {{ element.title }}
          </div>
        </div>
      </div>

      <button class="flex gap-1.5 items-center mx-auto px-6 py-3 bg-[#F0EEEC] font-medium text-base rounded-2xl">
        More
        <ArrowDownIcon/>
      </button>

    </div>
  </mainLayout>
</template>

<style scoped>
.truncate-last-line {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>