import { ref } from "vue";

export default (function useOtiumBrandStory() {
    const BrandStory = ref([
        {
            BrandStoryDescription: {
                description: " Once upon a time, a group of passionate individuals united by a common vision embarked on a mission to revolutionize the construction industry. Their shared belief was that simplicity, elegance, and sustainability could transform the way we build and experience spaces. And thus, our construction company was born. We knew that the world was craving a new approach to construction—one that emphasized minimalism and timeless design. Inspired by the beauty of clean lines, functional spaces, and the harmonious blend of nature and architecture, we set out to create structures that would stand as testaments to simplicity's power. ",
                description1: "From the very beginning, our commitment to sustainability was unwavering. We sought to minimize our ecological footprint, carefully selecting materials that were renewable, eco-friendly, and locally sourced whenever possible. Our construction practices embraced efficiency, reducing waste and optimizing energy usage at every step. But it wasn't just about building structures; it was about crafting experiences. We believed that every space should evoke a sense of serenity and purpose. Whether it was a residential home, a commercial space, or a public gathering place, we aimed to create environments that inspired and nurtured the human spirit.",
                description2: "Our Design and Architecture team is composed of creative and skilled individuals who excel at merging aesthetics with functionality. They are the driving force behind our stunning and innovative designs, bringing our clients' visions to life while upholding our commitment to minimalism and sustainable design. Their expertise and artistic flair create spaces that inspire and reflect the unique needs of our clients."
            }
        }
    ]);


    let instance = { BrandStory  };

    return () => {
        return instance;
    };
})();