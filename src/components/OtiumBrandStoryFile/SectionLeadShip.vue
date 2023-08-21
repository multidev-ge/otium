<template>
  <div class=" mb-28">

    <div class="lg:flex gap-8 ml-3 ">

<div class="pb-7 lg:pb-0">
  <img class="rounded-lg	" :src="BrandStory[0].BrandStoryPhotos.img1" alt="Slide Image" />
  <h2 class="pt-2 font-ppNeueMontrealMedium text-2xl grid justify-start">
    {{ BrandStory[0].BrandStoryName.name }}
  </h2>
  <p class="pt-1 lg:pt-2 text-xl font-ppNeueMontrealMedium text-[#00000099] grid justify-start">
    {{ BrandStory[0].BrandStoryName.position1 }}
  </p>
</div>
<div class="pb-7 lg:pb-0">
  <img class="rounded-lg	" :src="BrandStory[0].BrandStoryPhotos.img2" alt="Slide Image" />
  <h2 class="pt-2 font-ppNeueMontrealMedium text-2xl grid justify-start">
    {{ BrandStory[0].BrandStoryName.name }}
  </h2>
  <p class="pt-1 lg:pt-2 text-xl font-ppNeueMontrealMedium text-[#00000099] grid justify-start">
    {{ BrandStory[0].BrandStoryName.position1 }}
  </p>
</div>
<div class="pb-7 lg:pb-0">
  <img class="rounded-lg	" :src="BrandStory[0].BrandStoryPhotos.img3" alt="Slide Image" />
  <h2 class="pt-2 font-ppNeueMontrealMedium text-2xl grid justify-start">
    {{ BrandStory[0].BrandStoryName.name }}
  </h2>
  <p class="pt-1 lg:pt-2 text-xl font-ppNeueMontrealMedium text-[#00000099] grid justify-start">
    {{ BrandStory[0].BrandStoryName.position2 }}
  </p>
</div>
<div class="pb-7 lg:pb-0">
  <img class="rounded-lg	" :src="BrandStory[0].BrandStoryPhotos.img4" alt="Slide Image" />
  <h2 class="pt-2 font-ppNeueMontrealMedium text-2xl grid justify-start">
    {{ BrandStory[0].BrandStoryName.name }}
  </h2>
  <p class="pt-1 lg:pt-2text-xl font-ppNeueMontrealMedium text-[#00000099] grid justify-start">
    {{ BrandStory[0].BrandStoryName.position2 }}
  </p>
</div>

</div>

   </div>
</template>

<script setup>
import useOtiumBrandStory from "@/composables/useOtiumBrandStory";
 const { BrandStory } = useOtiumBrandStory();
</script>
