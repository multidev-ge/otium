<script setup>
defineProps({
  fill: {
    type: String,
    default: "black"
  },
  opacity: {
    type: String,
    default: '0.4'
  }
})
</script>

<template>
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24.000000 24.000000"
    preserveAspectRatio="xMidYMid meet">
    <g :opacity="opacity" transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#000000"
      stroke="none">
      <path :fill="fill" d="M62 223 c-57 -20 -73 -52 -49 -95 9 -16 17 -45 17 -63 0 -62 4 -65
90 -65 86 0 90 3 90 65 0 18 8 47 17 63 26 45 8 75 -56 96 -57 18 -52 18 -109
-1z m92 -9 c9 -8 16 -21 17 -27 0 -7 4 -4 7 6 7 16 9 16 30 2 25 -18 29 -47 8
-65 -8 -6 -16 -26 -18 -43 l-3 -32 -75 0 -75 0 -3 32 c-2 17 -10 37 -18 43
-21 18 -17 47 8 65 21 14 23 14 30 -2 3 -10 7 -13 7 -6 1 18 30 43 51 43 10 0
26 -7 34 -16z m44 -186 c-3 -9 -28 -13 -78 -13 -50 0 -75 4 -77 13 -4 9 16 12
77 12 61 0 81 -3 78 -12z" />
      <path :fill="fill" d="M60 111 c0 -6 4 -13 10 -16 6 -3 7 1 4 9 -7 18 -14 21 -14 7z" />
      <path :fill="fill" d="M110 110 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
      <path :fill="fill" d="M166 103 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z" />
    </g>
  </svg>
</template>