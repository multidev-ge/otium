<script setup>
defineProps(['content'])
</script>
<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mb-16">
    <div class="pb-7 xl:pb-0" v-for="item in content?.member">
      <div class="rounded-xl w-full h-auto ">
        <img class="rounded-xl object-cover" :src="`https://dashboard.otium.ge/uploads/${item?.image}`"
        alt="Slide Image" />
      </div>
      <h2 class="pt-2 font-ppNeueMontrealMedium text-2xl grid justify-start font-medium text-[#000000]">
        {{ item?.fullname }}
      </h2>
      <p class="pt-1 xl:pt-2 text-[22px] font-ppNeueMontrealMedium text-[#00000099] grid justify-start">
        {{ item?.position }}
      </p>
    </div>
  </div>
</template>