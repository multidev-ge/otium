<script setup>
import accordioncomp from "./AccordionComp.vue";
import { useRoute } from "vue-router"
import { useI18n } from "vue-i18n"
defineProps(['title', 'blocks'])
const route = useRoute()
const { t } = useI18n({ useScope: "global" })
</script>
<template>
  <div>
    <div class="pb-8">
      <router-link class="inline-block" :to="{ name: 'project', params: { id: route.params?.id } }">
        <button class="text-base text-[#000000] flex gap-3">
          <img class="mt-1" src="../../assets/icons/arrow-left.svg" alt="" />
          {{ t("technical.backToProject") }}
        </button>
      </router-link>
    </div>
    <div class="md:flex ">
      <div class="md:w-1/3	w-6/12		">
        <h2 class="text-[#000000] text-3xl	 md:text-4xl">{{ title }}</h2>
      </div>
      <div>
        <accordioncomp :content="blocks" />
      </div>
    </div>
  </div>
</template>
