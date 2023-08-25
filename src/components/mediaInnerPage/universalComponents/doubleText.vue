<script setup>
const props = defineProps({
  text:String,
})
</script>
<template>

  <div class="  flex-col md:text-2xl text-lg font-medium gap-10 w-full text-[#00000099]">
    <p class="w-full  ">{{props.text}}</p>
  </div>
</template>