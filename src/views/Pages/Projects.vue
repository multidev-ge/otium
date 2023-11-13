<script>
import { mapGetters, mapActions } from "vuex";
import MainLayout from "@/layouts/mainLayout.vue";
import SplideForProjects from "@/components/Projects/splideForProjects.vue";
export default {
  components: {
    MainLayout,
    SplideForProjects,
  },
  computed: {
    ...mapGetters('projects', ['projects'])
  },
  methods: {
    ...mapActions('projects', ['getProjects'])
  },
  mounted(){
    this.getProjects()
  }
}
</script>

<template>
  <main-layout>
    <SplideForProjects :content="projects"/>
  </main-layout>

</template>

