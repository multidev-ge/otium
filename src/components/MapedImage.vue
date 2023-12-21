<script setup>
import { onMounted, ref, watch } from "vue"
import { getImageOriginalSizeFromUrl, el, processPoints } from "../composables/useMapedImages"

const props = defineProps({ image: String, maps: Array })
const fragments = ref([])

onMounted(async () => {
    const { img: { naturalWidth, naturalHeight } } = await getImageOriginalSizeFromUrl(props.image)
    fragments.value = processPoints(props.maps, naturalWidth, naturalHeight)
    console.log(fragments.value)
})
const emit = defineEmits(['clicked', 'hovered'])
</script>
<template>
    <div class="relative mb-4">
        <img class="w-full h-full rounded-xl" :src="image" ref="el">
        <div v-for="fragment in fragments" @click.prevent="emit('clicked', fragment)"
            @hover.prevent="emit('hovered', fragment)" :key="fragment?.index"
            class="pointer-events-none lg:pointer-events-auto absolute cursor-pointer hover:!bg-[#FFFFFF] transition duration-300 opacity-50 hover:opacity-50"
            :style="{
                width: fragment?.width,
                height: fragment?.height,
                clipPath: `polygon(${fragment?.points})`,
                top: fragment?.top,
                left: fragment?.left,
            }">
        </div>
    </div>
</template>
<!-- :class="{ '!bg-[#FFFFFF]': fragment?.block == 1 }"  -->