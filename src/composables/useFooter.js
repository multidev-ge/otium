import { ref, markRaw } from "vue";
import IsolationMode from "../assets/images/IsolationMode.png";
import arrowRight from "../assets/icons/arrowRightPurle.vue";
import mail from "../assets/icons/mail.vue";
import phone from "../assets/icons/phone.vue";
import address from "../assets/icons/address.vue";
import youtube from "../assets/icons/youtube.vue";
import Linked from "../assets/icons/in.vue";
import facebook from "../assets/icons/facebook.vue";
import instagram from "../assets/icons/instagram.vue";
import footerlogo from "../assets/icons/footerlogo.vue"
import otiumm from "../assets/images/otiumm.png"
import { reactive } from "vue";

export default (function useFooter() {
  const FooterInfo = ref([
    {
      Footercomponents: {
        title: "Contact",
        img: IsolationMode,
        icon: markRaw(arrowRight),
        icon1: markRaw(mail),
        icon2: markRaw(phone),
        icon3: markRaw(address),
        title1: "Address",
        title2: "Phone",
        title3: "Email",
        address: "Ilia Chavchavadze avenue N50, Tbilisi, Georgia",
        number: "+995 592 35 45 65",
        mail: "Info@otium.ge",
        media: "Social media",
        mediaicon1:markRaw(facebook),
        mediaicon2:markRaw(instagram),
        mediaicon3:markRaw(Linked),
        mediaicon4:markRaw(youtube),
        logo:markRaw(footerlogo),
        otiumlogo: otiumm,
      },
    },
  ]);
  const contactFormData = reactive({
    name: "",
    phone: "",
    message: "",
  });

  const submitContactForm = async () => {
    // submit logic
    console.log(contactFormData)
    const response = await axios.post('contact', {...contactFormData})
    console.log(response)

    clearContactForm();
  };

  const clearContactForm = () => {
    contactFormData.name = "";
    contactFormData.phone = "";
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
