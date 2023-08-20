<script setup>
import apartmentFinder from "@/composables/forApartmentFinder/apartmentFinder";
const apartments = apartmentFinder
const {selectFloor, defaultValueForDropdown, changeDropDownValue} = apartments()
const props = defineProps({
  name:String,
  defaultName:String,
  options: Array,

})
const chooseDropdownType = (param) =>{
  changeDropDownValue()
  if(props.name === "Floor"){
    selectFloor(param)
  }
}

</script>
<template>
  <div class="flex flex-col gap-3">
    <label class="text-xl" for="project">{{props.name}}</label>
    <select @input="chooseDropdownType(parseInt($event.target.value))"  :id=props.name class="w-full py-3 rounded-md border-r-8 border-transparent px-2 text-lg outline outline-black outline-1 opacity-40">
      <option value="default" selected disabled >{{props.defaultName}}</option>
      <option v-for="(component) in props.options" :value=component>{{component}}</option>
    </select>
  </div>
</template>
