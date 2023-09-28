<template>
  <header class="bg-white">
    <nav
        class="container mx-auto flex items-center justify-between pb-8  md:pb-20 pt-5"
        aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <router-link to="/">
          <img :src="headerInfo[0].headercomponents.img" alt=""/>
        </router-link>
      </div>
      <div class="flex lg:hidden">
        <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true"/>
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-3">
        <router-link to="/otiumbrandstory">
          <a
              href="#"
              class="text-lg font-medium leading-6"
              :class="{ 'active-link': $route.path === '/otiumbrandstory' }"
          >
            {{ $t('menu.Company') }}
          </a>
        </router-link>
        <router-link to="/projects">
          <a
              href="#"
              class="text-lg font-medium leading-6"
              :class="{ 'active-link': $route.path === '/projects' }"
          >
            {{ $t('menu.Projects') }}
          </a>
        </router-link>
        <router-link to="/media">
          <a
              href="#"
              class="text-lg font-medium leading-6"
              :class="{ 'active-link': $route.path === '/media' }"
          >
            {{ $t('menu.Media') }}
          </a>
        </router-link>
        <router-link to="/contact">
          <a
              href="#"
              class="text-lg font-medium leading-6"
              :class="{ 'active-link': $route.path === '/contact' }"
          >
            {{ $t('menu.Contact') }}
          </a>
        </router-link>
      </PopoverGroup>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end gap-8">
        <LangSwitcher/>

        <router-link to="/apartment-finder">
          <div class="flex gap-2 bg-[#F0EEEC] px-6 py-3 rounded-2xl">
            <button class="flex text-[#554242]">
              {{ headerInfo[0].headercomponents.title4 }}
            </button>
            <component class="mt-1" :is="headerInfo[0].headercomponents.img1"/>
          </div>
        </router-link>
      </div>
    </nav>
    <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10"/>
      <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-4 pt-5 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between pb-3">
          <router-link to="/">
            <img :src="headerInfo[0].headercomponents.img" alt=""/>
          </router-link>
          <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true"/>
          </button>
        </div>

        <hr class="my-6 border-[#D9D9D9] sm:mx-auto lg:my-8"/>

        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10 justify-center grid">
            <div class="space-y-2 py-6">
              <div class="grid justify-center gap-y-8">
                <router-link to="/otiumbrandstory">
                  <a
                      href="#"
                      class="-mx-3 flex justify-center rounded-lg px-3 py-2 text-lg font-medium leading-7 text-[#000000] "
                  >{{ $t('menu.Company') }}</a
                  >
                </router-link>
                <router-link to="/projects">
                  <a
                      href="#"
                      class="-mx-3 flex justify-center rounded-lg px-3 py-2 text-lg font-medium leading-7 text-[#000000]"
                  >{{ $t('menu.Projects') }}</a
                  >
                </router-link>
                <router-link to="/media">
                  <a
                      href="#"
                      class="-mx-3 flex justify-center rounded-lg px-3 py-2 text-lg font-medium leading-7 text-[#000000]"
                  >{{ $t('menu.Media') }}</a
                  >
                </router-link>
                <router-link to="/contact">
                  <a
                      href="#"
                      class="-mx-3 flex justify-center rounded-lg px-3 py-2 text-lg font-medium leading-7 text-[#000000]"
                  >{{ $t('menu.Contact') }}</a
                  >
                </router-link>

                <LangSwitcher/>
              </div>
              <div class="pt-8">
                <router-link to="/apartment-finder">
                  <div class="flex gap-2 bg-[#F0EEEC] px-6 py-3 rounded-2xl">
                    <button class="flex text-[#554242]">
                      {{ headerInfo[0].headercomponents.title4 }}
                    </button>
                    <component
                        class="mt-1"
                        :is="headerInfo[0].headercomponents.img1"
                    />
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

<script setup>
import {ref} from "vue";
import useHeader from "@/composables/useHeader";

const {headerInfo} = useHeader();
const isButton1Bold = ref(true);
const isButton2Bold = ref(false);

const toggleButtonStyles = (buttonToBold, buttonToLight) => {
  isButton1Bold.value = buttonToBold === "button1";
  isButton2Bold.value = buttonToBold === "button2";
};

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/vue/20/solid";
import LangSwitcher from "@/components/LangSwitcher.vue";

const callsToAction = [
  {name: "Watch demo", href: "#", icon: PlayCircleIcon},
  {name: "Contact sales", href: "#", icon: PhoneIcon},
];

const mobileMenuOpen = ref(false);
</script>

<style scoped>
.bold-button {
  font-weight: bold;
}

.active-link {
  color: #88407c; /* You can replace 'red' with your desired shade of red */
}
</style>
