<script setup>
import {ref} from "vue";
let value1 = ref(50)
let value2 = ref(150)
function changed(){
  if(value2.value-value1.value<=20){
    value1.value = value2.value-20
    console.log("value1 "+value1.value)
    console.log("value2 "+value2.value)
  }
}

function changed2(){
  if(value2.value-value1.value<=20){
    value2.value = value1.value+20
    console.log("value1 "+value1.value)
    console.log("value2 "+value2.value)
  }
}
</script>

<template>
  <div class="wrapper">

    <div class="slider h-1 relative bg-[#D7D7D7] rounded-md">
    </div>

    <div class="range-input relative">
      <input type="range"  class="range-min absolute w-full h-1 -top-1 pointer-events-none"  min="0" max="200" v-model="value1"  @input="changed()" step="1">
      <input type="range" class="range-max absolute w-full h-1 -top-1  pointer-events-none" min="0" max="200" v-model="value2" @input="changed2()" step="1">
    </div>
  </div>
</template>

<style>

.range-input input{
  background: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
input[type="range"]::-webkit-slider-thumb{
  height: 17px;
  width: 17px;
  border-radius: 50%;
  background: #000000;
  pointer-events: auto;
  -webkit-appearance: none;
}

</style>

