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
};
</script>

<template>
  <div class="container mx-auto md:px-0 mt-9 md:mt-0">
    <ul class="m-d expand-list">
      <li class="first-item" data-md-content="200">
        <label
          name="tab"
          for="tab1"
          tabindex="-1"
          class="tab_lab text-2xl font-medium"
          role="tab"
        >
          <span class="inline bg-[#F2F2F2] px-3 py-2 rounded-xl mr-3 md:mr-5">
            <img
              class="inline mb-1"
              :src="technicalinfo[0].faqs[0].icon"
              alt=""
            />
          </span>
          {{ technicalinfo[0].faqs[0].title }}</label
        >
        <input type="checkbox" class="tab" id="tab1" tabindex="0" />
        <span class="open-close-icon"
          ><i class="fas fa-plus"></i><i class="fas fa-minus"></i
        ></span>


        <div class="content text-lg">
          {{ technicalinfo[0]?.faqs[0]?.faq[route.params.id]?.title }}
        </div>

        <div
          v-for="(content, index) in getContentList(
            technicalinfo[0].faqs[0].faq[route.params.id]
          )"
          :key="index"
          class="mycontentstyle content text-lg gap-3 flex"
        >
          <img class="inline mb-1 mt-1" :src="content.icon" alt="" />
         <h2 class=""> {{ content.title }}</h2>
        </div>
      </li>

      <li class="" data-md-content="300">
        <div class="flex">
          <label
            name="tab"
            for="tab2"
            tabindex="-1"
            class="tab_lab text-2xl font-medium"
            role="tab"
          >
            <div class="flex gap-2">
              <span
                class="inline mt-2 md:mt-0  w-[48px] h-[45px] bg-[#F2F2F2] px-3 py-2 rounded-xl mr-3 md:mr-5"
              >
                <img
                  class="inline mb-1 "
                  :src="technicalinfo[0].faqs[1].icon"
                  alt=""
                />
              </span>
              <h2 class="  md:w-full w-2/5 	md:mt-2">{{ technicalinfo[0].faqs[1].title }}</h2>
            </div></label
          >
        </div>
        <input type="checkbox" class="tab" id="tab2" tabindex="0" />
          <span class="open-close-icon myspanstyle"
            ><i class="fas fa-plus"></i><i class="fas fa-minus"></i
          ></span>
        <div
          class="content text-lg"
          v-for="(description, index) in technicalinfo[0]?.faqs[1]?.faq[
            route.params.id
          ]"
          :key="index"
        >
          {{ description }}
        </div>
      </li>
      <li class="border-b-0" data-md-content="600">
        <label
          name="tab"
          for="tab3"
          tabindex="-1"
          class="tab_lab text-2xl font-medium"
          role="tab"
        >
          <span class="inline bg-[#F2F2F2] px-3 py-2 rounded-xl mr-3 md:mr-5">
            <img
              class="inline mb-1"
              :src="technicalinfo[0].faqs[2].icon"
              alt=""
            />
          </span>
          {{ technicalinfo[0].faqs[2].title }}</label
        >
        <input type="checkbox" class="tab" id="tab3" tabindex="0" />
        <span class="open-close-icon"
          ><i class="fas fa-plus"></i><i class="fas fa-minus"></i
        ></span>
        
        <div class="content text-lg"></div>
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
    transform: translate(0, -37px) !important; /* Adjust as needed */
  }
}
.mycontentstyle {
  display: grid;
  grid-template-columns: 30px 1fr ;
}
.m-d.expand-list > li.first-item {
  margin-top: 0;
}
.m-d.expand-list > li[class^="border-b-0"] {
  border-bottom: none;
}
.m-d.expand-list {
  margin: 0;
  padding: 0;
}
.m-d.expand-list > li {
  list-style-type: none;
  padding: 15px 0;
  margin-top: 15px;
  padding-bottom: 32px;
  border-bottom: 1px solid #00000033;
  position: relative; /*         max-width: 80%; */
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
  width: 100%;
  height: 60px;
  position: absolute;
  left: 0;
  top: 0;
}
.m-d input[class^="tab"]:hover {
  cursor: pointer;
}
.m-d .content {
  height: auto;
  max-height: 0; /*        background: yellow;*/
  overflow: hidden;
  transform: translateY(20px);
  transition: all 180ms ease-in-out 0ms;
}
.m-d li[data-md-content="100"] input[class^="tab"]:checked ~ .content {
  max-height: 100px;
  transition: all 150ms ease-in-out 0ms;
}
.m-d li[data-md-content="200"] input[class^="tab"]:checked ~ .content {
  max-height: 200px;
  transition: all 200ms ease-in-out 0ms;
}
.m-d li[data-md-content="300"] input[class^="tab"]:checked ~ .content {
  max-height: 300px;
  transition: all 250ms ease-in-out 0ms;
}
.m-d li[data-md-content="400"] input[class^="tab"]:checked ~ .content {
  max-height: 400px;
  transition: all 250ms ease-in-out 0ms;
}
.m-d li[data-md-content="500"] input[class^="tab"]:checked ~ .content {
  max-height: 500px;
  transition: all 250ms ease-in-out 0ms;
}
.m-d li[data-md-content="600"] input[class^="tab"]:checked ~ .content {
  max-height: 600px;
  transition: all 250ms ease-in-out 0ms;
}
.m-d li[data-md-content="700"] input[class^="tab"]:checked ~ .content {
  max-height: 700px;
  transition: all 300ms ease-in-out 0ms;
}
.m-d li[data-md-content="800"] input[class^="tab"]:checked ~ .content {
  max-height: 800px;
  transition: all 300ms ease-in-out 0ms;
}
.m-d li[data-md-content="900"] input[class^="tab"]:checked ~ .content {
  max-height: 900px;
  transition: all 300ms ease-in-out 0ms;
}
.m-d li[data-md-content="1000"] input[class^="tab"]:checked ~ .content {
  max-height: 1000px;
  transition: all 350ms ease-in-out 0ms;
}
.m-d li[data-md-content=""] input[class^="tab"]:checked ~ .content {
  max-height: 1000px;
  transition: all 250ms ease-in-out 0ms;
}
.m-d input[class^="tab"]:checked ~ .content {
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
  left: 0;
}
.m-d .open-close-icon .fa-minus {
  transform: rotate(-90deg);
  transition: transform 150ms ease-in-out 0ms;
}
.m-d input[class^="tab"]:checked ~ .open-close-icon .fa-minus {
  transform: rotate(0deg);
  transition: transform 150ms ease-in-out 0ms;
}
.m-d .open-close-icon .fa-plus {
  opacity: 1;
  transform: rotate(-90deg);
  transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms;
}
.m-d input[class^="tab"]:checked ~ .open-close-icon .fa-plus {
  opacity: 0;
  transform: rotate(0deg);
  transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms;
}
</style>
