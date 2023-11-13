<script setup>
defineProps(['content'])
</script>
<template>
    <div class="lg:flex lg:gap-8 pb-7 md:pb-12 w-full">
    <div class="bg-[#D9D9D9] w-full h-[186px] md:h-[464px] xl:w-9/12 mb-7 rounded-lg">
        <img class="object-cover w-full h-[186px] md:h-[464px] mb-7 rounded-lg" :src="`https://dashboard.otium.ge/uploads/${content.images[0]}`">
    </div>
    <div class="bg-[#D9D9D9] w-full md:w-3/5 xl:w-3/12 h-[384px] md:h-[464px] rounded-lg ">
        <img class="object-cover w-full h-[384px] md:h-[464px] rounded-lg" :src="`https://dashboard.otium.ge/uploads/${content.images[1]}`">
    </div>
  </div>
</template>