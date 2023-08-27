<script setup>
const props = defineProps({
  icon: Object,
  iconName:String,
  value:[String,Number]
});
const getIconComponent = (company) => {
  return company;
};
</script>

<template>
  <div>
    <div class="flex gap-4 items-center">
      <component :is="getIconComponent(props.icon)"></component>
      <p class="text-lg text-[#000000CC]">{{props.iconName}}</p>
    </div>
    <p class="text-2xl">{{props.value}}</p>
  </div>
</template>
