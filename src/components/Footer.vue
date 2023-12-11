<script setup>
import axios from '../interceptors/axios'
import { ref, onMounted } from 'vue';
import FooterDesktop from './FooterRespo/FooterDesktop.vue';
import FooterMobile from './FooterRespo/FooterMobile.vue';


const info = ref({})

async function getInfo(){
    const { data: { data } } = await axios.get('pages/1')
    info.value = data?.blocks[0].data
}

onMounted(() => {
    getInfo()
})

</script>
<template>
 <div> 
  <FooterDesktop :content="info" class="md:block hidden" />
  <FooterMobile :content="info" class="md:hidden block" />
 </div>
</template>