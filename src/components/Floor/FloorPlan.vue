<script setup>
import useFloor from "@/composables/useFloor";
import FloorFlat from "@/components/Floor/FloorFlat.vue";

const plan = useFloor();
</script>

<template>
  <div class="relative mx-auto mt-20" :style="{
    width: `${plan.width}px`,
    height: `${plan.height}px`
  }">
    <img src="../../assets/images/floor/corridor.png" class="absolute">
    <template v-for="(flat, index) in plan.flat" :key="index">
      <div class="absolute inline-block product-container" :style="{
    pointerEvents: flat.isSold ? 'none' : 'auto',
    top: flat.pos?.top ? `${flat.pos.top}px` : 'auto',
    left: flat.pos?.left ? `${flat.pos.left}px` : 'auto',
    bottom: flat.pos?.bottom ? `${flat.pos.bottom}px` : 'auto',
    right: flat.pos?.right ? `${flat.pos.right}px` : 'auto'
  }">
        <img :src="flat.imgPath" alt="flat" class="max-w-full h-auto">
        <div class="absolute top-0 left-0 w-full h-full bg-[#7B9F89] text-white p-5 hidden product-details">
          <p>Size: {{ flat.details.size }}</p>
          <p>Bedroom: {{ flat.details.bedroom }}</p>
          <p>Price: {{ flat.details.price }}</p>
        </div>
        <div
            class="absolute top-0 left-0 w-full h-full bg-white opacity-80 product-details"
            :style="{
          display: flat.isSold ? 'block' : 'none'
        }">
            <span class="mx-auto mt-20 block w-fit text-red-400 rounded-3xl border-2 border-red-500 px-6 py-3 -rotate-12">Sold</span>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.product-container:hover .product-details {
  display: block;
}
</style>