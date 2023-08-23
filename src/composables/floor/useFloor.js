import plan from "../../assets/images/floor/plan.png"

function useFloor() {
    const img = new Image()
    img.src = plan
    const width = img.width + 'px'
    const height = img.height + 'px'

    const apartments = [
        {
            points: ["0 0", "179 0", "179 239", "258 239", "258 287", "267 287", "267 471", "267 534", "0 534"],
            isSold: Math.random() > 0.5, details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            points: ["178 0", "352 0", "352 239", "178 239"],
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            points: ["352 0", "596 0", "596 239", "352 239"],
            isSold: Math.random() > 0.5, details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            points: ["596 0", "852 0", "852 239", "596 239"],
            isSold: Math.random() > 0.5, details: {
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
            points: ["934 315", "977 238", "977 534", "1032 534", "1032 299", "1087 299", "1087 260", "1199 260", "1199 534", "934 534"],
            isSold: Math.random() > 0.5, details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            points: ["604 287", "787 287", "787 362", "855 362", "855 467", "772 467", "772 534", "604 534"],
            isSold: Math.random() > 0.5, details: {
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
    ]

    apartments.forEach((apartment, index, array) => {
        const room = widthAndHeight(apartment.points)
        const [left, top] = array[index].points[0].split(" ")
        array[index].top = top + 'px';
        array[index].left = left + 'px';
        array[index].width = room.width + 'px'
        array[index].height = room.height + 'px'
        array[index].points = apartment.points.map(point => point.split(' ').map(coord => coord + 'px').join(' ')).join(',')
    })

    return {width, height, apartments}
}

function widthAndHeight(polygonPointsStr) {
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

    for (const pointStr of polygonPointsStr) {
        const [x, y] = pointStr.split(' ').map(Number);
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
    }

    const width = maxX - minX;
    const height = maxY - minY;

    return {width, height}
}

export default useFloor