<script setup>
import useFooter from "@/composables/useFooter";
import useHeader from "@/composables/useHeader";

const { headerInfo } = useHeader();
const { FooterInfo, contactFormData, submitContactForm } = useFooter();
</script>
<template>
  <footer class="bg-[#000000] mt-12">
    <div class="mx-auto  py-20 justify-between w-full  md:px-0">
      <div class="md:flex gap-8 ">
        <div class="mb-6 md:mb-0 w-[45%] px-4">
          <h2 class="text-[#FFFFFF] text-3xl">
            {{ FooterInfo[0].Footercomponents.title }}
          </h2>
        </div>

        <div class="md:px-4 w-[100%] ">
          <form
            @submit.prevent="submitContactForm"
            class="md:flex md:gap-14 justify-between gap-4 px-4"
          >
            <div class="md:w-1/3 mb-7 md:mb-0 ">
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
            <div class="md:w-1/3 mb-12 md:mb-0">
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
              class="flex gap-2 sm:w-full md:pt-3 px-6 py-3 w-full justify-center md:mt-1 md:px-14 text-base font-medium text-center text-[#221C32] rounded-xl bg-white  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Submit
              <component
                class="mt-1"
                :is="FooterInfo[0].Footercomponents.icon"
              />
            </button>
          </form>
          <div class="md:flex justify-between pt-16 pb-14">
            <div class="md:w-1/3 px-4 ">
              <div class="gap-2 flex">
                <component
                  class=""
                  :is="FooterInfo[0].Footercomponents.icon3"
                />
                <p class="text-sm text-[#FFFFFF99]">
                  {{ FooterInfo[0].Footercomponents.title1 }}
                </p>
              </div>
              <p
                class="text-sm text-[#FFFFFF99] pt-3 md:w-44  mb-7 md:mb-0"
              >
                {{ FooterInfo[0].Footercomponents.address }}
              </p>
            </div>
            <div class="flex gap-14 px-4">
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
          </div>
          <div class="">
            <h2 class="text-[#FFFFFF99] px-4">
              {{ FooterInfo[0].Footercomponents.media }}
            </h2>
            <div class="flex gap-3 pt-3 px-4 ">
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
            <div class="grid grid-cols-2 gap-y-4 md:gap-[76px] md:pl-28 pt-11 px-4">
              <router-link to="/company">
                  <a
                    href="#"
                    class="text-lg font-medium leading-6 text-[#FFFFFF]"
                  >
                    {{ headerInfo[0].headercomponents.title }}
                  </a>
                </router-link>
                <router-link to="/projects">
                  <a
                    href="#"
                    class="text-lg font-medium leading-6 text-[#FFFFFF]"
                  >
                    {{ headerInfo[0].headercomponents.title1 }}
                  </a>
                </router-link>
                <router-link to="/media">
                  <a
                    href="#"
                    class="text-lg font-medium leading-6 text-[#FFFFFF]"
                  >
                    {{ headerInfo[0].headercomponents.title2 }}
                  </a>
                </router-link>
                <router-link to="/contact">
                  <a
                    href="#"
                    class="text-lg font-medium leading-6 text-[#FFFFFF]"
                  >
                    {{ headerInfo[0].headercomponents.title3 }}
                  </a>
                </router-link>
            </div>
            
            <div class="mt-14 ">
                <div class="relative  justify-center flex ">
              <img
                class="absolute "
                :src="FooterInfo[0].Footercomponents.img"
                alt=""
              />
            </div>
            <img
              class=""
              :src="FooterInfo[0].Footercomponents.otiumlogo"
              alt=""
            />
            </div>
          </div>
        </div>
      </div>
      <div class="px-4">
      <hr
        class="my-6   border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
        </div>
      <div class="sm:grid sm:justify-center px-4 sm:items-center  mt-16">
        <div class="flex mt-4 justify-center space-x-5 sm:justify-center sm:mt-0">
          <h2 class="text-[#FFFFFF] text-lg">POWERED BY</h2>
          <h2 class="text-[#61C5E2] text-lg">GROWTH HUNTERS</h2>
        </div>
        <div class="justify-center flex pt-7">
          <h2 class="text-[#FFFFFF] text-lg md:pl-36">ALL RIGHTS RESERVED</h2>
        </div>
      </div>
    </div>
  </footer>
</template>
