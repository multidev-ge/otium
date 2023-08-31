

import {ref} from "vue";
export default (function apartmentFinder () {

    const  projectsList = ref([
            {projectName: "project1", address: "3 Iakob Nikoladze St. 0179, Tbilisi, Georgia", apartmentsForSale: 29, status: "Finished", image:"https://i.imgur.com/f83Bq3T.png"},
            {projectName: "project1", address: "3 Iakob Nikoladze St. 0179, Tbilisi, Georgia", apartmentsForSale: 22, status: "Finished", image:"https://i.imgur.com/f83Bq3T.png"},
            {projectName: "project1", address: "3 Iakob Nikoladze St. 0179, Tbilisi, Georgia", apartmentsForSale: 49, status: "Finished", image:"https://i.imgur.com/f83Bq3T.png"},
            {projectName: "project1", address: "3 Iakob Nikoladze St. 0179, Tbilisi, Georgia", apartmentsForSale: 59, status: "Finished", image:"https://i.imgur.com/f83Bq3T.png"},

        ]
    )
    let instance = {projectsList}

    return () => {
        return instance
    }
})()