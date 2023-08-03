<script setup>
const props = defineProps({
  text1:String,
  text2:String,
})
</script>
<template>
  <div class="flex gap-10 w-10/12 text-[#00000099]">
    <p class="	font-medium text-2xl	">{{props.text1}}</p>
    <p class="	font-medium text-2xl	">{{props.text2}}</p>
  </div>
</template>