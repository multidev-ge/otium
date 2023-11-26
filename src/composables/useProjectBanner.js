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
        // points: [
        //     // x / y
        //     359,2200, // tl
        //     355,2367, // bl
        //     1330,2367, // bm
        //     1518,2117, // br
        //     1521,1996, // tr
        //     1327,2200 // tm
        // ],
        points: [1595,2017,1574,2045,1517,2045,1514,2123,1469,2176,1419,2176,1420,2236,1416,2240,1417,2246,1324,2363,351,2363,353,2204,1325,2203,1418,2107,1418,2087,1421,2086,1421,2051,1471,2051,1516,2004,1517,2003,1516,1944,1573,1944,1595,1921],
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
        // points: [
        //     // x / y
        //     359,(2200 - 165), // tl
        //     355,(2367 - 165), // bl
        //     1330,(2367 - 165), // bm
        //     1518,(2117 - 110), // br
        //     1521,(1996 - 120), // tr
        //     1327,(2200 - 165) // tm
        // ],
        points: [1597,1920,1569,1946,1518,1947,1516,2003,1471,2051,1421,2050,1391,2086,1417,2086,1418,2107,1326,2203,1264,2203,352,2203,355,2045,419,2045,1326,2046,1418,1972,1421,1927,1472,1927,1518,1889,1517,1843,1574,1844,1596,1824,1598,1823],
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
        // points: [
        //     // x / y
        //     359,(2200 - 165 * 2), // tl
        //     355,(2367 - 165 * 2), // bl
        //     1330,(2367 - 165 * 2), // bm
        //     1518,(2117 - 110 * 2), // br
        //     1521,(1996 - 120 * 2), // tr
        //     1327,(2200 - 165 * 2) // tm
        // ],
        points: [1596,1826,1571,1847,1518,1848,1518,1889,1471,1926,1422,1927,1420,1969,1327,2044,1286,2046,355,2045,358,1888,456,1886,1326,1887,1419,1834,1418,1813,1391,1813,1422,1803,1472,1803,1515,1777,1517,1776,1517,1746,1575,1745,1575,1745,1596,1731],
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
        // points: [
        //     // x / y
        //     359,(2200 - 165 * 3), // tl
        //     355,(2367 - 165 * 3), // bl
        //     1330,(2367 - 165 * 3), // bm
        //     1518,(2117 - 110 * 3), // br
        //     1521,(1996 - 120 * 3), // tr
        //     1327,(2200 - 165 * 3) // tm
        // ],
        points: [1597,1731,1569,1747,1517,1747,1517,1775,1472,1802,1421,1802,1420,1834,1328,1886,1197,1887,357,1887,359,1728,1327,1729,1420,1697,1421,1677,1473,1679,1518,1661,1518,1642,1568,1642,1576,1645,1597,1637],
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
        // points: [
        //     // x / y
        //     359,(2200 - 165 * 4), // tl
        //     355,(2367 - 165 * 4), // bl
        //     1330,(2367 - 165 * 4), // bm
        //     1518,(2117 - 110 * 4), // br
        //     1521,(1996 - 120 * 4), // tr
        //     1327,(2200 - 165 * 4) // tm
        // ],
        points: [1597,1635,1575,1646,1519,1645,1519,1660,1472,1680,1422,1678,1423,1698,1350,1723,1329,1727,1286,1730,358,1729,360,1570,399,1572,1329,1572,1419,1562,1420,1562,1420,1555,1472,1556,1504,1553,1517,1551,1518,1541,1518,1548,1518,1545,1579,1545,1597,1541],
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
        // points: [
        //     // x / y
        //     359,(2200 - 165 * 5), // tl
        //     355,(2367 - 165 * 5), // bl
        //     1330,(2367 - 165 * 5), // bm
        //     1518,(2117 - 110 * 5), // br
        //     1521,(1996 - 120 * 5), // tr
        //     1327,(2200 - 165 * 5) // tm
        // ],
        points: [1597,1542,1588,1544,1576,1546,1518,1543,1518,1551,1497,1554,1472,1556,1423,1556,1419,1562,1349,1570,1329,1571,1288,1572,361,1572,362,1413,401,1414,1329,1414,1349,1417,1421,1426,1393,1425,1422,1432,1473,1433,1517,1438,1518,1441,1575,1445,1597,1447],
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
        // points: [
        //     // x / y
        //     359,(2200 - 165 * 6), // tl
        //     355,(2367 - 165 * 6), // bl
        //     1330,(2367 - 165 * 6), // bm
        //     1518,(2117 - 110 * 6), // br
        //     1521,(1996 - 120 * 6), // tr
        //     1327,(2200 - 165 * 6) // tm
        // ],
        points: [1597,1448,1574,1444,1519,1444,1519,1438,1488,1438,1514,1437,1472,1433,1424,1433,1393,1427,1420,1427,1330,1414,1288,1415,362,1414,364,1256,455,1258,1330,1257,1350,1265,1420,1290,1393,1289,1423,1308,1473,1309,1518,1325,1519,1344,1575,1346,1597,1354],
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
        // points: [
        //     // x / y
        //     359,(2200 - 165 * 7), // tl
        //     355,(2367 - 165 * 7), // bl
        //     1330,(2367 - 165 * 7), // bm
        //     1518,(2117 - 110 * 7), // br
        //     1521,(1996 - 120 * 7), // tr
        //     1327,(2200 - 165 * 7) // tm
        // ],
        points: [1597,1354,1575,1346,1519,1345,1493,1325,1516,1325,1472,1309,1424,1309,1424,1294,1394,1290,1420,1289,1330,1258,363,1257,366,1099,443,1101,1331,1101,1421,1155,1393,1154,1423,1159,1424,1187,1474,1187,1516,1213,1494,1212,1517,1238,1576,1248,1598,1259],
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
        // points: [
        //     // x / y
        //     359,(2200 - 165 * 8), // tl
        //     355,(2367 - 165 * 8), // bl
        //     1330,(2367 - 165 * 8), // bm
        //     1518,(2117 - 110 * 8), // br
        //     1521,(1996 - 120 * 8), // tr
        //     1327,(2200 - 165 * 8) // tm
        // ],
        points: [1598,1260,1575,1247,1519,1245,1519,1216,1493,1212,1516,1212,1473,1186,1424,1187,1423,1160,1394,1155,1421,1155,1331,1101,1260,1102,366,1101,368,943,447,945,1332,945,1422,1020,1395,1018,1425,1064,1474,1065,1516,1100,1517,1101,1496,1100,1518,1139,1576,1147,1598,1164],
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
        // points: [
            // x / y
            // 359,(2200 - 165 * 9), // tl
            // 355,(2367 - 165 * 9), // bl
            // 1330,(2367 - 165 * 9), // bm
            // 1518,(2117 - 110 * 9), // br
            // 1521,(1996 - 120 * 9), // tr
            // 1327,(2200 - 165 * 9) // tm
        // ],
        points: [1599,1164,1575,1147,1520,1147,1498,1100,1517,1100,1474,1064,1425,1065,1395,1020,1421,1020,1329,943,1330,943,1333,946,368,945,369,875,391,876,393,791,417,793,1297,793,1321,793,1366,839,1394,839,1424,868,1425,870,1424,943,1474,943,1516,988,1494,988,1519,1007,1519,1040,1535,1056,1536,1104,1577,1105,1598,1126],
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
        // points: [
        //     // x / y
        //     359,(2200 - 165 * 10), // tl
        //     355,(2367 - 165 * 10), // bl
        //     1330,(2367 - 165 * 10), // bm
        //     1518,(2117 - 110 * 10), // br
        //     1521,(1996 - 120 * 10), // tr
        //     1327,(2200 - 165 * 10) // tm
        // ],
        points: [1536,1055,1520,1040,1520,998,1499,989,1517,989,1475,943,1425,943,1426,887,1426,868,1426,880,1426,931,1394,901,1366,839,1322,793,394,792,396,589,1323,590,1360,641,1395,642,1425,683,1425,771,1426,780,1477,781,1520,842,1520,874,1520,918,1538,939,1538,975,1537,978,1535,977],
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
        // points: [
        //     // x / y
        //     3608,2236, // tr
        //     3610,2403, // br
        //     2592,2403, // bm
        //     2408,2117, // bl
        //     2408,2001, // tl
        //     2588,2236 // tm
        // ],
        points: [2322,1994,2338,2020,2386,2020,2386,2097,2386,2060,2399,2073,2406,2122,2466,2213,2506,2212,2505,2276,2589,2404,3610,2404,3608,2236,3454,2238,2588,2237,2569,2213,2504,2132,2506,2081,2467,2081,2466,2081,2407,2008,2400,1968,2387,1959,2387,1925,2339,1924,2321,1904],
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
        // points: [
        //     // x / y
        //     3608,(2236 - 165), // tr
        //     3608,(2403 - 165), // br
        //     2588,(2403 - 165), // bm
        //     2408,(2117 - 110), // bl
        //     2408,(2001 - 120), // tl
        //     2588,(2236 - 165) // tm
        // ],
        points: [2323,1904,2339,1924,2386,1924,2386,1955,2400,1964,2406,2007,2465,2081,2507,2081,2506,2109,2504,2109,2504,2132,2570,2214,2588,2235,2589,2236,3607,2237,3609,2237,3606,2070,3477,2071,2589,2071,2504,1991,2504,1969,2506,1951,2466,1950,2464,1950,2405,1894,2401,1861,2386,1853,2387,1828,2339,1828,2321,1811],
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
        // points: [
        //     // x / y
        //     3608,(2236 - 165 * 2), // tr
        //     3608,(2403 - 165 * 2), // br
        //     2588,(2403 - 165 * 2), // bm
        //     2408,(2117 - 110 * 2), // bl
        //     2408,(2001 - 120 * 2), // tl
        //     2588,(2236 - 165 * 2) // tm
        // ],
        points: [2322,1811,2338,1827,2387,1829,2387,1853,2398,1859,2407,1893,2466,1950,2505,1949,2506,1991,2570,2054,2589,2070,3606,2071,3604,1905,3507,1905,2589,1905,2503,1848,2504,1819,2466,1820,2406,1778,2401,1754,2387,1749,2387,1733,2338,1733,2321,1719],
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
        // points: [
        //     // x / y
        //     3608,(2236 - 165 * 3), // tr
        //     3608,(2403 - 165 * 3), // br
        //     2588,(2403 - 165 * 3), // bm
        //     2408,(2117 - 110 * 3), // bl
        //     2408,(2001 - 120 * 3), // tl
        //     2588,(2236 - 165 * 3) // tm
        // ],
        points: [2322,1721,2338,1733,2386,1732,2386,1748,2401,1753,2404,1777,2463,1819,2504,1819,2504,1847,2586,1904,3604,1905,3601,1739,2586,1740,2503,1706,2504,1689,2464,1689,2406,1665,2427,1674,2402,1696,2427,1673,2406,1665,2402,1644,2387,1645,2387,1636,2337,1638,2321,1631,2321,1631,2321,1631],
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
        // points: [
        //     // x / y
        //     3608,(2236 - 165 * 4), // tr
        //     3608,(2403 - 165 * 4), // br
        //     2588,(2403 - 165 * 4), // bm
        //     2408,(2117 - 110 * 4), // bl
        //     2408,(2001 - 120 * 4), // tl
        //     2588,(2236 - 165 * 4) // tm
        // ],
        points: [2322,1631,2337,1638,2385,1636,2385,1644,2401,1650,2406,1665,2464,1689,2502,1688,2503,1705,2586,1739,3602,1740,3599,1573,2585,1574,2503,1563,2503,1559,2463,1559,2405,1552,2385,1551,2385,1542,2337,1543,2321,1540],
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
        // points: [
        //     // x / y
        //     3608,(2236 - 165 * 5), // tr
        //     3608,(2403 - 165 * 5), // br
        //     2588,(2403 - 165 * 5), // bm
        //     2408,(2117 - 110 * 5), // bl
        //     2408,(2001 - 120 * 5), // tl
        //     2588,(2236 - 165 * 5) // tm
        // ],
        points: [2321,1540,2337,1544,2386,1542,2386,1539,2405,1541,2405,1552,2463,1560,2502,1559,2502,1565,2567,1574,2586,1576,3600,1574,3598,1409,2586,1410,2502,1423,2503,1430,2463,1430,2405,1439,2405,1434,2386,1437,2386,1445,2338,1449,2321,1450],
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
        // points: [
        //     // x / y
        //     3608,(2236 - 165 * 6), // tr
        //     3608,(2403 - 165 * 6), // br
        //     2588,(2403 - 165 * 6), // bm
        //     2408,(2117 - 110 * 6), // bl
        //     2408,(2001 - 120 * 6), // tl
        //     2588,(2236 - 165 * 6) // tm
        // ],
        points: [2321,1451,2337,1448,2385,1448,2385,1440,2425,1439,2406,1439,2463,1429,2503,1429,2503,1423,2585,1410,3597,1410,3595,1243,3595,1245,3594,1246,2586,1246,2502,1281,2503,1299,2463,1300,2403,1326,2427,1326,2402,1326,2386,1333,2386,1350,2338,1352,2320,1360],
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
        // points: [
        //     // x / y
        //     3608,(2236 - 165 * 7), // tr
        //     3608,(2403 - 165 * 7), // br
        //     2588,(2403 - 165 * 7), // bm
        //     2408,(2117 - 110 * 7), // bl
        //     2408,(2001 - 120 * 7), // tl
        //     2588,(2236 - 165 * 7) // tm
        // ],
        points: [2321,1360,2339,1353,2385,1352,2385,1334,2401,1327,2426,1327,2403,1326,2464,1300,2503,1300,2503,1282,2567,1254,2584,1247,3595,1245,3594,1081,2585,1082,2567,1095,2502,1141,2502,1171,2463,1171,2401,1215,2426,1216,2402,1218,2385,1232,2385,1237,2338,1259,2321,1270],
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
        // points: [
        //     // x / y
        //     3608,(2236 - 165 * 8), // tr
        //     3608,(2403 - 165 * 8), // br
        //     2588,(2403 - 165 * 8), // bm
        //     (2408 - 25 - 60),(2117 - 110 * 8 - 5), // bl
        //     (2408 - 24 - 60),(2001 - 120 * 8 + 100 - 6), // tl
        //     2588,(2236 - 165 * 8) // tm
        // ],
        points: [
            2321,1270,2338,1258,2384,1256,2385,1229,2400,1220,2427,1219,2427,1214,2401,1214,2462,1170,2502,1171,2502,1140,2585,1082,3592,1082,3591,916,2584,919,2565,937,2502,1000,2502,1041,2462,1041,2399,1104,2426,1104,2426,1115,2401,1115,2385,1127,2386,1151,2338,1154
        ],
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