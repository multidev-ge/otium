import plan from "@/assets/images/floor/plan.png";
import {ref} from "vue";

const {planWidth, planHeight} = imageDimensions(plan);
export default function useFloor() {
    const apartments = [
        {
            points: ["0 0", "179 0", "179 239", "258 239", "258 287", "267 287", "267 471", "267 534", "0 534"],
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            points: ["179 0", "352 0", "352 239", "179 239"],
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            points: ["352 0", "596 0", "596 239", "352 239"],
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            points: ["596 0", "852 0", "852 239", "596 239"],
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            points: ["852 0", "1199 0", "1199 262", "1088 262", "1088 300", "1031 300", "1031 224", "978 224", "978 239", "852 239"],
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            points: ["934 238", "978 239", "978 224", "1031 224", "1031 300", "1088 300", "1088 262", "1199 262", "1199 534", "934 534"],
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            points: ["604 287", "787 287", "787 362", "855 362", "855 467", "772 467", "772 534", "604 534"],
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            points: ["347 287", "604 287", "604 534", "347 534"],
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        }
    ];

    // block
    return Array.from({length: 10}, () =>
        apartments.map(createProcessedApartment)
    );
}

function imageDimensions(imagePath) {
    const img = new Image();
    img.src = imagePath;
    return {
        planWidth: img.naturalWidth,
        planHeight: img.naturalHeight
    };
}

function createProcessedApartment(apartment) {
    return {
        ...apartment,
        ...apartmentDimensionsInPercentage(apartment.points)
    };
}

function apartmentDimensionsInPercentage(points) {
    const {minX, minY, width, height} = apartmentDimensions(points);

    return {
        top: (minY / planHeight) * 100 + '%',
        left: (minX / planWidth) * 100 + '%',
        width: (width / planWidth) * 100 + '%',
        height: (height / planHeight) * 100 + '%',
        points: points.map(point => {
            const [x, y] = point.split(' ').map(Number);
            const xPercentage = ((x - minX) / width) * 100;
            const yPercentage = ((y - minY) / height) * 100;
            return `${xPercentage}% ${yPercentage}%`;
        })
    };
}

function apartmentDimensions(polygonPoints) {
    let minX = Infinity, maxX = -Infinity,
        minY = Infinity, maxY = -Infinity;

    for (let i = 0; i < polygonPoints.length; i++) {
        const [x, y] = polygonPoints[i].split(' ').map(Number);

        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
    }

    return {
        width: maxX - minX,
        height: maxY - minY,
        minX,
        minY
    };
}