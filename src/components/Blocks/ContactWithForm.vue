<script setup>
import ContactPhoneIcon from "@/assets/icons/Contact/ContactPhoneIcon.vue"
import ContactEnvelopeIcon from "@/assets/icons/Contact/ContactEnvelopeIcon.vue"
import ContactLocationDotIcon from "@/assets/icons/Contact/ContactLocationDotIcon.vue"
import { useI18n } from "vue-i18n";
defineProps(['data'])

const getIcon = (key) => {
    let icons = {
        'phone': ContactPhoneIcon,
        'email': ContactEnvelopeIcon,
        'address': ContactLocationDotIcon,
    }

    return icons[key]
}
const {t} = useI18n({useScope:"global"})
</script>
<template>
    <div>
        <!-- Contact Info -->
        <div class="flex max-lg:flex-col lg:justify-between lg:items-center lg:gap-x-9 max-lg:gap-y-9">
            <div v-for="key in ['phone', 'email', 'address']" class="flex items-start gap-x-4 lg:gap-x-6">
                <div class="bg-[#F2F2F2] p-3 lg:p-4 rounded-xl">
                    <component class="max-lg:w-6 max-lg:h-6" :is="getIcon(key)"/>
                </div>
                <div class="flex flex-col justify-between">
                    <div class="text-base lg:text-lg font-medium lg:leading-8 opacity-60 capitalize">
                        {{ t(`contact.${key}`) }}
                    </div>
                    <div class="text-lg lg:text-2xl font-medium">
                        {{ data[key] }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>