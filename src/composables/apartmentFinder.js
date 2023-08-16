import {ref,computed} from "vue";

export default function apartmentFinder() {
    const selectedRoom = ref(null);

    const dropDowns = ref({
            project: {default:"Project Name", name: "Project", list:["project1", "project2", "project3", "project4"]},
            block: {default:"Project Name", name: "Block", list:["block1", "block2", "block3", "block4"]},
            floor: {default:"All", name: "Floor", list:["1", "2", "3", "4"]},
        }
    )
    const rooms = ref({
        quantity: 4, name: "Rooms"

        }
    )
    const apartments = ref([
            {id:1, img:"https://i.imgur.com/LSaaUub.png", floor:2, area: 110, rooms: 3},
            {id:2, img:"https://i.imgur.com/LSaaUub.png", floor:3, area: 320, rooms: 2},
            {id:3, img:"https://i.imgur.com/LSaaUub.png", floor:4, area: 120, rooms: 1},
            {id:4, img:"https://i.imgur.com/LSaaUub.png", floor:1, area: 20, rooms: 4},
            {id:5, img:"https://i.imgur.com/LSaaUub.png", floor:9, area: 120, rooms: 4},
            {id:6, img:"https://i.imgur.com/LSaaUub.png", floor:9, area: 120, rooms: 3},
            {id:7, img:"https://i.imgur.com/LSaaUub.png", floor:9, area: 120, rooms: 3},


        ]
    )

    const filterApartments = computed(() => {
        if (selectedRoom.value === null) {
            return apartments.value;
        } else {
            return apartments.value.filter(apartment => apartment.rooms === selectedRoom.value);
        }
    });
    const gurama = ref(filterApartments.value)


    const selectRoom = (room) => {
        selectedRoom.value = room;
        gurama.value = filterApartments.value
        console.log(gurama.value)
    };

    const maxFloors = ref(9)
    const apartmentComponents = ref(["Apartment","Floor","Rooms","Area, m2"])

    return {
        dropDowns,
        rooms,
        maxFloors,
        apartmentComponents,
        gurama,
        selectRoom
    };
}