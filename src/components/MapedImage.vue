<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
// defineProps(['image_path', 'polygons'])
const image_path = await import('@/assets/images/01_00001.jpg')
const polygons = []
const emit = defineEmits(['polygonClicked'])
// const store = useStore()
</script>
<template>
    <div class="relative mb-4">
        <img class="w-full h-full rounded-xl" :src="image_path">
        <!-- polygons -->
        <div v-for="polygon in polygons"
            @click.prevent="emit('polygonClicked', polygon)"
            class="pointer-events-none lg:pointer-events-auto absolute opacity-50 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300 hover:opacity-50"
            :class="{'!bg-[#FFFFFF]': polygon?.block == store.getters['flats/block']}"
            :style="{
                width: polygon?.width,
                height: polygon?.height,
                clipPath: `polygon(${polygon?.points})`,
                top: polygon?.top,
                left: polygon?.left
            }">
        </div>
    </div>
</template>