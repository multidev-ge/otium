import { nextTick } from 'vue';
import { createI18n } from 'vue-i18n';

let i18n;

export const FALLBACK_LOCALE = import.meta.env.VITE_APP_FALLBACK_LOCALE || 'en'

export const SUPPORT_LOCALES = ['en', 'ka', 'ru']

export function setI18nLanguage(locale) {
    loadLocaleMessages(locale);

    if (i18n.mode === 'legacy') {
        i18n.global.locale = locale;
    } else {
        i18n.global.locale.value = locale;
    }

    document.querySelector('html').setAttribute('lang', locale)
    
    localStorage.setItem('lang', locale)
}

export async function loadLocaleMessages(locale) {
    const messages = await import(`./locales/${locale}.json`);

    i18n.global.setLocaleMessage(locale, messages.default);

    await nextTick()
}

export default function setupI18n() {
    if(!i18n) {
        let locale = localStorage.getItem('lang') || FALLBACK_LOCALE;
        i18n = createI18n({
            globalInjection: true,
            legacy: false,
            locale: locale,
            fallbackLocale: FALLBACK_LOCALE
        });
        setI18nLanguage(locale);
    }

    return i18n;
}
