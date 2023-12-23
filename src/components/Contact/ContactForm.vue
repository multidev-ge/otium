<script>
import { mapActions } from "vuex"
import ContactRightArrowIcon from "@/assets/icons/Contact/ContactRightArrowIcon.vue"
import { useI18n } from "vue-i18n"
export default {
  props: {
    messageField: {
      required: false,
      default: true
    }
  },
  components: {
    ContactRightArrowIcon,
  },
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
    message: {
      get() {
        return this.$store.state.contact.message
      },
      set(value) {
        this.$store.commit('contact/SET_MESSAGE', value)
      }
    },
  },
  setup() {
    const { t } = useI18n({ useScope: "global" })
    return { t }
  },
  methods: {
    async formSubmited(){
      await this.submitContact()
      this.$emit('formSubmited')
    },
    ...mapActions('contact', ['submitContact'])
  }
}
</script>

<template>
  <!-- Contact From -->
  <form @submit.prevent="formSubmited" class="font-medium space-y-7 w-full">
    <input v-model="name" name="name" type="text" :placeholder="t('contact.placeholders.name')"
      class="block w-full rounded-md border border-opacity-30 leading-6 pt-[11px] pb-[13px] pl-[22px]" required>
    <input v-model="phone" name="phone-number" type="tel" :placeholder="t('contact.placeholders.phone')"
      class="block w-full rounded-md border border-opacity-30 leading-6 pt-[11px] pb-[13px] pl-[22px]" required>

    <textarea v-if="messageField" v-model="message" name="message" :placeholder="t('contact.placeholders.message')"
      class="block w-full resize-none rounded-md border border-opacity-30 leading-6 h-[142px] pt-[11px] pl-[22px]"
      required />
    <slot name="submitButton">
      <button type="submit"
        class="max-md:!mt-[25px] w-full md:w-48 flex items-center justify-center bg-black hover:bg-[#883F7C] text-white px-6 py-3 rounded-2xl gap-x-1.5 lg:float-right transition duration-100 ease-in-out">
        {{ t("contact.send") }}
        <contact-right-arrow-icon />
      </button>
    </slot>
  </form>
</template>