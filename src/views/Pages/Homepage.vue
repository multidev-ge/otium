<script>
import { mapGetters, mapActions } from 'vuex'
import ProjectBanner from "@/components/ProjectInner/ProjectBanner.vue"
import MainLayout from "@/layouts/mainLayout.vue"
import Offerings from "@/components/ProjectInner/Offerings.vue"
import RightPart from "@/components/apartmentFinderPage/rightPart.vue"
import FiltersPart from "@/components/apartmentFinderPage/filtersPart.vue"
import MortgageCalculator from "@/components/Apartment/MortgageCalculator.vue"
import HomePageTitle from "../../components/Headings/HomePageTitle.vue"
import ContactMap from "@/components/Contact/ContactMap.vue";
import WhatWeOffer from "../../components/Blocks/WhatWeOffer.vue";
import { useI18n } from 'vue-i18n'
export default {
  components: {
    ProjectBanner,
    MainLayout,
    Offerings,
    RightPart,
    FiltersPart,
    MortgageCalculator,
    HomePageTitle,
    ContactMap,
    WhatWeOffer,
},
  setup() {
    const { t } = useI18n({ useScope: "global" })

    return { t }
  },
  computed: {
    ...mapGetters("pages", ["blocks"])
  },
  methods: {
    ...mapActions("pages", ["getPage"])
  },
  mounted() {
    this.getPage(3)
  }

}

</script>
<template>
  <MainLayout>
    <HomePageTitle :title="t('home.title')" />
    <div class="flex flex-col fa-1xlg:gap-40 gap-20">
      <ProjectBanner />
      <!-- <Offerings /> -->
<!-- <div class="relative">
      <img class="w-full h-full rounded-xl" src="@/assets/images/01_00001.jpg" usemap="#image-map">

      <map name="image-map">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" coords="359,2199,1322,2196,1413,2100,1410,2185,1322,2294,362,2291" shape="poly">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" href="" coords="362,2033,1325,2030,1410,1959,1410,2086,1311,2171,362,2174" shape="poly">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" href="" coords="369,2009,1325,2030,1420,1970,1417,1829,1325,1871,369,1878" shape="poly">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" href="" coords="376,1857,1322,1857,1406,1808,1403,1698,1322,1720,369,1716" shape="poly">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" href="" coords="373,1695,1325,1705,1410,1684,1410,1561,1332,1568,376,1575" shape="poly">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" href="" coords="383,1401,1332,1404,1413,1415,1410,1538,1329,1545,387,1545" shape="poly">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" href="" coords="387,1374,1329,1388,1403,1398,1410,1285,1325,1257,390,1250" shape="poly">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" href="" coords="390,1224,1329,1231,1403,1267,1417,1150,1325,1104,394,1104" shape="poly">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" href="" coords="1322,1076,1410,1122,1413,1012,1329,942,394,945,394,1083" shape="poly">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" href="" coords="412,874,412,782,1304,793,1364,828,1364,909,1329,881" shape="poly">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" href="" coords="412,627,408,733,1322,726,1360,768,1364,691,1315,631" shape="poly">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" href="" coords="2595,2335,2510,2236,2510,2145,2595,2233,3544,2233,3544,2339" shape="poly">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" href="" coords="3547,2209,3547,2074,2584,2078,2510,2007,2514,2110,2595,2209" shape="poly">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" href="" coords="3551,2043,3551,1909,2581,1898,2503,1856,2507,1969,2581,2040" shape="poly">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" href="" coords="3551,1882,3547,1740,2581,1737,2503,1705,2507,1825,2581,1867" shape="poly">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" href="" coords="3537,1712,3537,1582,2581,1582,2503,1560,2503,1687,2574,1716" shape="poly">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" href="" coords="3547,1546,3547,1408,2591,1405,2507,1415,2514,1546,2570,1560" shape="poly">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" href="" coords="3551,1376,3547,1238,2577,1249,2503,1288,2507,1397,2584,1387" shape="poly">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" href="" coords="3544,1214,3544,1080,2584,1080,2507,1129,2507,1264,2581,1218" shape="poly">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" href="" coords="3551,1062,3544,917,2584,921,2507,984,2510,1111,2577,1055" shape="poly">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" href="" coords="3533,758,3530,846,2591,843,2563,867,2556,807,2595,758" shape="poly">
          <area class="pointer-events-none lg:pointer-events-auto absolute opacity-80 cursor-pointer hover:!bg-[#FFFFFF] transition duration-300" target="" alt="" title="" href="" coords="3523,606,3526,691,2602,694,2556,762,2556,649,2595,596" shape="poly">
      </map>
</div> -->
      <component v-if="blocks.length" v-for="{ data, type } in blocks" :is="type" :content="data"></component>

      <div class="w-full">
        <contact-map class="h-[840px] md:h-[640px] relative" :with-filter="true" />
      </div>
      <div class="flex md:flex-row flex-col justify-between ">
        <FiltersPart />
        <RightPart />
      </div>
      <MortgageCalculator />
    </div>
  </MainLayout>
</template>