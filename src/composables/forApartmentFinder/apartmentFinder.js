import {ref,computed} from "vue";
export default (function useHome () {
    const selectedRoom = ref(null);
    const selectedFloor = ref(null)
    const showApartments = ref(true)
    const prefix = ref("$")
    const soldApartmentOption = ref("option1")
    const changeSoldApartmentValue = () =>{
        showApartments.value = !showApartments.value
        console.log(showApartments.value)
    }
    const maxFloors = ref(9)
    const doubleSliderDefaultValues = ref({
        area:{maxValue:200, minValue:0},
        price:{maxValue:400000, minValue:0}
    })
    const doubleSliderOptions = ref({
        area:{maxValue:doubleSliderDefaultValues.value.area.maxValue, minValue:doubleSliderDefaultValues.value.area.minValue, name:"Area, m2"},
        price:{maxValue:doubleSliderDefaultValues.value.price.maxValue, minValue:doubleSliderDefaultValues.value.price.minValue, name:"Price", prefix:prefix.value}
    })
    const getFloors = () =>{
        let floorArray = []
        for(let a=1;a<maxFloors.value+1;a++){
            floorArray.push(a)
        }
        return floorArray
    }
    const updateValues = (new1,new2,name) =>{
        doubleSliderOptions.value[name].maxValue = new2
        doubleSliderOptions.value[name].minValue = new1
        console.log(doubleSliderOptions.value)
    }
    const clearFilter = ()=>{
        selectedFloor.value = null
        selectedRoom.value = null
        doubleSliderOptions.value.area.minValue = doubleSliderDefaultValues.value.area.minValue
        doubleSliderOptions.value.area.maxValue = doubleSliderDefaultValues.value.area.maxValue
        doubleSliderOptions.value.price.maxValue = doubleSliderDefaultValues.value.price.maxValue
        doubleSliderOptions.value.price.minValue = doubleSliderDefaultValues.value.price.minValue

        showApartments.value = true
        soldApartmentOption.value = "option1"



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
            {id:1, img:"https://i.imgur.com/LSaaUub.png", floor:2, area: 110, price:80000,  rooms: 2, isSold:true},
            {id:2, img:"https://i.imgur.com/LSaaUub.png", floor:3, area: 320, price:82000, rooms: 2, isSold:true},
            {id:3, img:"https://i.imgur.com/LSaaUub.png", floor:4, area: 120, price:11000, rooms: 1, isSold:true},
            {id:4, img:"https://i.imgur.com/LSaaUub.png", floor:1, area: 20,  price:34000, rooms: 4, isSold:true},
            {id:5, img:"https://i.imgur.com/LSaaUub.png", floor:3, area: 120, price:60000, rooms: 4, isSold:true},
            {id:6, img:"https://i.imgur.com/LSaaUub.png", floor:3, area: 120, price:44000, rooms: 3, isSold:false},
            {id:7, img:"https://i.imgur.com/LSaaUub.png", floor:9, area: 120, price:44000,rooms: 3, isSold:false},
        ]
    )
    const filterApartments = computed(() => {
        return apartments.value.filter(apartment => {
            const roomFilter = selectedRoom.value === null || apartment.rooms === selectedRoom.value;
            const floorFilter = selectedFloor.value === null || apartment.floor === selectedFloor.value;
            const areaFilter = apartment.area >= doubleSliderOptions.value.area.minValue && apartment.area <= doubleSliderOptions.value.area.maxValue
            const soldFilter = showApartments.value === true || apartment.isSold === false
            const priceFilter = apartment.price >= doubleSliderOptions.value.price.minValue && apartment.price <= doubleSliderOptions.value.price.maxValue

            return roomFilter && floorFilter && areaFilter && soldFilter && priceFilter;
        });
    })

    const selectRoom = (room) => {
        selectedRoom.value = room;
    };
    const selectFloor = (floor) =>{
        selectedFloor.value = floor
    }
    const apartmentComponents = ref(["Apartment","Floor","Rooms","Area, m2", "Price"])
    const defaultValueForDropdown = ref("default")
    const changeDropDownValue =(value) =>{
        defaultValueForDropdown.value = value
    }
    let instance = {prefix,soldApartmentOption, changeSoldApartmentValue, updateValues, doubleSliderOptions,changeDropDownValue, dropDowns, rooms, maxFloors, apartmentComponents, filterApartments, selectRoom, selectFloor, clearFilter, defaultValueForDropdown}




    return () => {
        return instance
    }
})()