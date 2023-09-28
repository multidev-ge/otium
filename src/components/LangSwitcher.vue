<template>
    <div class="flex lg:flex-1 justify-center lg:justify-end gap-1">
      <template v-for="(_locale, index) in supportLocales" :key="index">
        <button
            :class="{ 'font-bold': _locale !== switchable }"
            @click="switchLocale"
            v-text="$t(`languages.${_locale}`)"/>
        <span v-if="index < supportLocales.length - 1" class="flex items-center"> / </span>
      </template>
    </div>
</template>

<script setup>
import {watch, computed} from 'vue'
import {useI18n} from 'vue-i18n'
import {SUPPORT_LOCALES as supportLocales, setI18nLanguage} from '@/i18n'

const {locale} = useI18n({useScope: 'global'})

const switchable = computed(() => supportLocales.filter(l => l !== locale.value)[0])

function switchLocale() {
  locale.value = locale.value === 'en' ? 'ka' : 'en'
}

watch(locale, (val) => {
  setI18nLanguage(val)
  // window.location.reload()
});
</script>
