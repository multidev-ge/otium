<script setup>
import accordion from "./accordion.vue";
</script>
<template>
  <div>
    <div class="pb-8">
      <router-link class="inline-block" to="/projects">
        <button class="text-base text-[#000000] flex gap-3">
          <img class="mt-1" src="../../assets/icons/arrow-left.svg" alt="" />
          Back to Project
        </button>
      </router-link>
    </div>
    <div class="md:flex ">
      <div class="md:w-1/3	w-6/12		">
        <h2 class="text-[#000000] text-3xl	 md:text-4xl	 	">Technical characteristics</h2>
      </div>
      <div>
        <accordion />
        
      </div>
    </div>
  </div>
</template>
