import getImageWidths from "@/helper/getImageWidths";
import {f} from "vue-slick-carousel/dist/vue-slick-carousel.common";

// before that flat I use top-left, after - bottom-right
const flatWrap = 6; // also corridor locates after that flat

const widthArray = await getImageWidths().then((widths) => {
    return widths;
});

const getImageTwClasses = () => {
    let left = 0;
    let right = 0;
    const flat = [];

    let index = 1;
    for (const item of widthArray) {
        if (index++ < flatWrap) {
            flat.push({
                imgPath: item.imagePath,
                tw: `top-0 left-[${left}px]`
            });
            left += item.width;
        } else {
            flat.push({
                imgPath: item.imagePath,
                tw: `bottom-0 right-[${right}px]`
            });
            right += item.width;
        }
        if (index === flatWrap + 1)
            right += 79; // corridor width
    }

    return flat;
};

export default getImageTwClasses;