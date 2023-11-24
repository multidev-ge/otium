<script setup>
import { watch } from "vue"
import { useI18n } from 'vue-i18n'
import { SUPPORT_LOCALES as supportLocales, setI18nLanguage } from '../../i18n'
const { t, locale } = useI18n({ useScope: 'global' })
const setLocale = (val) => {
  locale.value = val
}
watch(locale, (val) => {
    setI18nLanguage(val)
    window.location.reload()
})
</script>
<template>
    <div>
        <div v-for="(lang, index) in supportLocales" class="flex flex-row items-center">
            <button class="capitalize hover:text-[#883F7C] transition-colors" :class="{ 'font-bold': locale === lang }" @click="setLocale(lang)">
                {{ t(`languages.${lang}`) }}
            </button>
            <button v-if="(index + 1) < supportLocales.length" disabled class="focus:outline-none mx-1">/</button>
        </div>
    </div>
</template>
