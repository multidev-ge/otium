import {computed, ref} from "vue";

export default function mediaInner() {
    const currentPageInfo = ref({
            mainPart: {
                type: "News",
                date: "2 Jul,2023",
                title: "Minimalism in Construction: Sustainable Design Solutions",
                text1: "In today's ever-changing world, the construction industry is embracing a new paradigm - minimalism. This design philosophy goes beyond just aesthetics; it prioritizes functionality, efficiency, and sustainability. Minimalist construction practices are redefining the way we build, focusing on creating structures that have a positive impact on the environment and the people who inhabit them.",
                text2: "At its core, sustainable design aims to minimize the negative environmental impact of construction projects. This involves using eco-friendly materials, reducing waste, and optimizing energy efficiency. With the global push for a greener future, construction companies are taking up the challenge to be part of the solution.One of the key aspects of sustainable design in minimalism is the careful selection of materials.",
                text3:  "Builders are now choosing renewable and recycled materials, aiming to reduce the carbon footprint of their projects. Additionally, they focus on sourcing materials locally, reducing transportation-related emissions.\n" +
                    "Furthermore, minimalist design emphasizes functionality and space optimization. By eliminating unnecessary elements and focusing on essential features, buildings become more efficient and versatile. Energy efficiency is a crucial component of sustainable construction.\n" +
                    "Buildings are responsible for a significant portion of global energy consumption.  By incorporating energy-saving technologies, such as solar panels, LED lighting, and smart climate control systems, minimalism in construction helps reduce energy consumption and reliance on non-renewable resources."
            },
            images: ["https://i.imgur.com/AabI2Vq.png", "https://i.imgur.com/Wbvpq3m.png"],
            secondPart: {
                title: "Minimalist Living",
                text1: "The integration of technology also plays a significant role in sustainable design solutions. Building Information Modeling (BIM) and other advanced tools help construction companies analyze and optimize designs, reducing waste and improving the overall construction process."
            }
        }
    )



    const similarNews = ref([
        {
            id: 1,
            img: "https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?cs=srgb&dl=pexels-yentl-jacobs-157811.jpg&fm=jpg",
            date: "2 Jul,2023",
            type: "Photo gallery",
            text:"Embracing Minimalism: The Construction Industry's Path to Sustainable Design",
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?cs=srgb&dl=pexels-yentl-jacobs-157811.jpg&fm=jpg",
            date: "2 Jul,2023",
            type: "News",
            text:"Simplicity in Architecture: Unveiling the Beauty of Minimalist Constructions"
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?cs=srgb&dl=pexels-yentl-jacobs-157811.jpg&fm=jpg",
            date: "2 Jul,2023",
            type: "News",
            text:"Simplicity in Architecture: Unveiling the Beauty of Minimalist Constructions"

        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?cs=srgb&dl=pexels-yentl-jacobs-157811.jpg&fm=jpg",
            date: "2 Jul,2023",
            type: "Video Gallery",
            text:"Simplicity in Architecture: Unveiling the Beauty of Minimalist Constructions"

        },
    ])
    return {
        similarNews,
        currentPageInfo,

    };
}