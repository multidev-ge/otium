<script>
import mediaInner from "@/composables/forMediaInner/mediaInner";
import DoubleText from "@/components/mediaInnerPage/universalComponents/doubleText.vue";
import SplidePart from "@/components/mediaInnerPage/mediaInner/splidePart.vue";
import Paragraph from "../../Blocks/Paragraph.vue";
import Slider from "../../Blocks/Slider.vue";
export default {
  props: ['content'],
  components: {
    mediaInner,
    DoubleText,
    SplidePart,
    'paragraph': Paragraph,
    'slider': Slider,
  },
  setup(){
    const { currentPageInfo } = mediaInner()

    return { currentPageInfo }
  },
}
</script>

<template>
    <section class="md:w-8/12 w-11/12 md:mx-0 mx-auto">
      <div class="flex gap-5 flex-col">
        <img class="rounded-lg" :src="content?.image_url" alt="">
        <p class="text-[#00000099] font-medium text-xl">{{ content?.category?.title }} // {{ content?.date }}</p>

        <component v-for="{data, type} in content?.blocks" :is="type" :content="data"></component>
        
        <!-- <div class="flex flex-col md:gap-10 gap-5">
          <p class="font-medium md:text-6.5xl text-2xl leading-6.5xl ">{{ content?.title }}</p>
          <double-text :text="currentPageInfo.mainPart.text1"></double-text>
          <double-text :text="currentPageInfo.mainPart.text2"></double-text>

        </div>

        <div class="flex flex-col md:gap-10 gap-5">
          <SplidePart class="mb-5"/>
          <double-text :text="currentPageInfo.mainPart.text3"></double-text>
        </div>

        <div class="flex flex-col md:gap-10 gap-5">
          <p class="font-medium md:opacity-100 opacity-60 text-2xl md:text-4xl ">{{currentPageInfo.secondPart.title}}</p>
          <double-text :text="currentPageInfo.secondPart.text1"></double-text>
        </div> -->

      </div>
    </section>
</template>
