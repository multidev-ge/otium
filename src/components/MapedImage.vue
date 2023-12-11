<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

defineProps(['image_path', 'options'])
const emit = defineEmits(['blockClicked'])
const store = useStore()
</script>
<template>
    <div class="relative mb-4">
        <img class="w-full h-full rounded-xl" :src="image_path">
        <div v-for="option in options"
            @click.prevent="emit('blockClicked', option)"
            class="pointer-events-none lg:pointer-events-auto absolute opacity-50 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300 hover:opacity-50"
            :class="{'!bg-[#FFFFFF]': option?.block == store.getters['flats/block']}"
            :style="{
                width: option.width,
                height: option.height,
                clipPath: `polygon(${option.points})`,
                top: option.top,
                left: option.left
            }">
        </div>
    </div>
</template>