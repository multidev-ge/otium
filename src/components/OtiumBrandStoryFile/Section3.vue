<script setup>
import useOtiumBrandStory from "@/composables/useOtiumBrandStory";

const { BrandStory } = useOtiumBrandStory();
</script>
<template>
  <div class="pb-28 ">
    <div class="flex gap-20 pb-20 justify-center">
      <div class="justify-center">
        <h2 class="text-2xl text-[#000000] font-ppNeueMontrealMedium">
          Design and Architecture
        </h2>
      </div>
      <div>
        <p class="text-xl text-[#00000099] w-[976px] pr-12 font-ppNeueMontrealMedium">
          {{ BrandStory[0].BrandStoryDescription.description3 }}
        </p>
      </div>
    </div>
    <div class="flex gap-8 ml-3 justify-center">

      <div class="">
        <img class="rounded-lg	" :src="BrandStory[0].BrandStoryPhotos.img5" alt="Slide Image" />
        <h2 class="pt-2 font-ppNeueMontrealMedium text-2xl grid justify-start">
          {{ BrandStory[0].BrandStoryName.name }}
        </h2>
        <p class="pt-2 text-xl font-ppNeueMontrealMedium text-[#00000099] grid justify-start">
          {{ BrandStory[0].BrandStoryName.position3 }}
        </p>
      </div>
      <div class="">
        <img class="rounded-lg	" :src="BrandStory[0].BrandStoryPhotos.img6" alt="Slide Image" />
        <h2 class="pt-2 font-ppNeueMontrealMedium text-2xl grid justify-start">
          {{ BrandStory[0].BrandStoryName.name }}
        </h2>
        <p class="pt-2 text-xl font-ppNeueMontrealMedium text-[#00000099] grid justify-start">
          {{ BrandStory[0].BrandStoryName.position3 }}
        </p>
      </div>
      <div class="">
        <img class="rounded-lg	" :src="BrandStory[0].BrandStoryPhotos.img7" alt="Slide Image" />
        <h2 class="pt-2 font-ppNeueMontrealMedium text-2xl grid justify-start">
          {{ BrandStory[0].BrandStoryName.name }}
        </h2>
        <p class="pt-2 text-xl font-ppNeueMontrealMedium text-[#00000099] grid justify-start">
          {{ BrandStory[0].BrandStoryName.position4 }}
        </p>
      </div>
      <div class="w-[304px]">
      </div>
    </div>
  </div>

  <div class="pb-28 ">
    <div class="flex gap-8 pb-20 justify-center">
      <div class="justify-center ">
        <h2 class="mx-10 text-2xl text-[#000000] font-ppNeueMontrealMedium">
            Construction and Engineering
        </h2>
      </div>
      <div>
        <p class="text-xl text-[#00000099] w-[976px] pr-12 font-ppNeueMontrealMedium">
          {{ BrandStory[0].BrandStoryDescription.description4 }}
        </p>
      </div>
    </div>
    <div class="flex gap-8 ml-3 justify-center">

      <div class="">
        <img :src="BrandStory[0].BrandStoryPhotos.img8" alt="Slide Image" />
        <h2 class="pt-2 font-ppNeueMontrealMedium text-2xl grid justify-start">
          {{ BrandStory[0].BrandStoryName.name }}
        </h2>
        <p class="pt-2 text-xl font-ppNeueMontrealMedium text-[#00000099] grid justify-start">
          {{ BrandStory[0].BrandStoryName.position5 }}
        </p>
      </div>
      <div class="">
        <img :src="BrandStory[0].BrandStoryPhotos.img9" alt="Slide Image" />
        <h2 class="pt-2 font-ppNeueMontrealMedium text-2xl grid justify-start">
          {{ BrandStory[0].BrandStoryName.name }}
        </h2>
        <p class="pt-2 text-xl font-ppNeueMontrealMedium text-[#00000099] grid justify-start">
          {{ BrandStory[0].BrandStoryName.position5 }}
        </p>
      </div>
      <div class="">
        <img :src="BrandStory[0].BrandStoryPhotos.img10" alt="Slide Image" />
        <h2 class="pt-2 font-ppNeueMontrealMedium text-2xl grid justify-start">
          {{ BrandStory[0].BrandStoryName.name }}
        </h2>
        <p class="pt-2 text-xl font-ppNeueMontrealMedium text-[#00000099] grid justify-start">
          {{ BrandStory[0].BrandStoryName.position5 }}
        </p>
      </div>
      <div class="w-[304px]">
      </div>
    </div>
  </div>
</template>
