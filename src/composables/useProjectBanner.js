import plan from '@/assets/images/01_00001.jpg'
import imageDimensions from "@/helpers/imageDimensions";
import processPoints from "@/helpers/processPoints";
import { ref } from "vue";

const {
    planWidth,
    planHeight
} = await imageDimensions(plan).then(dimensions => dimensions).catch(err => console.log(err));

export function useProjectBanner() {
    const floors = processPoints([
        {
            points: [1144, 331, 1144, 373, 1100, 293, 775, 276, 776, 225, 1100, 245],
            floor: 13,
            pos: 'left',
            details: [
                { name: "Apartments", value: "3/12" },
                { name: "Prices", value: "$30,000 - $60,000" },
                { name: "Sizes m2", value: "64.0 - 110.0" },
                { name: "Rooms", value: "2 - 6" },
            ]
        },
        {
            points: [1144, 413, 1144, 373, 1100, 293, 775, 276, 774, 327, 1099, 343],
            floor: 12,
            pos: 'left',
            details: [
                { name: "Apartments", value: "6/12" },
                { name: "Prices", value: "$30,000 - $60,000" },
                { name: "Sizes m2", value: "64.0 - 110.0" },
                { name: "Rooms", value: "2 - 6" },
            ]
        },
        {
            points: [1144, 413, 1143, 454, 1098, 392, 773, 378, 774, 327, 1099, 343],
            floor: 11,
            pos: 'left',
            details: [
                { name: "Apartments", value: "7/12" },
                { name: "Prices", value: "$30,000 - $60,000" },
                { name: "Sizes m2", value: "64.0 - 110.0" },
                { name: "Rooms", value: "2 - 6" },
            ]
        },
        {
            points: [1144, 495, 1143, 454, 1098, 392, 773, 378, 771, 431, 1097, 442],
            floor: 10,
            pos: 'left',
            details: [
                { name: "Apartments", value: "4/12" },
                { name: "Prices", value: "$30,000 - $60,000" },
                { name: "Sizes m2", value: "64.0 - 110.0" },
                { name: "Rooms", value: "2 - 6" },
            ]
        },
        {
            points: [1144, 495, 1143, 537, 1097, 493, 769, 484, 771, 431, 1097, 442],
            floor: 9,
            pos: 'left',
            details: [
                { name: "Apartments", value: "4/12" },
                { name: "Prices", value: "$30,000 - $60,000" },
                { name: "Sizes m2", value: "64.0 - 110.0" },
                { name: "Rooms", value: "2 - 6" },
            ]
        },
        {
            points: [1142, 577, 1143, 537, 1097, 493, 795, 484, 793, 536, 1097, 543],
            floor: 8,
            pos: 'left',
            details: [
                { name: "Apartments", value: "4/12" },
                { name: "Prices", value: "$30,000 - $60,000" },
                { name: "Sizes m2", value: "64.0 - 110.0" },
                { name: "Rooms", value: "2 - 6" },
            ]
        },
        {
            points: [1142, 577, 1141, 619, 1098, 595, 792, 588, 793, 536, 1097, 543],
            floor: 7,
            pos: 'left',
            details: [
                { name: "Apartments", value: "4/12" },
                { name: "Prices", value: "$30,000 - $60,000" },
                { name: "Sizes m2", value: "64.0 - 110.0" },
                { name: "Rooms", value: "2 - 6" },
            ]
        },
        {
            points: [1141, 661, 1141, 619, 1098, 595, 792, 588, 791, 643, 1097, 646],
            floor: 6,
            pos: 'left',
            details: [
                { name: "Apartments", value: "4/12" },
                { name: "Prices", value: "$30,000 - $60,000" },
                { name: "Sizes m2", value: "64.0 - 110.0" },
                { name: "Rooms", value: "2 - 6" },
            ]
        },
        {
            points: [1141, 661, 1142, 704, 1098, 697, 790, 696, 791, 643, 1097, 646],
            floor: 5,
            pos: 'left',
            details: [
                { name: "Apartments", value: "4/12" },
                { name: "Prices", value: "$30,000 - $60,000" },
                { name: "Sizes m2", value: "64.0 - 110.0" },
                { name: "Rooms", value: "2 - 6" },
            ]
        },
        {
            points: [1141, 747, 1142, 704, 1098, 697, 790, 696, 788, 750, 1099, 749],
            floor: 4,
            pos: 'left',
            details: [
                { name: "Apartments", value: "4/12" },
                { name: "Prices", value: "$30,000 - $60,000" },
                { name: "Sizes m2", value: "64.0 - 110.0" },
                { name: "Rooms", value: "2 - 6" },
            ]
        },
        {
            points: [1141, 747, 1141, 790, 1099, 801, 787, 805, 788, 750, 1099, 749],
            floor: 3,
            pos: 'left',
            details: [
                { name: "Apartments", value: "4/12" },
                { name: "Prices", value: "$30,000 - $60,000" },
                { name: "Sizes m2", value: "64.0 - 110.0" },
                { name: "Rooms", value: "2 - 6" },
            ]
        },
        {
            points: [362,2033,1325,2030,1410,1959,1410,2086,1311,2171,362,2174],
            // points: [1141, 834, 1141, 790, 1099, 801, 787, 805, 786, 859, 1100, 854],
            floor: 2,
            pos: 'left',
            details: [
                { name: "Apartments", value: "4/12" },
                { name: "Prices", value: "$30,000 - $60,000" },
                { name: "Sizes m2", value: "64.0 - 110.0" },
                { name: "Rooms", value: "2 - 6" },
            ]
        },
        {
            points: [359,2199,1322,2196,1413,2100,1410,2185,1322,2294,362,2291],
            // points: [1141, 834, 1140, 877, 1095, 907, 785, 915, 786, 859, 1100, 854],
            floor: 1,
            pos: 'left',
            details: [
                { name: "Apartments", value: "4/12" },
                { name: "Prices", value: "$30,000 - $60,000" },
                { name: "Sizes m2", value: "64.0 - 110.0" },
                { name: "Rooms", value: "2 - 6" },
            ]
        },
        {
            points: [2595,2335,2510,2236,2510,2145,2595,2233,3544,2233,3544,2339],
            // points: [1141, 834, 1140, 877, 1095, 907, 785, 915, 786, 859, 1100, 854],
            floor: 14,
            pos: 'right',
            details: [
                { name: "Apartments", value: "4/12" },
                { name: "Prices", value: "$30,000 - $60,000" },
                { name: "Sizes m2", value: "64.0 - 110.0" },
                { name: "Rooms", value: "2 - 6" },
            ]
        },
    ], planWidth, planHeight)
    //calculating tooltip position in percentage
    console.log(floors)
    floors.map(e => {
        const [x1, y1, x2, y2] = e.coords.slice(0, 4)
        const [z1, v1, z2, v2] = e.coords.slice(-4)

        console.log('left:', x1,x2,y1,y2)
        console.log('right:', z1, v1, z2, v2)
        e.tooltip_pos = {
            top: `${(y1 + y2) / (2 * planHeight) * 100}%`,
            left: `${(x1 + x2) / (1.2 * planWidth) * 100}%`,
            right: `${(v1 + v2) / (2.9 * planWidth) * 100}%`,
        }
    })
    const popupIsOpen = ref(false)
    const floorHovered = ref(false)
    const currentFloor = ref()
    const currentFloorNum = ref()
    function openPopup() {
        popupIsOpen.value = true
        document.body.style.overflow = 'hidden'
    }
    function closePopup() {
        popupIsOpen.value = false
        document.body.style.overflow = 'scroll'
    }

    function showTooltip(floor) {
        currentFloor.value = floor
        floorHovered.value = true
    }

    function hideTooltip() {
        floorHovered.value = false
    }


    return {
        data: { floors, popupIsOpen, floorHovered, currentFloor, currentFloorNum },
        functions: { openPopup, closePopup, showTooltip, hideTooltip }
    }
}