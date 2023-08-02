import Phone from "@/assets/icons/Phone.vue";
import Envelope from "@/assets/icons/Envelope.vue";
import LocationDot from "@/assets/icons/LocationDot.vue";

export default function useInfo() {
    return [
        {
            icon: Phone,
            label: "Phone",
            text: "+995 577 777 777",
        },
        {
            icon: Envelope,
            label: "Email",
            text: "Info@Otium.ge",
        },
        {
            icon: LocationDot,
            label: "Address",
            text: "3 Iakob Nikoladze St. 0179, Tbilisi, Georgia",
        }
    ];
};