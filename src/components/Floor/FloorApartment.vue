<script setup>
const {apartment} = defineProps({apartment: {type: Object, required: true}})

const {width, height, points, top, left} = apartment
</script>

<template>
  <router-link :to="{name: 'Apartment', params:{aid: 0}}">
  <div
      class="absolute flex justify-center items-center opacity-80 cursor-pointer hover:!bg-[#7B9F89] apartment"
      :class="{'sold-apartment': apartment.isSold}"
      :style="{
                width: apartment.width,
                height: apartment.height,
                clipPath: `polygon(${apartment.points})`,
                backgroundColor: apartment.isSold ? 'white' : 'transparent',
                top: apartment.top,
                left:apartment.left
  }">
    <span v-if="apartment.isSold"
          class="max-md:hidden block lg:max-2xl:text-lg 2xl:text-xl font-bold leading-8 !opacity-100 text-[#E24A4A] rounded-2xl border-2 border-[#E24A4A] md:max-lg:px-2 lg:max-2xl:px-4 2xl:px-6 md:max-lg:py-1 lg:max-2xl:py-2 2xl:py-3 -rotate-12 sold">
      Sold</span>

      <div class="hidden max-md:!hidden !opacity-100 details md:max-lg:text-xs lg:max-xl:text-sm">
        <p class="text-white font-medium leading-7"><span class="opacity-70">Size:</span> {{ apartment.details.size }}
          m2
        </p>

        <p class="text-white font-medium leading-7"><span class="opacity-70">Bedroom:</span> {{
            apartment.details.bedroom
          }}</p>

        <p class="text-white font-medium leading-7"><span class="opacity-70">Price:</span> $
          {{ apartment.details.price.toLocaleString('en-US', {useGrouping: true}).replace(/,/g, ' ') }}</p>
      </div>
    </div>
  </router-link>
</template>


<style scoped>
.apartment:hover .details {
  display: block;
}


.apartment:hover .sold {
  display: none;
}

@media not all and (min-width: 768px) {
  .sold-apartment {
    background-color: #E35553 !important;
    opacity: 0.7 !important;
  }
}
</style>