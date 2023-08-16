import { ref, markRaw } from "vue";
import IsolationMode from "../assets/images/IsolationMode.png";
import arrowRight from "../assets/icons/arrowRightPurle.vue";
import { reactive } from "vue";

export default (function useFooter() {
  const FooterInfo = ref([
    {
      Footercomponents: {
        title: "Contact",
        img: IsolationMode,
        icon: markRaw(arrowRight),
      },
    },
  ]);
  const contactFormData = reactive({
    name: "",
    phoneNumber: "",
    message: "",
  });

  const submitContactForm = () => {
    // submit logic

    clearContactForm();
  };

  const clearContactForm = () => {
    contactFormData.name = "";
    contactFormData.phoneNumber = "";
    contactFormData.message = "";
  };

  let instance = {
    FooterInfo,
    contactFormData,
    submitContactForm,
  };

  return () => {
    return instance;
  };
})();
