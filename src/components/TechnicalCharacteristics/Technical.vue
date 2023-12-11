<script setup>
import { onMounted, ref } from "vue"
// import accordioncomp from "./AccordionComp.vue"
import { useRoute } from "vue-router"
import { useI18n } from "vue-i18n"
// Initialization for ES Users
import {
  Collapse,
  initTE,
} from "tw-elements";
const props = defineProps(['title', 'blocks'])

const { t } = useI18n({ useScope: "global" })
const route = useRoute()

const processing = ref(false)
const expanded = ref(null)

function setExpanded(index) {
  if(processing.value){
    return
  }
  setTimeout(() => {
    processing.value == true
    if (props.blocks.length) {
      expanded.value = (expanded.value === index) ? null : index
    }
  }, 200)

  processing.value == false
}

onMounted(() => {
  setTimeout(() => {
    initTE({ Collapse })
    console.log("initialized")
  }, 1000)
})

</script>
<template>
  <section class="w-full flex flex-col space-y-4">
    <router-link class="inline-block" :to="{ name: 'project', params: { id: route.params?.id } }">
      <button class="text-base text-[#000000] flex gap-3">
        <img class="mt-1" src="../../assets/icons/arrow-left.svg" alt="" />
        {{ t("technical.backToProject") }}
      </button>
    </router-link>
    <div class="flex flex-col md:flex-row">
      <div class="flex-initial py-4">
        <h2 class="md:w-6/12 text-[#000000] text-3xl md:text-4xl">{{ title }}</h2>
      </div>
      <div class="w-full">
        <div v-if="blocks.length" id="accordionExample">
          <div v-for="({ data, type }, index) in blocks"
            class="bg-white border-b border-[#00000033] [([data-te-collapse-collapsed])]:border-none"
            :class="[
              { '': (index === 0) },
              { '': (index === blocks.length - 1) },
            ]">
            <h2 class="accordion-header mb-0" :id="`heading${index}`">
              <button @click="setExpanded(index)" class="group relative flex w-full items-center border-0 bg-white py-4 text-left text-base text-neutral-800
                  transition [overflow-anchor:none] hover:z-[2] 
                  focus:z-[3] focus:outline-none 
                  [&:not([data-te-collapse-collapsed])]:bg-white 
                  [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]
                  [&[data-te-collapse-collapsed]]:transition-none" type="button" data-te-collapse-init
                data-te-collapse-collapsed :data-te-target="`#collapse${index}`" aria-expanded="false"
                :aria-controls="`collapse${index}`">
                <div class="flex flex-row items-center space-x-2">
                  <div class="bg-[#F2F2F2] rounded-xl h-auto p-3">
                    <img class="object-cover" :src="`https://dashboard.otium.ge/uploads/${data?.icon}`" alt="" />
                  </div>
                  <span class="text-2xl font-medium">{{ data?.title }}</span>
                </div>
                <span class="ml-auto h-5 w-5 origin-center rotate-180 transition-transform duration-200 ease-in-out 
                  group-[[data-te-collapse-collapsed]]:rotate-0 
                  ">
                  <i class="fas" :class="[(expanded == index) ? 'fa-minus' : 'fa-plus']"></i>
                  <!-- <i class="fas fa-plus"></i> -->
                </span>
              </button>
            </h2>
            <div :id="`collapse${index}`" class="!visible hidden" data-te-collapse-item
              :aria-labelledby="`heading${index}`" data-te-parent="#accordionExample">
              <div class="py-4 text-lg" v-html="data?.content"></div>
            </div>
          </div>
        </div>
        <!-- <accordioncomp :content="blocks" /> -->
      </div>
    </div>
  </section>
</template>
<style scoped>
.m-d .open-close-icon {
  display: inline-block;
  position: absolute;
  right: 20px;
  transform: translatey(2px);
}

.m-d .open-close-icon i {
  position: absolute;
  top: 50%;
  left: 0;
}

.m-d .open-close-icon .fa-minus {
  transform: rotate(-90deg);
  transition: transform 150ms ease-in-out 0ms;
}

.m-d input[class^="tab"]:checked~.open-close-icon .fa-minus {
  transform: rotate(0deg);
  transition: transform 150ms ease-in-out 0ms;
}

.m-d .open-close-icon .fa-plus {
  opacity: 1;
  transform: rotate(-90deg);
  transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms;
}

.m-d input[class^="tab"]:checked~.open-close-icon .fa-plus {
  opacity: 0;
  transform: rotate(0deg);
  transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms;
}
</style>
