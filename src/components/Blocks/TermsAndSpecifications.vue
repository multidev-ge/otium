<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from "vue-i18n";
import rightArrow from '../../assets/icons/apartmentFinderPage/rightArrow.vue';
defineProps(['content'])
const route = useRoute() // There is no more route.params.id
const { t } = useI18n({ useScope: 'global' })
</script>
<template>
    <div class="w-full flex flex-col lg:flex-row">
        <div class="lg:w-1/3 flex justify-center items-center mb-5 lg:mb-0">
            <h3 class="text-4xl font-medium">{{ content?.title }}</h3>
        </div>
        <div class="flex flex-col lg:flex-row  lg:w-2/3 p-6 border border-1 border-[#F0EEEC] rounded-xl">
            <div class="w-full text-[#626262] text-lg font-medium mb-2 lg:mb-0">{{ content?.description }}</div>
            <div class="flex flex-col gap-5">
                <router-link :to="`/projects/${route.params?.id}/details`">
                    <button class="lg:w-60 w-full bg-[#F0EEEC] rounded-2xl p-3">
                        <p>{{ t('buttons.termsOfDelivery') }}
                            <right-arrow class="inline-block ml-1" />
                        </p>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>