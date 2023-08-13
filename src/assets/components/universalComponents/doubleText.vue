<script setup>
const props = defineProps({
  text1:String,
  text2:String,
})
</script>
<template>
  <div class="flex text-2xl font-medium gap-10 w-full text-[#00000099]">
    <p>{{props.text1}}</p>
    <p >{{props.text2}}</p>
  </div>
</template>