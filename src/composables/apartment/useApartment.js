import apartmentPlan from "@/assets/images/apartment/plan.png"
import ApartmentKitchenIcon from "@/assets/icons/Apartment/ApartmentKitchenIcon.vue"
import ApartmentHallIcon from "@/assets/icons/Apartment/ApartmentHallIcon.vue"
import ApartmentBedroomIcon from "@/assets/icons/Apartment/ApartmentBedroomIcon.vue"
import ApartmentTerraceIcon from "@/assets/icons/Apartment/ApartmentTerraceIcon.vue"
import ApartmentWCIcon from "@/assets/icons/Apartment/ApartmentWCIcon.vue"
import ApartmentClosetIcon from "@/assets/icons/Apartment/ApartmentClosetIcon.vue"
import imageDimensions from "@/helpers/imageDimensions"
import processPoints from "@/helpers/processPoints"
import {shallowRef} from "vue"

const {
    planWidth,
    planHeight
} = await imageDimensions(apartmentPlan).then(dimensions => dimensions).catch(err => console.log(err))
export default function useApartment() {
    const apartment = [
        {
            points: [1136, 797, 1147, 802, 1141, 813, 1226, 844, 1232, 834, 1513, 938, 1504, 966, 1629, 1012, 1636, 983, 1768, 1035, 1918, 498, 1965, 410, 1399, 240, 1383, 327],
            icon: ApartmentKitchenIcon,
            title: 'kitchen/living room',
            area: 20
        },
        {
            points: [331, 751, 137, 666, 183, 613, 98, 580, 203, 475, 281, 508, 315, 468, 324, 472, 361, 559, 456, 595],
            icon: ApartmentHallIcon,
            title: 'Hall',
            area: 8
        },
        {
            points: [701, 633, 838, 442, 1119, 539, 998, 746, 906, 709, 892, 735, 783, 693, 800, 673],
            icon: ApartmentBedroomIcon,
            title: 'Bedroom',
            area: 23
        },
        {
            points: [342, 780, 329, 757, 461, 600, 505, 614, 525, 585, 638, 628, 620, 657, 769, 717, 787, 692, 890, 731, 879, 757, 1117, 851, 1139, 811, 1231, 844, 1208, 887, 1493, 997, 1502, 965, 1629, 1012, 1616, 1044, 1766, 1102, 1667, 1456, 340, 878, 308, 824],
            icon: ApartmentTerraceIcon,
            title: 'Terrace',
            area: 24
        },
        {
            points: [1105, 439, 1143, 371, 1151, 281, 1193, 220, 1235, 235, 1255, 196, 1389, 240, 1375, 321, 1279, 497],
            icon: ApartmentWCIcon,
            title: 'WC',
            area: 9
        },
        {
            points: [346, 270, 489, 127, 860, 248, 864, 334, 844, 360, 755, 481, 601, 426, 583, 360, 542, 347, 497, 396, 486, 391, 465, 325, 392, 301, 381, 281],
            icon: ApartmentClosetIcon,
            title: 'Closet',
            area: 18
        },
        {
            points: [434, 532, 587, 359, 596, 426, 728, 475, 662, 571, 686, 576, 658, 614, 644, 625, 528, 583, 539, 570],
            icon: ApartmentBedroomIcon,
            title: 'Bedroom',
            area: 26
        }
    ]

    return shallowRef(processPoints(apartment, planWidth, planHeight))
}