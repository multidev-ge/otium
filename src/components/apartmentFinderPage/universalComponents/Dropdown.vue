<script setup>
import { ref } from "vue"
import apartmentFinder from "@/composables/forApartmentFinder/apartmentFinder"

const props = defineProps({
  name: String,
  defaultName: String,
  options: Array,
})

const apartments = apartmentFinder
const { selectFloor, changeDropDownValue, selectProject, selectBlock } = apartments()
const dropDownValue = ref("default")

const chooseDropdownType = (param) => {
  changeDropDownValue()
  if (props.name === "Floor") {
    selectFloor(param);
  } else if (props.name === "Block") {
    selectBlock(param);
  } else if (props.name === "Project") {
    selectProject(param)
  }
}

</script>

<template>
  <div class="flex flex-col gap-3">
    <label class="text-xl font-normal" for="project">{{ props.name }}</label>
    <select 
    @input="chooseDropdownType($event.target.value)" v-model="dropDownValue"
      class="w-full py-3 rounded-md border-r-8 border-transparent px-2 text-lg outline outline-black outline-1 opacity-40"
      :class="[props.options.includes(dropDownValue) ? 'opacity-100' : 'opacity-40']">
      <option value="default" disabled>{{ props.defaultName }}</option>
      <option v-for="component in props.options" :value="component?.id" :key="component?.id">{{ component.title }}</option>
    </select>
  </div>
</template>
