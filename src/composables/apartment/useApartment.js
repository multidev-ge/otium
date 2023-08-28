import apartment from "@/assets/images/apartment/apartment.png";
import {ref} from "vue";

const {planWidth, planHeight} = await imageDimensions(apartment).then(dimensions => dimensions);

export default function useApartment() {
    return ref([
        {
            id: 1,
            points: '1136,797,1147,802,1141,813,1226,844,1232,834,1513,938,1504,966,1629,1012,1636,983,1768,1035,1918,498,1965,410,1399,240,1383,327',
        },
        {
            id: 2,
            points: '331,751,137,666,183,613,98,580,203,475,281,508,315,468,324,472,361,559,456,595',
        },
        {
            id: 3,
            points: '701,633,838,442,1119,539,998,746,906,709,892,735,783,693,800,673',

        },
        {
            id: 4,
            points: '342,780,329,757,461,600,505,614,525,585,638,628,620,657,769,717,787,692,890,731,879,757,1117,851,1139,811,1231,844,1208,887,1493,997,1502,965,1629,1012,1616,1044,1766,1102,1667,1456,340,878,308,824',
        },
        {
            id: 5,
            points: '1105,439,1143,371,1151,281,1193,220,1235,235,1255,196,1389,240,1375,321,1279,497',
        },
        {
            id: 6,
            points: '346,270,489,127,860,248,864,334,844,360,755,481,601,426,583,360,542,347,497,396,486,391,465,325,392,301,381,281',
        },
        {
            id: 7,
            points: '434,532,587,359,596,426,728,475,662,571,686,576,658,614,644,625,528,583,539,570',

        },
    ].map((room) => createProcessedApartment(room)));
}

function imageDimensions(imagePath) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function () {
            resolve({
                planWidth: img.naturalWidth,
                planHeight: img.naturalHeight
            });
        };
        img.onerror = function (error) {
            reject(error);
        };
        img.src = imagePath;
    });
}

function createProcessedApartment(apartment) {
    const values = apartment.points.split(',').map(Number);
    const pairs = [];

    for (let i = 0; i < values.length; i += 2) {
        if (i + 1 < values.length) {
            pairs.push(`${values[i]} ${values[i + 1]}`);
        }
    }
    apartment.points = pairs;

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