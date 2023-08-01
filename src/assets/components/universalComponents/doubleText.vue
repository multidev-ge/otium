<script setup>
const props = defineProps({
  text1:String,
  text2:String,
})
</script>
<template>
  <div class="flex gap-10 text-[#00000099]">
    <p class="w-5/12		font-medium text-2xl	">{{props.text1}}</p>
    <p class="w-5/12		font-medium text-2xl	">{{props.text2}}</p>
  </div>
</template>