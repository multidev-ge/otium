<script>
import { mapGetters, mapActions } from "vuex";
import LeftSide from "@/components/mediaInnerPage/mediaInner/leftSide.vue";
import RightPart from "@/components/mediaInnerPage/mediaInner/rightPart.vue";
import MainLayout from "@/layouts/mainLayout.vue";

export default {
  props: ['id'],
  components: {
    LeftSide, RightPart, MainLayout
  },
  computed: {
    ...mapGetters('media', ['media', 'similar'])
  },
  methods: {
    ...mapActions('media', [ 'getMedia' ])
  },
  mounted(){
    this.getMedia(this.$props.id)
  },
}
</script>

<template>
  <main-layout>
    <div class="w-full flex flex-col xl:flex-row justify-between xl:space-x-20">
      <left-side class="xl:w-9/12" :content="media" />
      <right-part class="xl:w-4/12" :content="similar" />
    </div>
  </main-layout>
</template>
