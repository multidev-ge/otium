import {ref} from "vue";
import RightArrow from "@/assets/icons/RightArrow.vue";

export default function useForm() {
    return {
        name: ref(""),
        phoneNumber: ref(""),
        message: ref(""),
        // send: () => {
        // function to handle form submit
        // },
        label: "Send",
        RightArrow,
    }
}