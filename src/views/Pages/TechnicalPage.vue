<script>
import { mapGetters, mapActions } from "vuex";
import MainLayout from "@/layouts/mainLayout.vue";
import Technical from "../../components/TechnicalCharacteristics/Technical.vue";
import { useTitle } from "@vueuse/core";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
export default {
  components: {
    MainLayout,
    Technical,
  },
  computed: {
    ...mapGetters('pages', ['blocks', 'title']),
  },
  setup() {
    const { t } = useI18n({ useScope: 'global' })
    const route = useRoute()
    return { t, route }
  },
  methods: {
    ...mapActions('pages', ['getPage']),
  },
  mounted() {
    this.getPage(this.route.meta.page_id ?? 3).then(() => useTitle(`${this.title} - ${this.t('main.brand')}`))
  }
}
</script>

<template>
  <main-layout>
    <div class="">
      <Technical :title="title" :blocks="blocks" />
    </div>
  </main-layout>
</template>
