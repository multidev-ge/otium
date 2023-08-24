<script setup>
import useOtiumBrandStory from "@/composables/useOtiumBrandStory";

const { BrandStory } = useOtiumBrandStory();
</script>
<template>
    <div class="xl:flex gap-52 pb-20 ">
        <div class="">
            <h2 class="text-2xl	text-[#000000] font-ppNeueMontrealMedium	pb-7 xl:pb-0">{{ BrandStory[0].BrandStoryName.title2 }}</h2>
        </div>
        <div>
            <p class="text-xl  text-[#00000099]	 md:pr-40 font-ppNeueMontrealMedium	">{{ BrandStory[0].BrandStoryDescription.description2 }}</p>
        </div>
    </div>
</template>