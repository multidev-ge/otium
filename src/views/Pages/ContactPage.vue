<script>
import { mapGetters, mapActions } from "vuex"
// import ContactInfo from "@/components/Contact/ContactInfo.vue"
import ContactForm from "@/components/Contact/ContactForm.vue"
import ContactMap from "@/components/Contact/ContactMap.vue"
import MainLayout from "@/layouts/mainLayout.vue"
/** Blocks */
import ContactWithForm from "../../components/Blocks/ContactWithForm.vue"

export default {
  components: {
    MainLayout,
    // ContactInfo,
    ContactForm,
    ContactMap,
    ContactWithForm,
  },
  computed: {
    ...mapGetters('pages', [ 'id', 'title', 'slug', 'blocks' ])
  },
  methods: {
    ...mapActions('pages', [ 'getPage' ])
  },
  mounted() {
    this.getPage(1)
  }
}
</script>

<template>
  <MainLayout>
    <div class="flex flex-col space-y-8 lg:space-y-16">
      <h1 class="text-5xl font-medium leading-[57.6px] md:text-[100px] md:leading-[120px]">{{ title }}</h1>
      <section v-for="{data, type} in blocks">
        <component :is="type" :data="data"></component>
      </section>
      
      <div class="flex max-lg:flex-col items-center max-lg:space-y-20 lg:space-x-36">
        <ContactForm class="w-full" />
        <ContactMap class="w-full max-md:h-[198px] md:max-lg:h-80 lg:h-[370px]"/>
      </div> 

    </div>
  </MainLayout>
</template>
