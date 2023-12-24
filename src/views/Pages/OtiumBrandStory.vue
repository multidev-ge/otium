<script>
import { mapGetters, mapActions } from "vuex";
import mainLayout from "@/layouts/mainLayout.vue";
import Section1 from "../../components/OtiumBrandStoryFile/Section1.vue";
import Section2 from "../../components/OtiumBrandStoryFile/Section2.vue";
import Section3Vue from "../../components/OtiumBrandStoryFile/Section3.vue";
import SectionLeadShip from "../../components/OtiumBrandStoryFile/SectionLeadShip.vue"
import DoubleHeading from "../../components/Blocks/DoubleHeading.vue"
import DoubleImage from "../../components/Blocks/DoubleImage.vue"
import TwoColumnParagraph from "../../components/Blocks/TwoColumnParagraph.vue"
import HeadingWithParagraph from "../../components/Blocks/HeadingWithParagraph.vue"
import TeamMembers from "../../components/Blocks/TeamMembers.vue"
import { useTitle } from "@vueuse/core";
import { useI18n } from "vue-i18n";
export default {
  components: {
    mainLayout,
    Section1,
    Section2,
    Section3Vue,
    SectionLeadShip,
    DoubleHeading,
    DoubleImage,
    TwoColumnParagraph,
    HeadingWithParagraph,
    TeamMembers,
  },
  setup(){
    const {t} = useI18n({useScope:'global'})
    return {t}
  },
  computed: {
    ...mapGetters('pages', ['blocks', 'title'])
  },
  methods: {
    ...mapActions('pages', ['getPage'])
  },
  mounted(){
    this.getPage(4).then(() => useTitle(`${this.title} - ${this.t('main.brand')}`) )
  }
}
</script>
<template>
  <mainLayout>
    <component v-for="block in blocks" :is="block?.type" :content="block?.data"/>
    <!-- <div class="">
      {{ blocks }}
      <Section1 />
      <Section2 />
      <SectionLeadShip />
      <Section3Vue />
    </div> -->
  </mainLayout>
</template>
