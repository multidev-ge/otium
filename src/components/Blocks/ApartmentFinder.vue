<script setup>
// import FiltersPart from "@/components/apartmentFinderPage/filtersPart.vue"
import TwoDotRange from "@/components/apartmentFinderPage/universalComponents/twoDotRange.vue";
import RightPart from "@/components/apartmentFinderPage/rightPart.vue"
import useApartments from "../../composables/useApartments"
import useProjects from "../../composables/useProjects"
import { useI18n } from "vue-i18n"
// import { onMounted } from "vue"
import { useStore } from "vuex"
import { onMounted } from "vue";
const { t } = useI18n({ useScope: "global" })

const { sold, maxRooms, filterRooms, doubleSliderOptions, getFlats, twoChange, updateRooms, clearFilter } = useApartments()

const { projects, blocks, floors, flats, block_id, floor_id, project_id, getProjects, getBlocks } = useProjects()

const store = useStore()

onMounted(async () => {
    if (!projects.value?.data?.length) {
        await getProjects()
    }
    if (!blocks.value?.length) {
        await getBlocks()
    }
    if (!flats.value?.data?.length) {
        await getFlats()
    }
})


</script>
<template>
    <div class="lg:flex justify-between mt-20 sm:max-2xl:mt-32 2xl:mt-40">
        <div class="w-11/12 lg:w-1/6 lg:mx-0 mx-auto flex flex-col font-medium  gap-10">
            <p class="text-4xl ">{{ t("filters.title") }}</p>
            <div class="flex flex-col gap-3">
                <label class="text-xl font-normal" for="project">{{ t("filters.project") }}</label>
                <select v-model="project_id" :disabled="!projects?.data?.length"
                    class="w-full py-3 rounded-md border-r-8 border-transparent px-2 text-lg outline outline-black outline-1 opacity-40"
                    :class="Array.from(projects, (project) => project.id).includes(project_id) ? 'opacity-100' : 'opacity-40'">
                    <option :value="null" disabled>{{ t("filters.project") }}</option>
                    <option v-for="component in projects.data" :value="component?.id" :key="component?.id">{{
                        component.title }}</option>
                </select>
            </div>
            <div class="flex flex-col gap-3">
                <label class="text-xl font-normal" for="project">{{ t("filters.block") }}</label>
                <select v-model="block_id" :disabled="!blocks.length"
                    class="w-full py-3 rounded-md border-r-8 border-transparent px-2 text-lg outline outline-black outline-1 opacity-40"
                    :class="Array.from(projects, (project) => project.id).includes(project_id) ? 'opacity-100' : 'opacity-40'">
                    <option :value="null" disabled>{{ t("filters.block") }}</option>
                    <option v-for="block in blocks" :value="block?.id" :key="block?.id">{{ block?.name }}</option>
                </select>
            </div>
            <div class="flex flex-col gap-3">
                <label class="text-xl" for="project" v-text="t('filters.rooms')" />
                <div class="flex gap-2">
                    <div class="w-10 h-10 text-lg flex items-center justify-center border-black border rounded-md cursor-pointer"
                        @click.prevent="updateRooms(index + 1)" v-for="(room, index) in maxRooms" :class="[
                            (filterRooms === (index + 1)) ? 'bg-[#883F7C] text-white' : ''
                        ]">
                        <p>{{ index + 1 }}</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-3">
                <label class="text-xl font-normal" for="project">{{ t("filters.floor") }}</label>
                <select v-model="floor_id" :disabled="!floors?.length || !block_id"
                    class="w-full py-3 rounded-md border-r-8 border-transparent px-2 text-lg outline outline-black outline-1 opacity-40"
                    :class="Array.from(projects, (project) => project.id).includes(project_id) ? 'opacity-100' : 'opacity-40'">
                    <option :value="null" disabled>{{ t("filters.floor") }}</option>
                    <option v-for="floor in floors" :value="floor?.id" :key="floor?.id">{{ floor?.floor }}</option>
                </select>
            </div>

            <TwoDotRange name="area" :displayName="t('filters.area')" :max-value="doubleSliderOptions.area.maxValue"
                :default-values="[doubleSliderOptions.area.minValue + 10, doubleSliderOptions.area.maxValue - 50]"
                :decimal=0 :merge="35" @onChange="twoChange" />

            <TwoDotRange name="price" :displayName="t('filters.price')" :max-value="doubleSliderOptions.price.maxValue"
                :default-values="[doubleSliderOptions.price.minValue, doubleSliderOptions.price.maxValue - 100000]"
                :merge="200000" :prefix="doubleSliderOptions.price.prefix" :decimal=0 thousand="," @onChange="twoChange" />

            <div class="flex flex-col gap-3">
                <p class="text-xl">{{ t('filters.sold') }}</p>
                <div class="flex gap-10">
                    <div class="flex gap-2">
                        <input v-model="sold" class="w-5 h-5 accent-black rounded-full" name="hideShow" value="1"
                            type="radio">
                        <label>{{ t('filters.show') }}</label>
                    </div>
                    <div class="flex gap-2">
                        <input v-model="sold" class="w-5 h-5 accent-black rounded-full" value="0" name="hideShow"
                            type="radio">
                        <label>{{ t('filters.hide') }}</label>
                    </div>
                </div>
            </div>
            <p @click="clearFilter" class="underline opacity-40 text-base cursor-pointer">{{ t('filters.clear') }}</p>
        </div>
        <!-- <FiltersPart /> -->
        <RightPart />
    </div>
</template>