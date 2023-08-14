<template>
  <header class="bg-white ">
    <nav
      class="mx-auto flex container items-center justify-between pb-20 pt-5"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <router-link to="/">
            <img src="../assets/images/Logo.jpg" alt="">
        </router-link>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-3">
        <a href="#" class="text-lg font-medium leading-6 text-gray-900"
          >{{ headerInfo[0].headercomponents.title }}</a
        >
        <a href="#" class="text-lg font-medium leading-6 text-gray-900"
          >{{ headerInfo[0].headercomponents.title1  }}</a
        >
        <router-link to="/media">
          <a href="#" class="text-lg font-medium leading-6 text-gray-900"
            >{{ headerInfo[0].headercomponents.title2  }}</a
          >
        </router-link>
        <router-link to="/contact">
          <a href="#" class="text-lg font-medium leading-6 text-gray-900"
            >{{ headerInfo[0].headercomponents.title3  }}</a
          >
        </router-link>
      </PopoverGroup>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end gap-8">
        <div class="hidden lg:flex lg:flex-1 lg:justify-end gap-1">
          <button
            :class="{ 'bold-button': isButton1Bold }"
            @click="toggleButtonStyles('button1', 'button2')"
          >
            {{ headerInfo[0].headercomponents.language }}
          </button>
          <button disabled class="focus:outline-none">/</button>
          <button
            :class="{ 'bold-button': isButton2Bold }"
            @click="toggleButtonStyles('button2', 'button1')"
          >
            {{ headerInfo[0].headercomponents.language1 }}
          </button>
        </div>

        <div class="flex gap-2 bg-[#F0EEEC] px-6 py-3 rounded-2xl">
          <button class="flex">{{ headerInfo[0].headercomponents.title4  }}</button>
          <component class="mt-1" :is="headerInfo[0].headercomponents.img1" />
        </div>
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <router-link to="/">
              <component :is="headerInfo[0].headercomponents.img" />
          </router-link>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                >{{ headerInfo[0].headercomponents.title }}</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                >{{ headerInfo[0].headercomponents.title1 }}</a
              >
              <router-link to="/media">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >{{ headerInfo[0].headercomponents.title2 }}</a
                >
              </router-link>
              <router-link to="/media">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >{{ headerInfo[0].headercomponents.title3 }}</a
                >
              </router-link>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from "vue";
import useHeader from "@/composables/useHeader";

const { headerInfo } = useHeader();
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

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

const mobileMenuOpen = ref(false);
</script>

<style scoped>
.bold-button {
  font-weight: bold;
}
</style>
