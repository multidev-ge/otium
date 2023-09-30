<template>
  <!-- Contact Map -->
  <div id="map" class="rounded-xl relative">
    <slot/>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import {Loader} from "@googlemaps/js-api-loader";
import background from "@/assets/logos/Map/background.png";
import logo from "@/assets/logos/Map/logo.png";

const map = ref(null);

onMounted(() => {
  const loader = new Loader({
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    version: "weekly",
    // ...additionalOptions,
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

    new google.maps.Marker({
      position: {lat: 41.7721719, lng: 44.7795627},
      map: map.value,
      icon: {
        url: background,
        anchor: new google.maps.Point(24, 24),
        size: new google.maps.Size(48, 48),
      },
    });

    new google.maps.Marker({
      position: {lat: 41.7721719, lng: 44.7795627},
      map: map.value,
      icon: {
        url: logo,
        anchor: new google.maps.Point(12, 12),
        size: new google.maps.Size(24, 24),
      },
    });
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