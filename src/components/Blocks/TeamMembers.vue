<script setup>
defineProps(['content'])
</script>
<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
    <div class="pb-7 xl:pb-0" v-for="item in content?.member">
      <img class="rounded-xl w-[304px] h-[303px] object-cover" :src="`https://dashboard.otium.ge/uploads/${item?.image}`"
        alt="Slide Image" />
      <h2 class="pt-2 font-ppNeueMontrealMedium text-2xl grid justify-start font-medium">
        {{ item?.fullname }}
      </h2>
      <p class="pt-1 xl:pt-2 text-[22px] font-ppNeueMontrealMedium text-[#00000099] grid justify-start">
        {{ item?.position }}
      </p>
    </div>
  </div>
</template>