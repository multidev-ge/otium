<script setup>
import useOtiumBrandStory from "@/composables/useOtiumBrandStory";

const { BrandStory } = useOtiumBrandStory();
</script>
<template>
  <div class="xl:flex  xl:gap-8 pb-14  ">
    <div class="  pb-6 xl:pt-0 xl:w-[63%]">
      <h2 class="xl:text-8xl  text-5xl xl:gap-8  text-[#000000] font-ppNeueMontrealMedium ">{{ BrandStory[0].BrandStoryName.title }} <img class="xl:mt-16 inline w-[36px] md:w-auto	" src="../../assets/icons/forward.svg" alt="" /></h2>

    </div>
    <div class="xl:w-[415px]">
      <h3 class="text-2xl	 md:text-3xl	 pr-22  font-ppNeueMontrealMedium">
        {{ BrandStory[0].BrandStoryDescription.description5 }}
      </h3>
    </div>
  </div>
  <div class="lg:flex lg:gap-8 pb-7 md:pb-12">
    <div class="bg-[#D9D9D9] w-full h-[186px] md:h-[464px] mb-7  rounded-lg	">
    </div>
    <div class="bg-[#D9D9D9] w-full md:w-5/12	h-[384px]	 md:h-[464px] rounded-lg	">
    </div>
</div>

  <div class="xl:flex xl:gap-8">
    <p class="xl:w-[640px] pb-8 xl:pb-0 text-xl font-ppNeueMontrealMedium leading-8 pr-10 text-[#00000099]">
      {{ BrandStory[0].BrandStoryDescription.description }}
    </p>
    <p class="xl:w-[640px] text-xl font-ppNeueMontrealMedium leading-8 text-[#00000099]">
      {{ BrandStory[0].BrandStoryDescription.description1 }}
    </p>
  </div>
  <div class=" ">
    <div class="lg:pt-24 pt-12  flex md:gap-8 gap-4 lg:pb-20 pb-7 xl:w-[700px]">
      <h2 class="md:text-8xl text-3xl	 font-ppNeueMontrealMedium">{{ BrandStory[0].BrandStoryName.title1 }}</h2>
      <img class="lg:pt-10 w-[36px] h-[36px] md:w-auto md:h-auto" src="../../assets//icons/forward.svg" alt="" />
    </div>

  </div>
</template>