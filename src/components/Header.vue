<script setup>
import { ref, onMounted, watch } from "vue"
import { useI18n } from 'vue-i18n'
import useHeader from "@/composables/useHeader"
import arrowRight from "@/assets/icons/arrow-right.vue"
import logo from "../assets/images/Logo.png"
import { useRoute } from "vue-router"
import { Dialog, DialogPanel } from "@headlessui/vue"
import { Bars3Icon, XMarkIcon, } from "@heroicons/vue/24/outline"
import LanguageSwitcher from "./Head/LanguageSwitcher.vue"

const route = useRoute()
const { headerInfo, getMenu, mainMenuLinks } = useHeader()
const mobileMenuOpen = ref(false)
const { t } = useI18n({ useScope: 'global' })

onMounted(() => {
  getMenu()
})
</script>
<template>
  <header class="bg-white">
    <nav class="container mx-auto flex items-center justify-between pb-8 md:pb-20 pt-5" aria-label="Global">
      <div class="flex lg:flex-1">
        <router-link to="/">
          <img class="xl:w-auto xl:h-auto w-[90px] h-[22px]" :src="logo" alt="" />
        </router-link>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-3">
        <router-link v-for="item in mainMenuLinks"
          :to="item.url"
          :class="[
            'text-lg font-medium leading-6',
            { 'active-link': $route.path === item.url }
          ]"
          v-text="item?.title">
        </router-link>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end gap-8">
        <LanguageSwitcher class="hidden lg:flex lg:flex-1 lg:justify-end"/>
        <router-link to="/apartment-finder">
          <div class="flex gap-2 bg-[#F0EEEC] px-6 py-3 rounded-2xl flex items-center">
            <button class="flex text-[#554242]" v-text="t('menu.FYA')" />
            <arrowRight />
          </div>
        </router-link>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-4 pt-5 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between pb-3">
          <router-link to="/">
            <img :src="headerInfo[0].headercomponents.img" alt="" />
          </router-link>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <hr class="my-6 border-[#D9D9D9] sm:mx-auto lg:my-8" />
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10 justify-center grid">
            <div class="space-y-2 py-6">
              <div class="grid justify-center gap-y-4">
                <router-link v-for="(link, index) in mainMenuLinks"
                  :key="index"
                  :to="link.url"
                  class="-mx-3 flex justify-center rounded-lg px-3 py-2 text-lg font-medium leading-7 text-[#000000]"
                  :class="{ 'text-[#88407c]': route.path === link.url }" v-text="link.title" />
                <LanguageSwitcher class="flex w-full lg:hidden lg:flex-1 justify-center" />
              </div>
              <div class="pt-8">
                <router-link to="/apartment-finder">
                  <div class="flex gap-2 bg-[#F0EEEC] px-6 py-3 rounded-2xl items-center">
                    <button class="flex text-[#554242]" v-text="t('menu.FYA')" />
                    <arrowRight />
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
<style scoped>
.active-link {
  color: #88407c;
  /* You can replace 'red' with your desired shade of red */
}
</style>
