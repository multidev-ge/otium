<script setup>
import useFooter from "@/composables/useFooter";
const { FooterInfo, contactFormData, submitContactForm } = useFooter();
</script>
<template>
  <footer class="bg-[#000000] mt-12">
    <div class="mx-auto container py-20 justify-between w-full">
      <div class="md:flex gap-8">
        <div class="mb-6 md:mb-0 w-[45%]">
          <h2 class="text-[#FFFFFF] text-3xl">
            {{ FooterInfo[0].Footercomponents.title }}
          </h2>
          <img :src="FooterInfo[0].Footercomponents.img" alt="" />
        </div>

        <div class="px-4 w-[100%]">
          <form
            @submit.prevent="submitContactForm"
            class="flex md:gap-14 justify-between gap-4"
          >
            <div class="w-1/3">
              <label
                for="text"
                class="block text-base font-medium text-[#FFFFFF99]"
                >Your Name</label
              >
              <input
                v-model="contactFormData.name"
                id="text"
                type="text"
                class="border-[#FFFFFF4D] block w-full bg-black outline-0 text-white border-b-2 text-lg"
                required
                autocomplete="name"
              />
            </div>
            <div class="w-1/3">
              <label
                for="tel"
                class="block text-base font-medium text-[#FFFFFF99]"
                >Phone Number</label
              >
              <input
                v-model="contactFormData.phoneNumber"
                id="tel"
                type="tel"
                class="border-[#FFFFFF4D] block w-full bg-black outline-0 text-white border-b-2 text-lg"
                required
                autocomplete="tel"
              />
            </div>

            <button
              type="submit"
              class="flex gap-2 pt-3 mt-1 px-14 text-base font-medium text-center text-[#221C32] rounded-xl bg-white sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Submit
              <component
                class="mt-1"
                :is="FooterInfo[0].Footercomponents.icon"
              />
            </button>
          </form>
          <div class="flex justify-between pt-16 pb-14">
            <div class="w-1/3">
              <div class="gap-2 flex">
                <component
                  class=""
                  :is="FooterInfo[0].Footercomponents.icon3"
                />
                <p class="text-sm text-[#FFFFFF99]">
                  {{ FooterInfo[0].Footercomponents.title1 }}
                </p>
              </div>
              <p class="text-sm text-[#FFFFFF99] pt-3 w-44">
                {{ FooterInfo[0].Footercomponents.address }}
              </p>
            </div>
            <div class="w-1/3">
              <div class="gap-2 flex">
                <component
                  class=""
                  :is="FooterInfo[0].Footercomponents.icon2"
                />
                <p class="text-sm text-[#FFFFFF99]">
                  {{ FooterInfo[0].Footercomponents.title2 }}
                </p>
              </div>
              <p class="text-sm text-[#FFFFFF99] pt-3 w-44">
                {{ FooterInfo[0].Footercomponents.number }}
              </p>
            </div>
            <div class="w-1/5">
              <div class="gap-2 flex">
                <component
                  class=""
                  :is="FooterInfo[0].Footercomponents.icon1"
                />
                <p class="text-sm text-[#FFFFFF99]">
                  {{ FooterInfo[0].Footercomponents.title3 }}
                </p>
              </div>
              <p class="text-sm text-[#FFFFFF99] pt-3 w-44">
                {{ FooterInfo[0].Footercomponents.mail }}
              </p>
            </div>
          </div>
          <div>
            <h2 class="text-[#FFFFFF99]">
              {{ FooterInfo[0].Footercomponents.media }}
            </h2>
            <div class="flex gap-3 pt-3">
              <a href="#">
                <div
                  class="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#FFFFFF1A]"
                >
                  <component
                    class=""
                    :is="FooterInfo[0].Footercomponents.mediaicon1"
                  />
                </div>
              </a>
              <a href="#">
                <div
                  class="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#FFFFFF1A]"
                >
                  <component
                    class=""
                    :is="FooterInfo[0].Footercomponents.mediaicon2"
                  />
                </div>
              </a>
              <a href="#">
                <div
                  class="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#FFFFFF1A]"
                >
                  <component
                    class=""
                    :is="FooterInfo[0].Footercomponents.mediaicon3"
                  />
                </div>
              </a>
              <a href="#">
                <div
                  class="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#FFFFFF1A]"
                >
                  <component
                    class=""
                    :is="FooterInfo[0].Footercomponents.mediaicon4"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="sm:flex sm:items-center sm:justify-between mt-16">
        <component class="" :is="FooterInfo[0].Footercomponents.logo" />
        <div class="flex gap-[76px] md:pl-28">
          <router-link class="text-[#FFFFFF] text-lg" to="/"
            >COMPANY</router-link
          >
          <router-link class="text-[#FFFFFF] text-lg" to="/"
            >PROJECTS</router-link
          >
          <router-link class="text-[#FFFFFF] text-lg" to="/media"
            >MEDIA</router-link
          >
          <router-link class="text-[#FFFFFF] text-lg" to="/contact"
            >CONTACT</router-link
          >
        </div>
        <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
          <h2 class="text-[#FFFFFF] text-lg">All rights reseved</h2>
        </div>
      </div>
    </div>
  </footer>
</template>
