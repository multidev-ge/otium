function useFloor() {
    return {
        width: 1199,
        height: 534,
        flat: generateFlat(),
    };
}

function generateFlat(numberOfHouses = 8) {
    const corridorWidth = 80;
    const flatPositions = [
        {
            top: '0',
            left: '0',
        },
        {
            top: '0',
            left: '176',
        },
        {
            top: '0',
            left: `${176 + 172}`,
        },
        {
            top: '0',
            left: `${176 + 172 + 245}`,
        },
        {
            top: '0',
            left: `${176 + 127 + 245 + 256}`,
        },
        {
            bottom: '0',
            right: '0',
        },
        {
            bottom: '0',
            right: `${269 + corridorWidth}`,
        },
        {
            bottom: '0',
            right: `${269 + corridorWidth + 248}`,
        }

    ];
    const randomBool = () => Math.random() < 0.5;
    const generateImagePath = (index) => `src/assets/images/floor/flat/flat${index}.png`;
    const randomDetails = () => ({
        size: (Math.random() * 100 + 50).toFixed(2) + " m2",
        bedroom: Math.floor(Math.random() * 4) + 1,
        price: "$ " + Math.floor(Math.random() * 500000) + 50000,
    });

    const flat = [];

    for (let i = 1; i <= numberOfHouses; i++) {
        const house = {
            pos: flatPositions[i - 1],
            isSold: randomBool(),
            imgPath: generateImagePath(i),
            details: randomDetails(),
        };
        flat.push(house);
    }

    return flat;
}

export default useFloor;