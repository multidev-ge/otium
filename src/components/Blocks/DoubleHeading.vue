<script setup>
defineProps(['content'])
</script>
<template>
    <div class="xl:flex xl:pb-14 pb-[27px]">
        <div class="pb-6 xl:pt-0 xl:w-9/12">
            <h2
                class="xl:text-[100px] font-medium xl:leading-[120px] leading-[57px] text-5xl xl:gap-8 text-[#000000] font-ppNeueMontrealMedium md:pr-0 pr-[16%] ">
                {{ content?.title }}
                <img class="xl:mt-14 inline w-[36px] md:w-auto	xl:pl-[32px]" src="../../assets/icons/forward.svg" alt="" />
            </h2>
        </div>
        <div class="xl:w-3/12">
            <h3 class="text-2xl	 md:text-[28px]	font-medium	font-ppNeueMontrealMedium leading-[36px]">
                {{ content?.subtitle }}
            </h3>
        </div>
    </div>
</template>