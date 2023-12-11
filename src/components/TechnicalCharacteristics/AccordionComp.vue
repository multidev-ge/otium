<script setup>
import useTechnical from "@/composables/useTechnical";
import { useRoute } from "vue-router";
const route = useRoute();
const { technicalinfo } = useTechnical();

const getContentList = (item) => {
  const contentList = [];
  for (let i = 1; i <= 12; i++) {
    const icon = item[`icon${i}`];
    const title = item[`title${i}`];
    if (icon && title) {
      contentList.push({ icon, title });
    }
  }
  return contentList;
}

defineProps(['content'])
</script>

<template>
  <div class="container mx-auto md:px-0 mt-9 md:mt-0">
    <ul class="m-d expand-list">
      <li v-for="({type, data}, index) in content" class="mb-2" :class="{'first-item': index === 0}" data-md-content="200">
        <label name="tab" :for="`tab${index}`" tabindex="-1" class="tab_lab text-2xl font-medium flex items-center" role="tab">
          <span class="inline bg-[#F2F2F2] px-3 py-2 rounded-xl mr-3 md:mr-5">
            <img class="inline" :src="`https://dashboard.otium.ge/uploads/${data?.icon}`" alt="" />
          </span>
          <span class="">{{ data?.title }}</span>
          <span class="open-close-icon mb-6"><i class="fas fa-plus"></i><i class="fas fa-minus"></i></span>
        </label>
        <input type="checkbox" class="tab" :id="`tab${index}`" tabindex="0" />
        <div class="content text-lg" v-html="data?.content"></div>
      </li>
    </ul>
  </div>
</template>
<style>
.myspanstyle {
  transform: translate(0, -29px) !important;
}

/* Media query for screens up to 768px wide */
@media (max-width: 768px) {
  .myspanstyle {
    transform: translate(0, -37px) !important;
    /* Adjust as needed */
  }
}

.mycontentstyle {
  display: grid;
  grid-template-columns: 30px 1fr;
}

.m-d.expand-list>li.first-item {
  margin-top: 0;
}

.m-d.expand-list>li[class^="border-b-0"] {
  border-bottom: none;
}

.m-d.expand-list {
  margin: 0;
  padding: 0;
}

.m-d.expand-list>li {
  list-style-type: none;
  padding: 15px 0;
  margin-top: 15px;
  padding-bottom: 32px;
  border-bottom: 1px solid #00000033;
  position: relative;
  /*         max-width: 80%; */
}

.m-d label[class^="tab"]:hover {
  cursor: pointer;
}

.m-d input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.m-d input[class^="tab"] {
  /* width: 100%;
  height: 60px; */
  position: absolute;
  /* left: 0;
  top: 0; */
  inset: 0;
}

.m-d input[class^="tab"]:hover {
  cursor: pointer;
}

.m-d .content {
  height: auto;
  max-height: 0;
  /*        background: yellow;*/
  overflow: hidden;
  transform: translateY(20px);
  transition: all 180ms ease-in-out 0ms;
}

.m-d li[data-md-content="100"] input[class^="tab"]:checked~.content {
  max-height: 100px;
  transition: all 150ms ease-in-out 0ms;
}

.m-d li[data-md-content="200"] input[class^="tab"]:checked~.content {
  max-height: 200px;
  transition: all 200ms ease-in-out 0ms;
}

.m-d li[data-md-content="300"] input[class^="tab"]:checked~.content {
  max-height: 300px;
  transition: all 250ms ease-in-out 0ms;
}

.m-d li[data-md-content="400"] input[class^="tab"]:checked~.content {
  max-height: 400px;
  transition: all 250ms ease-in-out 0ms;
}

.m-d li[data-md-content="500"] input[class^="tab"]:checked~.content {
  max-height: 500px;
  transition: all 250ms ease-in-out 0ms;
}

.m-d li[data-md-content="600"] input[class^="tab"]:checked~.content {
  max-height: 600px;
  transition: all 250ms ease-in-out 0ms;
}

.m-d li[data-md-content="700"] input[class^="tab"]:checked~.content {
  max-height: 700px;
  transition: all 300ms ease-in-out 0ms;
}

.m-d li[data-md-content="800"] input[class^="tab"]:checked~.content {
  max-height: 800px;
  transition: all 300ms ease-in-out 0ms;
}

.m-d li[data-md-content="900"] input[class^="tab"]:checked~.content {
  max-height: 900px;
  transition: all 300ms ease-in-out 0ms;
}

.m-d li[data-md-content="1000"] input[class^="tab"]:checked~.content {
  max-height: 1000px;
  transition: all 350ms ease-in-out 0ms;
}

.m-d li[data-md-content=""] input[class^="tab"]:checked~.content {
  max-height: 1000px;
  transition: all 250ms ease-in-out 0ms;
}

.m-d input[class^="tab"]:checked~.content {
  margin-bottom: 20px;
}

.m-d .open-close-icon {
  display: inline-block;
  position: absolute;
  right: 20px;
  transform: translatey(2px);
}

.m-d .open-close-icon i {
  position: absolute;
  top:50%;
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
