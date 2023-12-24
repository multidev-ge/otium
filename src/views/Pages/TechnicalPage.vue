<script>
import { mapGetters, mapActions } from "vuex";
import MainLayout from "@/layouts/mainLayout.vue";
import Technical from "../../components/TechnicalCharacteristics/Technical.vue";
import { useTitle } from "@vueuse/core";
export default {
  components: {
    MainLayout,
    Technical,
  },
  computed: {
    ...mapGetters('pages', ['blocks', 'title']),
  },
  methods: {
    ...mapActions('pages', ['getPage']),
  },
  mounted(){
    this.getPage(3).then(() => useTitle(`${this.title} - ${this.t('main.brand')}`) )
  }
}
</script>

<template>
  <main-layout>
    <div class="">
        <Technical :title="title" :blocks="blocks"/>
    </div>
  </main-layout>
</template>
