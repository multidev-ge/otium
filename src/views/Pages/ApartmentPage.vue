<script setup>
import mainLayout from "@/layouts/mainLayout.vue";
import ContactRightArrowIcon from "@/assets/icons/Contact/ContactRightArrowIcon.vue";
import ApartmentDownloadIcon from "@/assets/icons/Apartment/ApartmentDownloadIcon.vue";
import ApartmentKitchenIcon from "@/assets/icons/Apartment/ApartmentKitchenIcon.vue";
import ApartmentHallIcon from "@/assets/icons/Apartment/ApartmentHallIcon.vue";
import ApartmentBedroomIcon from "@/assets/icons/Apartment/ApartmentBedroomIcon.vue";
import ApartmentClosetIcon from "@/assets/icons/Apartment/ApartmentClosetIcon.vue";
import ApartmentWCIcon from "@/assets/icons/Apartment/ApartmentWCIcon.vue";
import ApartmentTerraceIcon from "@/assets/icons/Apartment/ApartmentTerraceIcon.vue";
import {ref} from "vue";

const currentRoom = ref(3);

const rooms = ref([
  {
    icon: ApartmentKitchenIcon,
    title: 'kitchen/living room',
    area: 20
  },
  {
    icon: ApartmentHallIcon,
    title: 'Hall',
    area: 8
  },
  {
    icon: ApartmentBedroomIcon,
    title: 'Bedroom',
    area: 23
  },
  {
    icon: ApartmentTerraceIcon,
    title: 'Terrace',
    area: 24
  },
  {
    icon: ApartmentWCIcon,
    title: 'WC',
    area: 9
  },
  {
    icon: ApartmentClosetIcon,
    title: 'Closet',
    area: 18
  },
  {
    icon: ApartmentBedroomIcon,
    title: 'Bedroom',
    area: 26
  },
]);
</script>

<template>
  <mainLayout>
    <div class="container mx-auto flex flex-col px-4 gap-y-5">
      <router-link :to="{name: 'Floor'}"
                   class="flex items-center gap-x-1.5 px-3 py-6 rounded-2xl font-medium leading-8">
        <contact-right-arrow-icon class="rotate-180" stroke="black"/>
        Back to floor
      </router-link>
      <div class="flex">
        <div class="flex flex-col gap-y-7">
          <h1 class="text-3.5xl xl:text-4.5xl font-medium whitespace-nowrap" v-text="'Apartment name'"/>
          <div class="flex flex-col gap-y-1.5">
            <h3 class="text-xl xl:text-xl font-medium leading-8" v-text="'Floor'"/>
            <select
                class="font-medium leading-6 py-3 px-4 focus:outline-0 rounded-md border border-black border-opacity-40">
              <option value="10">10th</option>
              <option value="9">9th</option>
              <option value="8">8th (sold)</option>
              <option value="7">7th</option>
              <option value="6" selected>6th</option>
              <option value="5">5th</option>
              <option value="4">4th</option>
              <option value="3">3rd</option>
              <option value="2">2nd</option>
              <option value="1">1st</option>
            </select>
          </div>
          <div class="flex xl:flex-col gap-x-7 xl:gap-y-7">
            <div class="flex flex-col gap-y-1.5">
              <span class="font-medium leading-6 opacity-40" v-text="'Area, m2'"/>
              <p class="text-xl font-medium leading-8" v-text="'120 m2'"/>
            </div>
            <div class="flex flex-col gap-y-1.5">
              <span class="font-medium leading-6 opacity-40" v-text="'Price'"/>
              <p class="text-4.5xl font-bold text-[#7B9F89]" v-text="'$ 80 000'"/>
            </div>
          </div>
          <div class="flex flex-col gap-y-5 mt-28">
            <router-link :to="{name: 'Contact'}"
                         class="xl:w-fit bg-[#883F7C] flex items-center gap-x-1.5 px-7 py-3 rounded-2xl text-[#FFFAFA] font-medium leading-6">
              Request a Call
              <contact-right-arrow-icon/>
            </router-link>
            <a href="#"
               class="xl:w-fit bg-[#F0EEEC] flex items-center gap-x-1.5 px-6 py-3 rounded-2xl font-medium leading-6">
              Download PDF
              <ApartmentDownloadIcon/>
            </a>
          </div>
        </div>
        <div class="relative ml-1 mr-8">
          <img src="../../assets/images/apartment/apartment.png" alt="apartment image">
          <div class="absolute top-1/2 left-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width="177" height="130" viewBox="0 0 177 130" fill="none">
              <path
                  d="M87.3938 114.511L125.559 130L177 41.4894L59.7375 0L0 81.8723L42.0375 97.3617L44.8031 110.638L81.3094 124.468L87.3938 114.511Z"
                  fill="#7B9F89" fill-opacity="0.6"/>
            </svg>
          </div>
        </div>
        <div class="flex flex-col justify-between py-3">
          <div @click="currentRoom = index + 1" v-for="(room, index) in rooms" :key="index"
               class="cursor-pointer flex flex-col gap-y-1.5">
            <div class="flex gap-x-1.5" :class="{'text-[#7B9F89] opacity-80': currentRoom === index + 1}">
              <component :is="room.icon"/>
              <span v-text="room.title" class="whitespace-nowrap font-medium leading-6 opacity-40"/>
            </div>
            <p class="text-xl font-medium leading-8" :class="{'text-[#7B9F89]': currentRoom === index + 1}"
               v-text="room.area + ' m2'"/>
          </div>
        </div>
      </div>
    </div>
  </mainLayout>
</template>