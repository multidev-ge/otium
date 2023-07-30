<script setup>
import useOtiumBrandStory from "@/composables/useOtiumBrandStory";

const { BrandStory } = useOtiumBrandStory();
</script>
<template>
    <div class="flex gap-52 pb-20 justify-center ">
        <div class="justify-center">
            <h2 class="text-2xl	text-[#000000] font-medium	">Leadership</h2>
        </div>
        <div>
            <p class="text-xl  text-[#00000099]	w-[976px] pr-12 font-medium	">{{ BrandStory[0].BrandStoryDescription.description2 }}</p>
        </div>
    </div>
</template>