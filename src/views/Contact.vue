<script setup>
import useContact from "@/composables/contact/useContact";
import Info from "@/components/contact/Info.vue";
import Form from "@/components/contact/Form.vue";
import Map from "@/components/contact/Map.vue";

const heading = useContact();
</script>

<template>
  <div class="max-w-7xl mt-20 mb-44 mx-auto space-y-14">
    <h1 class="text-8xl font-medium leading-normal" v-text="heading"/>
    <Info/>
    <div class="grid grid-cols-2 gap-36">
      <Form/>
      <Map/>
    </div>
  </div>
</template>
