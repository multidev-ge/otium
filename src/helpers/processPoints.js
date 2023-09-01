export default function processPoints(array, planWidth, planHeight) {
    return array.map(room => {
        const coords = room.points;

        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
        for (let i = 0; i < coords.length; i += 2) {
            const x = coords[i], y = coords[i + 1];

            minX = Math.min(minX, x);
            maxX = Math.max(maxX, x);
            minY = Math.min(minY, y);
            maxY = Math.max(maxY, y);
        }

        const _width = maxX - minX;
        const _height = maxY - minY;

        const top = `${(minY / planHeight) * 100}%`;
        const left = `${(minX / planWidth) * 100}%`;
        const width = `${(_width / planWidth) * 100}%`;
        const height = `${(_height / planHeight) * 100}%`;


        let points = "";
        for (let i = 0; i < coords.length; i += 2) {
            const x = coords[i], y = coords[i + 1];

            const xPercentage = ((x - minX) / _width) * 100;
            const yPercentage = ((y - minY) / _height) * 100;

            points += `${xPercentage}% ${yPercentage}%`;
            if (i !== coords.length - 2) points += ',';
        }

        return {...room,coords, points, top, left, width, height};
    });
};
