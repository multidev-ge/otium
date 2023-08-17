import {ref,computed} from "vue";
export default (function useHome () {
    const selectedRoom = ref(null);
    const selectedFloor = ref(null)
    const maxFloors = ref(9)
    const getFloors = () =>{
        let floorArray = []
        for(let a=1;a<maxFloors.value+1;a++){
            floorArray.push(a)
        }
        return floorArray
    }

    const clearFilter = () =>{
        selectedFloor.value = null
        selectedRoom.value = null
    }
    const dropDowns = ref({
            project: {default:"Project Name", name: "Project", list:["project1", "project2", "project3", "project4"]},
            block: {default:"Project Name", name: "Block", list:["block1", "block2", "block3", "block4"]},
            floor: {default:"All", name: "Floor", list:getFloors()},
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
            {id:5, img:"https://i.imgur.com/LSaaUub.png", floor:3, area: 120, rooms: 4},
            {id:6, img:"https://i.imgur.com/LSaaUub.png", floor:3, area: 120, rooms: 3},
            {id:7, img:"https://i.imgur.com/LSaaUub.png", floor:9, area: 120, rooms: 3},
        ]
    )
    const filterApartments = computed(() => {
        return apartments.value.filter(apartment => {
            const roomFilter = selectedRoom.value === null || apartment.rooms === selectedRoom.value;
            const floorFilter = selectedFloor.value === null || apartment.floor === selectedFloor.value;
            return roomFilter && floorFilter;
        });
    });
    const selectRoom = (room) => {
        selectedRoom.value = room;
        console.log(room)
    };
    const selectFloor = (floor) =>{
        selectedFloor.value = floor
        console.log(typeof selectedFloor.value)
    }
    const apartmentComponents = ref(["Apartment","Floor","Rooms","Area, m2"])
    const defaultValueForDropdown = ref("default")
    const changeDropDownValue =(value) =>{
        defaultValueForDropdown.value = value
    }
    let instance = {changeDropDownValue, dropDowns, rooms, maxFloors, apartmentComponents, filterApartments, selectRoom, selectFloor, clearFilter, defaultValueForDropdown}



    return () => {
        return instance
    }
})()