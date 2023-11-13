import ContactPhoneIcon from "@/assets/icons/Contact/ContactPhoneIcon.vue"
import ContactEnvelopeIcon from "@/assets/icons/Contact/ContactEnvelopeIcon.vue"
import ContactLocationDotIcon from "@/assets/icons/Contact/ContactLocationDotIcon.vue"
import { reactive } from "vue"
import axios from "../interceptors/axios"

export default function useContact() {
    
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
    ]

    const contactFormData = reactive({
        name: "",
        phone: "",
        message: ""
    })

    const submitContactForm = async () => {
        // submit logic
        console.log(contactFormData)

        const response = await axios.post('contact', {...contactFormData})

        console.log(response)
        
        clearContactForm()
    }

    const clearContactForm = () => {
        contactFormData.name = ""
        contactFormData.phone = ""
        contactFormData.message = ""
    }

    return {
        contactInfo,
        contactFormData,
        submitContactForm
    }
}