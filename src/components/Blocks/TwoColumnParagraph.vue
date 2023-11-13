<script setup>
defineProps(['content'])
</script>
<template>
    <div class="xl:flex xl:gap-8">
    <p class="xl:w-full pb-8 xl:pb-0 text-[22px] font-ppNeueMontrealMedium leading-8 pr-10 text-[#00000099]">
      {{ content?.columns[0]?.column }}
    </p>
    <p class="xl:w-full text-[22px] font-ppNeueMontrealMedium leading-8 text-[#00000099] ">
        {{ content?.columns[1]?.column }}
    </p>
  </div>
</template>