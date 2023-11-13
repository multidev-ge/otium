<script setup>
defineProps(['content'])
</script>
<template>
  <div class="xl:flex gap-[218px] pb-20">
    <div class="">
      <h2 class="text-2xl	text-[#000000] font-ppNeueMontrealMedium	pb-7 xl:pb-0">{{ content?.title }}
      </h2>
    </div>
    <div>
      <p class="text-[22px]  text-[#00000099]	  font-ppNeueMontrealMedium	">{{ content?.paragraph }}</p>
    </div>
  </div>
</template>