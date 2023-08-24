<script setup>
import useFloor from "@/composables/floor/useFloor"
import FloorApartment from "@/components/Floor/FloorApartment.vue";
import FloorCaretUpIcon from "@/assets/icons/Floor/FloorCaretUpIcon.vue";
import plan from "@/assets/images/floor/plan.png";

const img = new Image()
img.src = plan
const width = img.naturalWidth
const height = img.naturalHeight

const floorNumber = 6;
const apartments = useFloor()

apartments.forEach((apartment) => {
  const room = roomDimensions(apartment.points)
  console.log(room)
  apartment.top = room.minY / height * 100 + '%';
  apartment.left = room.minX / width * 100 + '%';
  apartment.width = room.width / width * 100 + '%'
  apartment.height = room.height / height * 100 + '%'
  apartment.points = apartment.points.map(point => {
    const [x, y] = point.split(' ').map(Number);
    const xPercentage = (x - room.minX) / room.width * 100;
    const yPercentage = (y - room.minY) / room.height * 100;
    return `${xPercentage}% ${yPercentage}%`;
  })
})


function roomDimensions(polygonPointsStr) {
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

  for (const pointStr of polygonPointsStr) {
    const [x, y] = pointStr.split(' ').map(Number);
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }

  const width = maxX - minX;
  const height = maxY - minY;

  return {width, height, minX, minY}
}

console.log(apartments)
</script>

<template>
  <div class="flex gap-x-10">
    <div class="relative w-[65vw] h-[28.75vw]">
      <img class="absolute w-full h-full" loading="lazy" src="../../assets/images/floor/plan.png" alt="floor plan">
      <FloorApartment v-for="(apartment, index) in apartments" :apartment="apartment" :key="index"/>
    </div>
        <div class="flex flex-col justify-between items-center">
          <template v-for="i in 5" :key="i">
            <floor-caret-up-icon v-if="floorNumber === floorNumber + 3 - i"/>
            <span v-text="floorNumber + 3 - i" class="cursor-pointer font-medium text-5xl"
                  :class="floorNumber === floorNumber + 3 - i ? 'text-6xl text-[#88407C] px-6 py-2 rounded-3xl border-2 border-[#88407C]' : ''"/>
            <floor-caret-up-icon class="rotate-180" v-if="floorNumber === floorNumber + 3 - i"/>
          </template>
        </div>
  </div>
</template>