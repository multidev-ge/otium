<script setup>
import useOtiumBrandStory from "@/composables/useOtiumBrandStory";

const { BrandStory } = useOtiumBrandStory();
</script>
<template>
    <div class="flex gap-52 pb-20 ">
        <div class="">
            <h2 class="text-2xl	text-[#000000]">Leadership</h2>
        </div>
        <div>
            <p class="text-xl	w-[976px] pr-12">{{ BrandStory[0].BrandStoryDescription.description2 }}</p>
        </div>
    </div>
</template>