<template>
  <!-- Contact Map -->
  <div>
    <div id="map" class="h-full w-full rounded-xl"></div>
    <div v-if="withFilter"
         class="flex flex-col max-lg:gap-y-6 lg:justify-between p-6 lg:p-10 absolute top-4 max-lg:left-4 lg:right-4 bg-white w-80  lg:w-[464px]
         h-fit lg:h-[608px] rounded-xl">
      <h3 class="text-2xl font-medium lg:text-3xl">
        Some nice things around the building
      </h3>
      <div class="flex flex-wrap items-start gap-3 lg:gap-4">
        <div @click="selected = index" v-for="(label, index) in labels" :key="index"
             :class="{'bg-black text-white': index === selected}"
             class="flex cursor-pointer items-center rounded-lg border border-black px-6 py-3 gap-x-1.5 lg:rounded-2xl">
          <img class="w-3.5 h-3.5" :src="label.icon" :alt="label.title + ' icon'">
          <p v-text="label.title" class="font-medium lg:text-xl"/>
        </div>
      </div>
      <div class="flex max-lg:flex-col max-lg:gap-y-3 lg:items-center lg:justify-between">
        <div class="flex items-center gap-x-1">
          <img class="h-6 w-6" src="@/assets/icons/Map/near.svg" alt="near icon"/>
          <span class="text-xl font-medium opacity-40">Near: </span>
          <span class="text-xl font-medium underline">400m</span>
        </div>
        <div class="flex items-center gap-x-1">
          <img class="h-6 w-6" src="@/assets/icons/Map/accessibility.svg" alt="accessibility icon"/>
          <span class="text-xl font-medium opacity-40">Accessibility: </span>
          <span class="text-xl font-medium underline">Yes</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, watch} from "vue";
import {Loader} from "@googlemaps/js-api-loader";
import background from "@/assets/logos/Map/background.png";
import logo from "@/assets/logos/Map/logo.png";
import super_markets from "@/assets/icons/Map/super_markets.svg";
import schools from "@/assets/icons/Map/schools.svg";
import transport from "@/assets/icons/Map/transport.svg";
import kindergarten from "@/assets/icons/Map/kindergarten.svg";
import restaurants from "@/assets/icons/Map/restaurants.svg";
import park from "@/assets/icons/Map/park.svg";

const {withFilter} = defineProps({
  withFilter: {
    type: Boolean,
    default: false
  }
})

const labels = [
  {
    title: 'Super markets',
    icon: super_markets,
  },
  {
    title: 'Schools',
    icon: schools,
  },
  {
    title: 'Transport',
    icon: transport,
  },
  {
    title: 'Kindergarten',
    icon: kindergarten,
  },
  {
    title: 'Restaurants',
    icon: restaurants,
  },
  {
    title: 'Park',
    icon: park,
  }
];

const map = ref(null);
const markers = ref([]);
const selected = ref(0);

watch(selected, (value, oldValue) => {
  for (let j = 0; j < markers.value.length; j++) {
    if (labels[oldValue].title.toLowerCase() === markers.value[j].title.toLowerCase()) {
      markers.value[j].setVisible(false);
    }

    if (labels[value].title.toLowerCase() === markers.value[j].title.toLowerCase()) {
      markers.value[j].setVisible(true);
    }
  }
});

onMounted(() => {
  const loader = new Loader({
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    version: "weekly",
  });

  loader.load().then(async () => {
    const {Map} = await google.maps.importLibrary("maps");

    map.value = new Map(document.getElementById("map"), {
      center: {lat: 41.7721719, lng: 44.7795627},
      disableDefaultUI: true,
      zoom: 12,
      styles: [
        {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "saturation": 36
            },
            {
              "color": "#000000"
            },
            {
              "lightness": 40
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#000000"
            },
            {
              "lightness": 16
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 20
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 17
            },
            {
              "weight": 1.2
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 20
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 21
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 17
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 29
            },
            {
              "weight": 0.2
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 18
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 16
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 19
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 17
            }
          ]
        },
      ]
    });

    // Add a background for the logo.
    new google.maps.Marker({
      position: {lat: 41.7721719, lng: 44.7795627},
      map: map.value,
      icon: {
        url: background,
        anchor: new google.maps.Point(24, 24),
        size: new google.maps.Size(48, 48),
      },
      // labelOrigin: new google.maps.Point(-5, -4),
      // label: {
      //   text: 'Otium',
      //   fontWeight: 'medium',
      //   fontSize: '16px',
      //   color: '#fff',
      // },
    });

    // Add a logo to the map.
    new google.maps.Marker({
      position: {lat: 41.7721719, lng: 44.7795627},
      map: map.value,
      icon: {
        url: logo,
        anchor: new google.maps.Point(12, 12),
        size: new google.maps.Size(24, 24),
      },
    });

    if (withFilter) {
      // Generate random 100 markers for each category.
      const centerCoordinates = {lat: 41.7721719, lng: 44.7795627};

      labels.forEach((label, i) => {
        for (let j = 0; j < 100; j++) {
          const randomLat = centerCoordinates.lat + (Math.random() - 0.5);
          const randomLng = centerCoordinates.lng + (Math.random() - 0.5);

          const marker = new google.maps.Marker({
            position: {lat: randomLat, lng: randomLng},
            map: map.value,
            visible: false,
            title: label.title,
            icon: label.icon,
          });

          markers.value.push(marker);
        }
      });
    }
  });
});
</script>

<style>
a[href^="http://maps.google.com/maps"] {
  display: none !important
}

a[href^="https://maps.google.com/maps"] {
  display: none !important
}

.gmnoprint a, .gmnoprint span, .gm-style-cc {
  display: none;
}

.gmnoprint div {
  background: none !important;
}
</style>