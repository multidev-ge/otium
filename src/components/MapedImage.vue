<script setup>
defineProps(['image_path', 'options'])
const emit = defineEmits(['blockClicked'])
</script>
<template>
    <div class="relative mb-4">
        <img class="w-full h-full rounded-xl" :src="image_path">
        <div v-for="option in options"
            @click.prevent="emit('blockClicked', option)"
            class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300 hover:opacity-50"
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