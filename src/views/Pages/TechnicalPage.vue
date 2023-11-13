<script>
import { mapGetters, mapActions } from "vuex";
import MainLayout from "@/layouts/mainLayout.vue";
import Technical from "../../components/TechnicalCharacteristics/Technical.vue";
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
    this.getPage(5)
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
