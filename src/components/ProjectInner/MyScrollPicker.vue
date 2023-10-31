<script setup>
import { VueScrollPicker } from 'vue-scroll-picker'
import 'vue-scroll-picker/lib/style.css'

</script>

<template>
  <VueScrollPicker :drag-sensitivity="0.5" :touch-sensitivity="0.5"/>

</template>

<style>
.vue-scroll-picker {
  height: 224px!important;
}

.vue-scroll-picker-rotator {
  top: calc(50% - .6em)
}

.vue-scroll-picker-item {
  padding: 8px !important;
  font-size: 16px!important;
  font-weight: 500!important;
  line-height: 16px!important;
  color: rgba(0, 0, 0, 0.60)!important;
}

.vue-scroll-picker-item-selected {
  font-size: 24px!important;
  font-weight: 500!important;
  line-height: 24px!important;
  color: black !important;
}

.vue-scroll-picker-layer-top {
  border-bottom: none !important;
  background: transparent !important;
  height: calc(50% - 20px)!important;
}

.vue-scroll-picker-layer-selection {
  top: calc(50% - 20px)!important;
  bottom: calc(50% - 20px)!important;
  border-radius: 12px!important;
  background: #F0EEEC!important;
  z-index: -100 !important;
}

.vue-scroll-picker-layer-bottom {
  border-top: none !important;
  background: transparent !important;
  height: calc(50% - 20px)!important;
}
</style>
