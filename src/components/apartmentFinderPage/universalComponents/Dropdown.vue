<script setup>
const props = defineProps({
  name:String,
  defaultName:String,
  options: Array,
})

</script>

<template>
  <div class="flex flex-col gap-3">
    <label class="text-xl" for="project">{{props.name}}</label>
    <select :id=props.name class="w-full py-3 rounded-md border-r-8 border-transparent px-2 text-lg outline outline-black outline-1 opacity-40">
      <option value="" selected disabled hidden>{{props.defaultName}}</option>
      <option v-for="component in props.options" :value=props.name>{{component}}</option>
    </select>
  </div>
</template>
>