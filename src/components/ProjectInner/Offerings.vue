<script setup>
import {useProjectInner} from "@/composables/useProjectInner";

const project = useProjectInner()
</script>

<template>
  <div class="w-full flex flex-col lg:flex-row">
    <div class="lg:w-1/4 text-3xl lg:text-4xl font-medium mb-7 lg:mb-0">What we offer you</div>

    <div class="lg:w-3/4 flex lg:justify-center">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-20 gap-x-28">

        <div v-for="o in project.offerings" class="flex flex-col max-w-sm">
          <div class=" flex justify-center items-center w-16 h-16 bg-[#F2F2F2] rounded-xl mb-5">
            <Component :is="o.icon"></Component>
          </div>
          <h4 class="block  text-2xl text-[#000000] mb-2">{{ o.title }}</h4>
          <p class="block text-lg text-[#626262] font-medium">
            {{ o.description }}
          </p>
        </div>

      </div>
    </div>

  </div>
</template>
