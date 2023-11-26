import plan from '@/assets/images/01_00001.jpg'
import imageDimensions from "@/helpers/imageDimensions";
import processPoints from "@/helpers/processPoints";
import { ref } from "vue";

const {
    planWidth,
    planHeight
} = await imageDimensions(plan).then(dimensions => dimensions).catch(err => console.log(err));

const leftBlock = [
    {
        points: [
            // x / y
            359,2200, // tl
            355,2367, // bl
            1330,2367, // bm
            1518,2117, // br
            1521,1996, // tr
            1327,2200 // tm
        ],
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
        points: [
            // x / y
            359,(2200 - 165), // tl
            355,(2367 - 165), // bl
            1330,(2367 - 165), // bm
            1518,(2117 - 110), // br
            1521,(1996 - 120), // tr
            1327,(2200 - 165) // tm
        ],
        // points: [1141, 834, 1140, 877, 1095, 907, 785, 915, 786, 859, 1100, 854],
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
        points: [
            // x / y
            359,(2200 - 165 * 2), // tl
            355,(2367 - 165 * 2), // bl
            1330,(2367 - 165 * 2), // bm
            1518,(2117 - 110 * 2), // br
            1521,(1996 - 120 * 2), // tr
            1327,(2200 - 165 * 2) // tm
        ],
        // points: [1141, 834, 1140, 877, 1095, 907, 785, 915, 786, 859, 1100, 854],
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
        points: [
            // x / y
            359,(2200 - 165 * 3), // tl
            355,(2367 - 165 * 3), // bl
            1330,(2367 - 165 * 3), // bm
            1518,(2117 - 110 * 3), // br
            1521,(1996 - 120 * 3), // tr
            1327,(2200 - 165 * 3) // tm
        ],
        // points: [1141, 834, 1140, 877, 1095, 907, 785, 915, 786, 859, 1100, 854],
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
        points: [
            // x / y
            359,(2200 - 165 * 4), // tl
            355,(2367 - 165 * 4), // bl
            1330,(2367 - 165 * 4), // bm
            1518,(2117 - 110 * 4), // br
            1521,(1996 - 120 * 4), // tr
            1327,(2200 - 165 * 4) // tm
        ],
        // points: [1141, 834, 1140, 877, 1095, 907, 785, 915, 786, 859, 1100, 854],
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
        points: [
            // x / y
            359,(2200 - 165 * 5), // tl
            355,(2367 - 165 * 5), // bl
            1330,(2367 - 165 * 5), // bm
            1518,(2117 - 110 * 5), // br
            1521,(1996 - 120 * 5), // tr
            1327,(2200 - 165 * 5) // tm
        ],
        // points: [1141, 834, 1140, 877, 1095, 907, 785, 915, 786, 859, 1100, 854],
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
        points: [
            // x / y
            359,(2200 - 165 * 6), // tl
            355,(2367 - 165 * 6), // bl
            1330,(2367 - 165 * 6), // bm
            1518,(2117 - 110 * 6), // br
            1521,(1996 - 120 * 6), // tr
            1327,(2200 - 165 * 6) // tm
        ],
        // points: [1141, 834, 1140, 877, 1095, 907, 785, 915, 786, 859, 1100, 854],
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
        points: [
            // x / y
            359,(2200 - 165 * 7), // tl
            355,(2367 - 165 * 7), // bl
            1330,(2367 - 165 * 7), // bm
            1518,(2117 - 110 * 7), // br
            1521,(1996 - 120 * 7), // tr
            1327,(2200 - 165 * 7) // tm
        ],
        // points: [1141, 834, 1140, 877, 1095, 907, 785, 915, 786, 859, 1100, 854],
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
        points: [
            // x / y
            359,(2200 - 165 * 8), // tl
            355,(2367 - 165 * 8), // bl
            1330,(2367 - 165 * 8), // bm
            1518,(2117 - 110 * 8), // br
            1521,(1996 - 120 * 8), // tr
            1327,(2200 - 165 * 8) // tm
        ],
        // points: [1141, 834, 1140, 877, 1095, 907, 785, 915, 786, 859, 1100, 854],
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
        points: [
            // x / y
            359,(2200 - 165 * 9), // tl
            355,(2367 - 165 * 9), // bl
            1330,(2367 - 165 * 9), // bm
            1518,(2117 - 110 * 9), // br
            1521,(1996 - 120 * 9), // tr
            1327,(2200 - 165 * 9) // tm
        ],
        // points: [1141, 834, 1140, 877, 1095, 907, 785, 915, 786, 859, 1100, 854],
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
        points: [
            // x / y
            359,(2200 - 165 * 10), // tl
            355,(2367 - 165 * 10), // bl
            1330,(2367 - 165 * 10), // bm
            1518,(2117 - 110 * 10), // br
            1521,(1996 - 120 * 10), // tr
            1327,(2200 - 165 * 10) // tm
        ],
        // points: [1141, 834, 1140, 877, 1095, 907, 785, 915, 786, 859, 1100, 854],
        floor: 11,
        pos: 'left',
        details: [
            { name: "Apartments", value: "4/12" },
            { name: "Prices", value: "$30,000 - $60,000" },
            { name: "Sizes m2", value: "64.0 - 110.0" },
            { name: "Rooms", value: "2 - 6" },
        ]
    }
]

