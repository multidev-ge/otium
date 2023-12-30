<script setup>
import mediaInner from "@/composables/forMediaInner/mediaInner";
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";
defineProps(['content'])
const { t } = useI18n({ useScope: 'global' })
</script>

<template>
    <section class="w-full h-fit flex flex-col gap-8 xl:w-28/100 bg-[#F2F2F2] rounded-lg py-8 px-6 font-medium text-3xl">
        <p class="font-medium text-3xl">{{ t("media.similar") }}</p>
        <div :class="['flex flex-col gap-5 border-[#D9D9D9]', index !== content.length - 1 ? 'border-b' : '']"
            v-for="(news, index) in   content  ">
            <RouterLink class="w-full" :to="{ name: 'MediaInner', params: { id: news?.id } }">
                <img class="w-full h-auto  rounded-lg" :src="news.image_url" alt="">
            </RouterLink>
            <div class="w-full flex gap-2 flex-col ">
                <p class="text-lg text-[#00000099]">{{ news?.category?.title }} // {{ news?.date }}</p>
                <p class="text-2xl pb-5 leading-9">{{ news?.description }}</p>
            </div>
        </div>
    </section>
</template>
