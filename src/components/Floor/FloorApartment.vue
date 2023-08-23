<script setup>
const {apartment} = defineProps({
  apartment: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <!-- Apartment -->
  <div class="absolute flex justify-center items-center opacity-80 cursor-pointer hover:!bg-[#7B9F89] apartment"
       :style="{width: apartment.width,height: apartment.height,
                clipPath: `polygon(${apartment.points})`, backgroundColor: apartment.isSold ? 'white' : 'transparent',top: apartment.top, left:apartment.left }">

    <!-- Sold Label -->
    <span v-if="apartment.isSold"
          class="block text-xl font-bold leading-8 !opacity-100 text-[#E24A4A] rounded-2xl border-2 border-[#E24A4A] px-6 py-3 -rotate-12 sold">
      Sold</span>
    <!-- Sold Label -->

    <!-- Apartment Details -->
    <div class="hidden !opacity-100 details">
      <p class="text-white font-medium leading-7"><span class="opacity-70">Size:</span> {{ apartment.details.size }} m2
      </p>
      <p class="text-white font-medium leading-7"><span class="opacity-70">Bedroom:</span> {{
          apartment.details.bedroom
        }}</p>
      <p class="text-white font-medium leading-7"><span class="opacity-70">Price:</span> $
        {{ apartment.details.price.toLocaleString('en-US', {useGrouping: true}).replace(/,/g, ' ') }}</p>
    </div>
    <!-- Apartment Details -->

  </div>
  <!-- Apartment -->
</template>


<style scoped>
.apartment:hover .details {
  display: block;
}

.apartment:hover .sold {
  display: none;
}
</style>