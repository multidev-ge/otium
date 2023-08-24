<script setup>
import useOtiumBrandStory from "@/composables/useOtiumBrandStory";

const { BrandStory } = useOtiumBrandStory();
</script>
<template>
  <div class="xl:pb-28 pb-7">
    <div class="xl:flex gap-20 pb-12 xl:pb-20 ">
      <div class="pb-5 xl:pb-0">
        <h2 class="text-2xl text-[#000000] font-ppNeueMontrealMedium">
          {{ BrandStory[0].BrandStoryName.title3 }}
        </h2>
      </div>
      <div>
        <p class="text-xl text-[#00000099] md:pr-40 font-ppNeueMontrealMedium">
          {{ BrandStory[0].BrandStoryDescription.description3 }}
        </p>
      </div>
    </div>
    <div class="xl:flex gap-8 ml-3 ">

      <div class="pb-7 xl:pb-0">
        <img class="rounded-xl	" :src="BrandStory[0].BrandStoryPhotos.img5" alt="Slide Image" />
        <h2 class="pt-2 font-ppNeueMontrealMedium text-2xl grid justify-start">
          {{ BrandStory[0].BrandStoryName.name }}
        </h2>
        <p class="pt-1 xl:pt-2 text-xl font-ppNeueMontrealMedium text-[#00000099] grid justify-start">
          {{ BrandStory[0].BrandStoryName.position3 }}
        </p>
      </div>
      <div class="pb-7 xl:pb-0">
        <img class="rounded-xl	" :src="BrandStory[0].BrandStoryPhotos.img6" alt="Slide Image" />
        <h2 class="pt-1 xl:pt-2 font-ppNeueMontrealMedium text-2xl grid justify-start">
          {{ BrandStory[0].BrandStoryName.name }}
        </h2>
        <p class="pt-1 xl:pt-2 text-xl font-ppNeueMontrealMedium text-[#00000099] grid justify-start">
          {{ BrandStory[0].BrandStoryName.position3 }}
        </p>
      </div>
      <div class="pb-7 xl:pb-0">
        <img class="rounded-xl	" :src="BrandStory[0].BrandStoryPhotos.img7" alt="Slide Image" />
        <h2 class="pt-2 font-ppNeueMontrealMedium text-2xl grid justify-start">
          {{ BrandStory[0].BrandStoryName.name }}
        </h2>
        <p class="pt-1 xl:pt-2 text-xl font-ppNeueMontrealMedium text-[#00000099] grid justify-start">
          {{ BrandStory[0].BrandStoryName.position4 }}
        </p>
      </div>
      <div class="w-[304px]">
      </div>
    </div>
  </div>

  <div class="xl:pb-28 pb-7">
    <div class="xl:flex gap-8 xl:pb-20 justify-center pb-5">
      <div class="">
        <h2 class="mr-20 pb-5 md:pb-0 text-2xl text-[#000000] font-ppNeueMontrealMedium">
          {{ BrandStory[0].BrandStoryName.title4 }}
        </h2>
      </div>
      <div>
        <p class="pt-1 xl:pt-2  text-[#00000099] xl:w-[976px] xl:pr-12 font-ppNeueMontrealMedium text-xl">
          {{ BrandStory[0].BrandStoryDescription.description4 }}
        </p>
      </div>
    </div>
    <div class="xl:flex gap-8 ml-3 ">

      <div class="pb-7 xl:pb-0">
        <img :src="BrandStory[0].BrandStoryPhotos.img8" alt="Slide Image" />
        <h2 class="pt-2 font-ppNeueMontrealMedium text-2xl grid justify-start">
          {{ BrandStory[0].BrandStoryName.name }}
        </h2>
        <p class="pt-1 xl:pt-2  text-xl font-ppNeueMontrealMedium text-[#00000099] grid justify-start">
          {{ BrandStory[0].BrandStoryName.position5 }}
        </p>
      </div>
      <div class="pb-7 xl:pb-0">
        <img :src="BrandStory[0].BrandStoryPhotos.img9" alt="Slide Image" />
        <h2 class="pt-2 font-ppNeueMontrealMedium text-2xl grid justify-start">
          {{ BrandStory[0].BrandStoryName.name }}
        </h2>
        <p class="pt-1 xl:pt-2  text-xl font-ppNeueMontrealMedium text-[#00000099] grid justify-start">
          {{ BrandStory[0].BrandStoryName.position5 }}
        </p>
      </div>
      <div class="pb-7 xl:pb-0">
        <img :src="BrandStory[0].BrandStoryPhotos.img10" alt="Slide Image" />
        <h2 class="pt-2 font-ppNeueMontrealMedium text-2xl grid justify-start">
          {{ BrandStory[0].BrandStoryName.name }}
        </h2>
        <p class="pt-1 xl:pt-2  text-xl font-ppNeueMontrealMedium text-[#00000099] grid justify-start">
          {{ BrandStory[0].BrandStoryName.position5 }}
        </p>
      </div>
    </div>
  </div>
</template>
