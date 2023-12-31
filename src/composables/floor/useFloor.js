import floorPlan from "@/assets/images/floor/plan.png";
import imageDimensions from "@/helpers/imageDimensions";
import processPoints from "@/helpers/processPoints";
import {ref} from "vue";

const {
    planWidth,
    planHeight
} = await imageDimensions(floorPlan).then(dimensions => dimensions).catch(err => console.log(err));
export default function useFloor() {
    return ref(Array.from({length: 10}, () => [
        {
            points: [0, 0, 179, 0, 179, 239, 258, 239, 258, 287, 267, 287, 267, 471, 267, 534, 0, 534],
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            points: [179, 0, 352, 0, 352, 239, 179, 239],
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            points: [352, 0, 596, 0, 596, 239, 352, 239],
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            points: [596, 0, 852, 0, 852, 239, 596, 239],
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            points: [852, 0, 1199, 0, 1199, 262, 1088, 262, 1088, 300, 1031, 300, 1031, 224, 978, 224, 978, 239, 852, 239],
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            points: [934, 238, 978, 239, 978, 224, 1031, 224, 1031, 300, 1088, 300, 1088, 262, 1199, 262, 1199, 534, 934, 534],
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            points: [604, 287, 787, 287, 787, 362, 855, 362, 855, 467, 772, 467, 772, 534, 604, 534],
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            points: [347, 287, 604, 287, 604, 534, 347, 534],
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        }
    ]).map(apartment => processPoints(apartment, planWidth, planHeight)));
}