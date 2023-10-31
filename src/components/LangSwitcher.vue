<template>
  <div class="flex lg:flex-1 justify-center lg:justify-end gap-1">
    <template v-for="(_locale, index) in supportLocales" :key="index">
      <button :class="{ 'font-bold': _locale === locale }"
              @click="switchLocale(_locale)"
              v-text="t(`languages.${_locale}`)"/>
      <span v-if="index < supportLocales.length - 1"
            class="flex items-center"
            v-text="'/'"/>
    </template>
  </div>
</template>

<script setup>
import {watch} from 'vue'
import {useI18n} from 'vue-i18n'
import {SUPPORT_LOCALES as supportLocales, setI18nLanguage} from '@/i18n'

const {locale, t} = useI18n({useScope: 'global'})

function switchLocale(_locale) {
  locale.value = _locale
}

watch(locale, (value, oldValue) => {
  if (value !== oldValue) setI18nLanguage(value)
})
</script>
