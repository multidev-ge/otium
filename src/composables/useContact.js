import ContactPhoneIcon from "@/assets/icons/ContactPhoneIcon.vue";
import ContactEnvelopeIcon from "@/assets/icons/ContactEnvelopeIcon.vue";
import ContactLocationDotIcon from "@/assets/icons/ContactLocationDotIcon.vue";
import {reactive} from "vue";

function useForm() {
    const contactInfo = [
        {
            icon: ContactPhoneIcon,
            label: "Phone",
            text: "+995 577 777 777"
        },
        {
            icon: ContactEnvelopeIcon,
            label: "Email",
            text: "Info@Otium.ge"
        },
        {
            icon: ContactLocationDotIcon,
            label: "Address",
            text: "3 Iakob Nikoladze St. 0179, Tbilisi, Georgia"
        }
    ];


    const contactFormData = reactive({
        name: "",
        phoneNumber: "",
        message: ""
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

    return {
        contactInfo,
        contactFormData,
        submitContactForm
    };
}

export default useForm();