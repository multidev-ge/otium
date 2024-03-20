<script>
import { useI18n } from "vue-i18n"
import { mapActions } from "vuex"
import useFooter from "@/composables/useFooter"
import useHeader from "@/composables/useHeader"
export default {
  props: ['content'],
  computed: {
    name: {
      get() {
        return this.$store.state.contact.name
      },
      set(value) {
        this.$store.commit('contact/SET_NAME', value)
      }
    },
    phone: {
      get() {
        return this.$store.state.contact.phone
      },
      set(value) {
        this.$store.commit('contact/SET_PHONE', value)
      }
    },
  },
  methods: {
    ...mapActions('contact', ['submitContact'])
  },
  setup() {

    const { headerInfo, menu } = useHeader()
    const { FooterInfo } = useFooter()
    const { t } = useI18n({ useScope: 'global' })

    return {
      t,
      headerInfo,
      FooterInfo,
      menu,
    }
  },
}
</script>
<template>
  <footer class="bg-[#000000] w-full mt-12">
    <div class="container mx-auto py-20">
      <div class="block md:block xl:block gap-8">
        <div class="mb-6 md:mb-0 flex">
          <!-- <h2 class="text-[#FFFFFF] text-3xl"></h2> -->
          <div class="mb-6 md:mb-0 w-[45%]">
            <h2 class="text-[#FFFFFF] text-[32px] leading-[40px]	">
              {{ t("footer.contact") }}
            </h2>
            <img class="hidden md:block w-[415px] h-[251px] color-[#923B80]" :src="FooterInfo[0].Footercomponents.img" alt="" />
          </div>
          <div class="md:px-4 w-[100%]">
            <form @submit.prevent="submitContact" class="md:flex md:gap-8 justify-between gap-4">
              <div class="md:w-1/3 mb-7 md:mb-0">
                <label for="text" class="block text-base font-medium text-[#FFFFFF99]">{{ t("formLabels.name") }}</label>
                <input v-model="name" id="text" type="text"
                  class="border-[#FFFFFF4D] block w-full bg-black outline-0 focus:outline-none text-white border-b-2 text-lg"
                  required autocomplete="name" />
              </div>
              <div class="md:w-1/3 mb-12 md:mb-0">
                <label for="tel" class="block text-base font-medium text-[#FFFFFF99]">{{ t("formLabels.phone") }}</label>
                <input v-model="phone" id="tel" type="tel"
                  class="border-[#FFFFFF4D] block w-full bg-black outline-0 focus:outline-none text-white border-b-2 text-lg"
                  required autocomplete="tel" />
              </div>

              <button type="submit"
                class="flex gap-2 md:pt-3 px-6 py-3 w-full justify-center md:mt-1 md:px-14 text-base font-medium text-center text-[#221C32] rounded-xl bg-white sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                {{ t("footer.submit") }}
                <component class="mt-1" :is="FooterInfo[0].Footercomponents.icon" />
              </button>
            </form>
            <div class="md:flex justify-between pt-16 pb-14">
              <div class="w-1/3">
                <div class="gap-2 flex">
                  <component class="" :is="FooterInfo[0].Footercomponents.icon3" />
                  <p class="text-sm leading-[18px] text-[#FFFFFF99]">
                    {{ t("footer.address") }}
                  </p>
                </div>
                <p class="text-[16px] leading-[24px] text-[#FFFFFF99] pt-3 md:w-44 w-[344px] mb-7 md:mb-0">
                  {{ content.address }}
                </p>
              </div>
              <div class="w-1/3">
                <div class="gap-2 flex">
                  <component class="" :is="FooterInfo[0].Footercomponents.icon2" />
                  <p class="text-sm leading-[18px] text-[#FFFFFF99]">
                    {{ t("footer.phone") }}
                  </p>
                </div>
                <p class="text-[16px] leading-[24px] text-[#FFFFFF99] pt-3 w-44">
                  {{ content?.phone }}
                </p>
              </div>
              <div class="w-1/5">
                <div class="gap-2 flex">
                  <component class="" :is="FooterInfo[0].Footercomponents.icon1" />
                  <p class="text-sm leading-[18px] text-[#FFFFFF99]">
                    {{ t("footer.email") }}
                  </p>
                </div>
                <p class="text-[16px] leading-[24px] text-[#FFFFFF99] pt-3 w-44">
                  {{ content?.email }}
                </p>
              </div>
            </div>
            <div>
              <h2 class="text-[#FFFFFF99] text-[14px] leading-[18px] font-medium	">
                {{ t("footer.social") }}
              </h2>
              <div class="flex flex-row justiry-between w-full">
                <div class="flex gap-3 pt-3">
                  <a href="#">
                    <div class="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#923B80]">
                      <component class="" :is="FooterInfo[0].Footercomponents.mediaicon1" />
                    </div>
                  </a>
                  <a href="#">
                    <div class="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#923B80]">
                      <component class="" :is="FooterInfo[0].Footercomponents.mediaicon2" />
                    </div>
                  </a>
                  <a href="#">
                    <div class="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#923B80]">
                      <component class="" :is="FooterInfo[0].Footercomponents.mediaicon3" />
                    </div>
                  </a>
                  <a href="#">
                    <div class="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#923B80]">
                      <component class="" :is="FooterInfo[0].Footercomponents.mediaicon4" />
                    </div>
                  </a>
                </div>
                <div class="flex gap-[71px] lg:gap-[71px] md:pl-20 lg:pl-28 md:gap-10 flex-1 items-center justify-end whitespace-nowrap">
                    <router-link v-if="menu" v-for="item in menu" :to="item?.url" class="text-lg font-medium leading-6 text-[#FFFFFF]" v-text="item?.title"/>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between mt-16">
          <router-link to="/">
            <component class="" :is="FooterInfo[0].Footercomponents.logo" />
          </router-link>
          <div class="flex">
            <h2 class="text-[#FFFFFF] text-lg md:pl-36 leading-[32px] font-medium whitespace-nowrap">{{ t("footer.rights")
            }}</h2>
            <div class="w-full"></div>
          </div>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <h2 class="text-[#FFFFFF] text-lg leading-[32px] font-medium	">{{ t("footer.powered") }}</h2>
            <h2 class="text-[#61C5E2] text-lg font-bold	 leading-[32px]">{{ t("footer.growth_hunters") }}</h2>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
