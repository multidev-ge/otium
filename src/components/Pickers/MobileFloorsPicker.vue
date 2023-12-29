<script setup>
import { onMounted, ref } from "vue"
import MyScrollPicker from "@/components/ProjectInner/MyScrollPicker.vue"
import ArrowRight from "@/assets/icons/arrow-right.vue"
import XIcon from "@/assets/icons/xIcon.vue"
import RightArrow from "@/assets/icons/apartmentFinderPage/rightArrow.vue"
import useProjects from "../../composables/useProjects"
import { useProjectBanner } from "../../composables/useProjectBanner"
import { useI18n } from "vue-i18n"
import floorOrder from "@/helpers/floorOrder";
import { useRouter } from "vue-router"
import { useStore } from "vuex"


const props = defineProps(['type'])

const { block, floor, floors, blocks, getBlocks, getFloors } = useProjects()
const { t } = useI18n({ useScope: 'global' })
const store = useStore()
const router = useRouter()
const picker_floor = ref(null)
const picker_block = ref(null)

// const router = useRouter()
const project = useProjectBanner()
// const { t } = useI18n({ useScope: 'global' })
const { data, functions } = project
const { popupIsOpen } = data
const { openPopup, closePopup } = functions

function setBlock() {
    // closePopup()
    store.commit("flats/SET_STATE", { key: "block_id", value: picker_block.value })
    block.value = picker_block.value
    getFloors()
    // openPopup()
}
function setFloor() {
    closePopup()
    floor.value = (picker_floor.value) ? picker_floor.value : 1
    router.push({
        name: 'Floor',
        params: {
            id: floor.value
        }
    })
}

onMounted(async () => {

    store.commit("flats/SET_STATE", { key: 'project_id', value: 1 })
    
    if (!blocks.value?.length) {
        await getBlocks()
    }
    if(!floors.value?.data?.length){
        await getFloors()
    }
})
</script>
<template>
    <div class="block lg:hidden">
        <button @click="openPopup" class="w-full py-3 mt-5 px-6 bg-[#F0EEEC] rounded-2xl font-medium">
            <!-- <span v-if="block">{{ t('floors.chooseAFloor') }}</span> -->
            <span>{{ t('floors.chooseABlock') }}</span>
            <arrow-right class="inline-block ml-1" />
        </button>

        <div v-if="popupIsOpen" class="fixed w-full bg-[#FFFFFF] left-0 bottom-0 z-50 rounded-t-xl p-6">
            <XIcon @click="() => { block = null; closePopup() }" class="absolute top-6 right-6" />
            <ArrowRight v-if="block" @click.prevent="block = null" class="absolute top-6 left-6 rotate-180" />
            <div class="flex flex-col items-center">

                <div class="text-xl font-medium">
                    <!-- <a v-if="block" class="-ml-4 mr-2" href="#" >{{ t('floors.backToBlocks') }}</a> -->
                    <span v-if="block">{{ t('floors.chooseAFloor') }}</span>
                    <span v-else>{{ t('floors.chooseABlock') }}</span>
                </div>

                <MyScrollPicker v-if="block" class="my-7" v-model="picker_floor" :options="floors.map((e) => {
                    return {
                        name: floorOrder(e.floor),
                        value: e.id
                    }
                })" />

                <MyScrollPicker v-else class="my-7" v-model="picker_block" :options="blocks.map((e) => {
                    return {
                        name: e?.name,
                        value: e?.id
                    }
                })" />

                <button v-if="block" @click="setFloor" class="w-full p-3 bg-black rounded-2xl text-[#FFFFFF]">
                    {{ t('floors.choose') }}
                    <right-arrow color="white" class="inline-block ml-1" />
                </button>

                <button v-else @click="setBlock" class="w-full p-3 bg-black rounded-2xl text-[#FFFFFF]">
                    {{ t('floors.choose') }}
                    <right-arrow color="white" class="inline-block ml-1" />
                </button>

            </div>
        </div>
    </div>
</template>