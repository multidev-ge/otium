<script>
import { mapGetters, mapActions } from "vuex"
import Dropdown from "@/components/apartmentFinderPage/universalComponents/Dropdown.vue";
import TwoDotRange from "@/components/apartmentFinderPage/universalComponents/twoDotRange.vue";
import apartmentFinder from "@/composables/forApartmentFinder/apartmentFinder";
import { useI18n } from "vue-i18n"
export default {
  components: {
    Dropdown, TwoDotRange, apartmentFinder
  },
  setup() {
    const  { t } = useI18n({useScope: "global"})
    const apartments = apartmentFinder
    const {
      dropDowns,
      rooms,
      selectRoom,
      doubleSliderOptions,
      // clearFilter,
      changeSoldApartmentValue,
      soldApartmentOption
    } = apartments()
    return {
      t,
      apartments,
      dropDowns,
      Srooms: rooms,
      selectRoom,
      doubleSliderOptions,
      // clearFilter,
      changeSoldApartmentValue,
      soldApartmentOption
    }
  },
  computed: {
    project_id: {
      get(){
        return this.$store.state.flats.project_id
      },
      set(val){
        this.$store.commit("flats/SET_PROJECT_ID", val)
        this.$store.dispatch('flats/getFlats')
        this.$store.dispatch('flats/getBlocks')
      }
    },
    block: {
      get(){
        return this.$store.state.flats.block
      },
      set(val){
        this.$store.commit("flats/SET_BLOCK", val)
        this.$store.dispatch('flats/getFlats')
      }
    },
    sold: {
      get(){
        return this.$store.state.flats.sold
      },
      set(val){
        this.$store.commit("flats/SET_SOLD", val)
        this.$store.dispatch('flats/getFlats')
      }
    },
    ...mapGetters('flats', ['blocks', 'requestFilters', 'rooms']),
    ...mapGetters('projects', ['projects']),
  },
  methods: {
    ...mapActions("flats", ['getFlats', 'getBlocks', 'clearFilter']),
    ...mapActions("projects", ['getProjects']),
    updateRooms(room){
      this.$store.commit('flats/SET_ROOMS', room)
      this.$store.dispatch('flats/getFlats')
    },
    twoChange(min, max, name){
      if(name === 'area'){
        this.$store.commit("flats/SET_MIN_AREA", min )
        this.$store.commit("flats/SET_MAX_AREA", max )
      }
      if(name === 'price'){
        this.$store.commit("flats/SET_MIN_PRICE", min )
        this.$store.commit("flats/SET_MAX_PRICE", max )
      }
      this.getFlats()
    }
  },
  mounted(){
    if(!this.projects.length){
      this.getProjects()
    }
    this.getBlocks()
    this.getFlats()
  }
}

</script>
<template>
  <div class="md:w-1/6 w-11/12 md:mx-0 mx-auto flex flex-col font-medium  gap-10">
    <p class="text-4xl ">{{ t("filters.title") }}</p>
    <!-- <dropdown :name="dropDowns.project.name" :defaultName="dropDowns.project.value" :options="projects"/> -->
    <div class="flex flex-col gap-3">
      <label class="text-xl font-normal" for="project">{{ t("filters.project") }}</label>
      <select 
        v-model="project_id"
        class="w-full py-3 rounded-md border-r-8 border-transparent px-2 text-lg outline outline-black outline-1 opacity-40"
        :class="Array.from(projects, (project) => project.id).includes(project_id) ? 'opacity-100' : 'opacity-40'">
        <option :value="null" disabled>{{ t("filters.project") }}</option>
        <option v-for="component in projects" :value="component?.id" :key="component?.id">{{ component.title }}</option>
      </select>
    </div>
    <div class="flex flex-col gap-3">
      <label class="text-xl font-normal" for="project">{{ t("filters.block") }}</label>
      <select 
        v-model="block"
        class="w-full py-3 rounded-md border-r-8 border-transparent px-2 text-lg outline outline-black outline-1 opacity-40"
        :class="Array.from(projects, (project) => project.id).includes(project_id) ? 'opacity-100' : 'opacity-40'">
        <option :value="null" disabled>{{ t("filters.block") }}</option>
        <option v-for="block in blocks" :value="block" :key="block">{{ block }}</option>
      </select>
    </div>
    <!-- <dropdown :name="dropDowns.block.name" :defaultName="dropDowns.block.value" :options="dropDowns.block.list" /> -->
    <div class="flex flex-col gap-3">
      <label class="text-xl" for="project">{{ t("filters.rooms") }}</label>
      <div class="flex gap-2">
        <div class="w-10 h-10 text-lg flex items-center justify-center border-black border rounded-md cursor-pointer"
          @click.prevent="updateRooms(index+1)" v-for="(room, index) in Srooms.quantity"
          :class="[
            (rooms === (index + 1)) ? 'bg-[#883F7C] text-white' : ''
          ]">
          <p>{{ index + 1 }}</p>
        </div>
      </div>
    </div>
    <!-- <dropdown type="floor" :name="dropDowns.floor.name" :defaultName="dropDowns.floor.value" :options="dropDowns.floor.list" /> -->
    <TwoDotRange name="area" :displayName="t('filters.area')" :max-value="doubleSliderOptions.area.maxValue"
      :default-values="[doubleSliderOptions.area.minValue + 10, doubleSliderOptions.area.maxValue - 50]" :decimal=0
      :merge="35"
      @onChange="twoChange" 
      />
    
    <TwoDotRange name="price" :displayName="t('filters.price')"
      :max-value="doubleSliderOptions.price.maxValue"
      :default-values="[doubleSliderOptions.price.minValue, doubleSliderOptions.price.maxValue - 100000]" :merge="200000"
      :prefix="doubleSliderOptions.price.prefix" :decimal=0 thousand=","
      @onChange="twoChange"
       />
    <div class="flex flex-col gap-3">
      <p class="text-xl">{{ t('filters.sold') }}</p>
      <div class="flex gap-10">
        <div class="flex gap-2">
          <input v-model="sold" 
            class="w-5 h-5 accent-black rounded-full" name="hideShow" value="1" type="radio">
          <label>{{ t('filters.show') }}</label>
        </div>
        <div class="flex gap-2">
          <input v-model="sold" class="w-5 h-5 accent-black rounded-full"
            value="0" name="hideShow" type="radio">
          <label>{{ t('filters.hide') }}</label>
        </div>
      </div>
    </div>
    <p @click="clearFilter" class="underline opacity-40 text-base cursor-pointer">{{ t('filters.clear') }}</p>
  </div>
</template>
