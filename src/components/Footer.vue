<script setup>
import FooterDesktop from './FooterRespo/FooterDesktop.vue';
import FooterMobile from './FooterRespo/FooterMobile.vue';
</script>
<template>
 <div> 
  <FooterDesktop class="md:block hidden" />
  <FooterMobile class="md:hidden block" />
 </div>
</template>