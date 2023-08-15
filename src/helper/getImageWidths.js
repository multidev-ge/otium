import flat1 from "../assets/images/floor/flat/flat1.png";
import flat2 from "../assets/images/floor/flat/flat2.png";
import flat3 from "../assets/images/floor/flat/flat3.png";
import flat4 from "../assets/images/floor/flat/flat4.png";
import flat5 from "../assets/images/floor/flat/flat5.png";
import flat6 from "../assets/images/floor/flat/flat6.png";
import flat7 from "../assets/images/floor/flat/flat7.png";
import flat8 from "../assets/images/floor/flat/flat8.png";

const imagePaths = [flat1, flat2, flat3, flat4, flat5, flat6, flat7, flat8];

const getImageWidths = async () => {
    const widthArray = [];

    for (const imagePath of imagePaths) {
        const image = new Image();
        image.src = imagePath;

        await new Promise((resolve) => {
            image.onload = () => {
                widthArray.push({
                    imagePath,
                    width: image.width
                });
                resolve();
            };
        });
    }

    return widthArray;
};

export default getImageWidths;