const rightBlock = [
    {
        points: [
            // x / y
            3608,2236, // tr
            3610,2403, // br
            2592,2403, // bm
            2408,2117, // bl
            2408,2001, // tl
            2588,2236 // tm
        ],
        // points: [1141, 834, 1140, 877, 1095, 907, 785, 915, 786, 859, 1100, 854],
        floor: 1,
        pos: 'right',
        details: [
            { name: "Apartments", value: "4/12" },
            { name: "Prices", value: "$30,000 - $60,000" },
            { name: "Sizes m2", value: "64.0 - 110.0" },
            { name: "Rooms", value: "2 - 6" },
        ]
    },
    {
        points: [
            // x / y
            3608,(2236 - 165), // tr
            3608,(2403 - 165), // br
            2588,(2403 - 165), // bm
            2408,(2117 - 110), // bl
            2408,(2001 - 120), // tl
            2588,(2236 - 165) // tm
        ],
        // points: [1141, 834, 1140, 877, 1095, 907, 785, 915, 786, 859, 1100, 854],
        floor: 2,
        pos: 'right',
        details: [
            { name: "Apartments", value: "4/12" },
            { name: "Prices", value: "$30,000 - $60,000" },
            { name: "Sizes m2", value: "64.0 - 110.0" },
            { name: "Rooms", value: "2 - 6" },
        ]
    },
    {
        points: [
            // x / y
            3608,(2236 - 165 * 2), // tr
            3608,(2403 - 165 * 2), // br
            2588,(2403 - 165 * 2), // bm
            2408,(2117 - 110 * 2), // bl
            2408,(2001 - 120 * 2), // tl
            2588,(2236 - 165 * 2) // tm
        ],
        // points: [1141, 834, 1140, 877, 1095, 907, 785, 915, 786, 859, 1100, 854],
        floor: 3,
        pos: 'right',
        details: [
            { name: "Apartments", value: "4/12" },
            { name: "Prices", value: "$30,000 - $60,000" },
            { name: "Sizes m2", value: "64.0 - 110.0" },
            { name: "Rooms", value: "2 - 6" },
        ]
    },
    {
        points: [
            // x / y
            3608,(2236 - 165 * 3), // tr
            3608,(2403 - 165 * 3), // br
            2588,(2403 - 165 * 3), // bm
            2408,(2117 - 110 * 3), // bl
            2408,(2001 - 120 * 3), // tl
            2588,(2236 - 165 * 3) // tm
        ],
        // points: [1141, 834, 1140, 877, 1095, 907, 785, 915, 786, 859, 1100, 854],
        floor: 4,
        pos: 'right',
        details: [
            { name: "Apartments", value: "4/12" },
            { name: "Prices", value: "$30,000 - $60,000" },
            { name: "Sizes m2", value: "64.0 - 110.0" },
            { name: "Rooms", value: "2 - 6" },
        ]
    },
    {
        points: [
            // x / y
            3608,(2236 - 165 * 4), // tr
            3608,(2403 - 165 * 4), // br
            2588,(2403 - 165 * 4), // bm
            2408,(2117 - 110 * 4), // bl
            2408,(2001 - 120 * 4), // tl
            2588,(2236 - 165 * 4) // tm
        ],
        // points: [1141, 834, 1140, 877, 1095, 907, 785, 915, 786, 859, 1100, 854],
        floor: 5,
        pos: 'right',
        details: [
            { name: "Apartments", value: "4/12" },
            { name: "Prices", value: "$30,000 - $60,000" },
            { name: "Sizes m2", value: "64.0 - 110.0" },
            { name: "Rooms", value: "2 - 6" },
        ]
    },
    {
        points: [
            // x / y
            3608,(2236 - 165 * 5), // tr
            3608,(2403 - 165 * 5), // br
            2588,(2403 - 165 * 5), // bm
            2408,(2117 - 110 * 5), // bl
            2408,(2001 - 120 * 5), // tl
            2588,(2236 - 165 * 5) // tm
        ],
        // points: [1141, 834, 1140, 877, 1095, 907, 785, 915, 786, 859, 1100, 854],
        floor: 6,
        pos: 'right',
        details: [
            { name: "Apartments", value: "4/12" },
            { name: "Prices", value: "$30,000 - $60,000" },
            { name: "Sizes m2", value: "64.0 - 110.0" },
            { name: "Rooms", value: "2 - 6" },
        ]
    },
    {
        points: [
            // x / y
            3608,(2236 - 165 * 6), // tr
            3608,(2403 - 165 * 6), // br
            2588,(2403 - 165 * 6), // bm
            2408,(2117 - 110 * 6), // bl
            2408,(2001 - 120 * 6), // tl
            2588,(2236 - 165 * 6) // tm
        ],
        // points: [1141, 834, 1140, 877, 1095, 907, 785, 915, 786, 859, 1100, 854],
        floor: 7,
        pos: 'right',
        details: [
            { name: "Apartments", value: "4/12" },
            { name: "Prices", value: "$30,000 - $60,000" },
            { name: "Sizes m2", value: "64.0 - 110.0" },
            { name: "Rooms", value: "2 - 6" },
        ]
    },
    {
        points: [
            // x / y
            3608,(2236 - 165 * 7), // tr
            3608,(2403 - 165 * 7), // br
            2588,(2403 - 165 * 7), // bm
            2408,(2117 - 110 * 7), // bl
            2408,(2001 - 120 * 7), // tl
            2588,(2236 - 165 * 7) // tm
        ],
        // points: [1141, 834, 1140, 877, 1095, 907, 785, 915, 786, 859, 1100, 854],
        floor: 8,
        pos: 'right',
        details: [
            { name: "Apartments", value: "4/12" },
            { name: "Prices", value: "$30,000 - $60,000" },
            { name: "Sizes m2", value: "64.0 - 110.0" },
            { name: "Rooms", value: "2 - 6" },
        ]
    },
    {
        points: [
            // x / y
            3608,(2236 - 165 * 8), // tr
            3608,(2403 - 165 * 8), // br
            2588,(2403 - 165 * 8), // bm
            (2408 - 25 - 60),(2117 - 110 * 8 - 5), // bl
            (2408 - 24 - 60),(2001 - 120 * 8 + 100 - 6), // tl
            2588,(2236 - 165 * 8) // tm
        ],
        // points: [1141, 834, 1140, 877, 1095, 907, 785, 915, 786, 859, 1100, 854],
        floor: 9,
        pos: 'right',
        details: [
            { name: "Apartments", value: "4/12" },
            { name: "Prices", value: "$30,000 - $60,000" },
            { name: "Sizes m2", value: "64.0 - 110.0" },
            { name: "Rooms", value: "2 - 6" },
        ]
    },
    {
        // points: [
        //     // x / y
        //     3608,(2236 - 165 * 9), // tr
        //     3608,(2403 - 165 * 9), // br
        //     2588,(2403 - 165 * 9), // bm
        //     (2408 - 27-60 + 70),(2117 - 110 * 9 + 70 - 15 - 15), // bl +
        //     (2408 - 27-60 + 15),(2117 - 110 * 9 + 70 - 15 - 15), // bl +
        //     (2408 - 27-60),(2117 - 110 * 9 + 70 - 15), // bl
        //     (2408 - 27-60),(2001 - 120 * 9 + 70 + 150), // tl
        //     (2408 - 27-60 + 15),(2001 - 120 * 9 + 70 + 150 - 15), // tl + 
        //     (2408 - 27-60 + 15 + 55),(2001 - 120 * 9 + 70 + 150 - 15), // tl + 
        //     2588,(2236 - 165 * 9) // tm
        // ],
        points: [2321,1180,2338,1163,2384,1162,2384,1123,2400,1112,2425,1112,2425,1104,2399,1104,2463,1042,2501,1042,2502,1001,2584,918,3592,919,3591,847,3568,847,3566,757,2594,759,2554,810,2528,850,2502,877,2501,913,2462,913,2399,993,2425,993,2425,997,2425,1000,2401,1011,2384,1033,2377,1042,2378,1122,2337,1122,2320,1141],
        floor: 10,
        pos: 'right',
        details: [
            { name: "Apartments", value: "4/12" },
            { name: "Prices", value: "$30,000 - $60,000" },
            { name: "Sizes m2", value: "64.0 - 110.0" },
            { name: "Rooms", value: "2 - 6" },
        ]
    },
    {
        // points: [
        //     // x / y
        //     (3608 - 42),(2236 - 165 * 10 - 38), // tr
        //     (3608 - 38),(2403 - 165 * 10 + 10), // br
        //     (2588 + 8),(2403 - 165 * 10 + 10), // bm
        //     (2383 - 3),(2117 - 110 * 10), // bl
        //     (2383 - 2),(2001 - 120 * 10 + 100), // tl
        //     (2588 + 8),(2236 - 165 * 10 - 38) // tm
        // ],
        points: [2378,1042,2383,1035,2384,1025,2400,1009,2425,1008,2425,993,2399,993,2462,913,2502,912,2501,877,2529,852,2555,810,2580,779,2595,760,3568,759,3566,548,2594,548,2556,607,2529,607,2501,653,2501,742,2459,743,2396,849,2395,880,2383,899,2384,956,2377,962],
        floor: 11,
        pos: 'right',
        details: [
            { name: "Apartments", value: "4/12" },
            { name: "Prices", value: "$30,000 - $60,000" },
            { name: "Sizes m2", value: "64.0 - 110.0" },
            { name: "Rooms", value: "2 - 6" },
        ]
    },
]

export function useProjectBanner() {
    const floors = processPoints([
        ...leftBlock,
        ...rightBlock
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