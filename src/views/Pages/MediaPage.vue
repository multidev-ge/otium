<script setup>
import MainLayout from "@/layouts/mainLayout.vue";
import {computed, ref} from "vue";

const data = [
  {
    name: '1',
    category: 'News'
  },
  {
    name: '2',
    category: 'Photo Gallery'
  },
  {
    name: '3',
    category: 'News'
  },
  {
    name: '4',
    category: 'Photo Gallery'
  },
  {
    name: '5',
    category: 'Video Gallery'
  },
  {
    name: '6',
    category: 'Video Gallery'
  },
  {
    name: '7',
    category: 'Photo Gallery'
  },
  {
    name: '8',
    category: 'News'
  },
  {
    name: '9',
    category: 'Video Gallery'
  },
]

const categories = [
    'All',
    'News',
    'Photo Gallery',
    'Video Gallery'
]

function setCategory(cat){
  selectedCategory.value = cat
}
const selectedCategory = ref('All')

const filteredData = computed(() => {
  if (selectedCategory.value === 'All') {
    return data
  }
  return data.filter(e => e.category === selectedCategory.value)
})


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
          {{category}}
        </button>
      </div>

      <div class="grid grid-cols-3 gap-8">
        <div v-for="element in filteredData" class="w-full">
          <div class="h-44 w-full rounded-lg bg-amber-200 mb-7"></div>
          <p class="text-lg font-medium text-[#626262]">
            News, 2 Jul,2023
          </p>
          <div class="h-28 text-3xl font-medium text-[#000] truncate-last-line">
            Embracing Minimalism: The Construction
            Industry's Path to Sustainable Design
          </div>
        </div>

      </div>
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