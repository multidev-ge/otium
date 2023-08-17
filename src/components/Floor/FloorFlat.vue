<script setup>
const {flat} = defineProps({
  flat: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="absolute inline-block product-container" :class="[
      // flat.isSold ? 'pointer-events-none' : 'pointer-events-auto',
      flat.pos?.top ? `top-[${flat.pos.top}px]` : '',
      flat.pos?.left ? `left-[${flat.pos.left}px]` : '',
      flat.pos?.bottom ?`bottom-[${flat.pos.bottom}px]` : '',
      flat.pos?.right ? `right-[${flat.pos.right}px]` : '',
      ]">
    <img :src="flat.imgPath" alt="flat" class="max-w-full h-auto">
    <div class="absolute top-0 left-0 w-full h-full bg-[#7B9F89] text-white p-5 hidden product-details">
      <p>Size: {{ flat.details.size }}</p>
      <p>Bedroom: {{ flat.details.bedroom }}</p>
      <p>Price: {{ flat.details.price }}</p>
    </div>
  </div>
</template>

<style scoped>
.product-container:hover .product-details {
  display: block;
}
</style>