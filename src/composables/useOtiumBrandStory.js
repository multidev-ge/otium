import { ref } from "vue";
import photo1 from "../assets/images/1.png"
import photo2 from "../assets/images/2.png"
import photo3 from "../assets/images/3.png"
import photo4 from "../assets/images/4.png"
import photo5 from "../assets/images/5.png"
import photo6 from "../assets/images/6.png"
import photo7 from "../assets/images/7.png"
import photo8 from "../assets/images/8.png"
import photo9 from "../assets/images/9.png"
import photo10 from "../assets/images/10.png"

export default (function useOtiumBrandStory() {
    const BrandStory = ref([
        {
            BrandStoryDescription: {
                description: " Once upon a time, a group of passionate individuals united by a common vision embarked on a mission to revolutionize the construction industry. Their shared belief was that simplicity, elegance, and sustainability could transform the way we build and experience spaces. And thus, our construction company was born. We knew that the world was craving a new approach to construction—one that emphasized minimalism and timeless design. Inspired by the beauty of clean lines, functional spaces, and the harmonious blend of nature and architecture, we set out to create structures that would stand as testaments to simplicity's power. ",
                description1: "From the very beginning, our commitment to sustainability was unwavering. We sought to minimize our ecological footprint, carefully selecting materials that were renewable, eco-friendly, and locally sourced whenever possible. Our construction practices embraced efficiency, reducing waste and optimizing energy usage at every step. But it wasn't just about building structures; it was about crafting experiences. We believed that every space should evoke a sense of serenity and purpose. Whether it was a residential home, a commercial space, or a public gathering place, we aimed to create environments that inspired and nurtured the human spirit.",
                description2: "Our Design and Architecture team is composed of creative and skilled individuals who excel at merging aesthetics with functionality. They are the driving force behind our stunning and innovative designs, bringing our clients' visions to life while upholding our commitment to minimalism and sustainable design. Their expertise and artistic flair create spaces that inspire and reflect the unique needs of our clients.",
                description3: "Our Design and Architecture team is composed of creative and skilled individuals who excel at merging aesthetics with functionality. They are the driving force behind our stunning and innovative designs, bringing our clients' visions to life while upholding our commitment to minimalism and sustainable design. Their expertise and artistic flair create spaces that inspire and reflect the unique needs of our clients.",
                description4: "Our Construction and Engineering team comprises skilled builders and innovators dedicated to bringing our designs to life with precision and excellence. With their expertise and commitment to sustainability, they ensure our projects are executed to the highest standards while pushing the boundaries of innovation in the construction industry.",
                description5: "Our Journey to Simplify Construction: Crafting Timeless Spaces",
            },
            BrandStoryPhotos: {
                img1: photo1,
                img2: photo2,
                img3: photo3,
                img4: photo4,
                img5: photo5,
                img6: photo6,
                img7: photo7,
                img8: photo8,
                img9: photo9,
                img10: photo10,
            },
            BrandStoryName: {
                title: "Otium brand story ",
                title1: "Team",
                title2: "Leadership",
                title3: "Design and Architecture",
                title4: "Construction and Engineering",
                name: "Name Surname",
                position1: "Co-Founder",
                position2: "Manager",
                position3: "Architect",
                position4: "Designer",
                position5: "Engineer"
            }
        }
    ]);


    let instance = { BrandStory  };

    return () => {
        return instance;
    };
})();