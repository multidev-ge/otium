import axios from "axios"
import { computed } from "vue"
import { useStore } from "vuex"

export default function useGoogleMaps() {

    const store = useStore()

    const google_maps_api_key = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY || 'shit'

    const title = computed(() => store.getters['maps/title'])
    const categories = computed(() => store.getters['maps/categories'])

    const getMap = async () => {
        await store.dispatch('maps/getMap')

        // console.log(categories.value)
    }

    const mapOptions = {
        center: { lat: 41.7721719, lng: 44.7795627 },
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
    }

    let keywords = [
        "Supermarkets",
        "Schools",
        "Transport",
        "Kindergarten",
        "Restaurants",
        "Park",
    ]

    // axios.post('https://places.googleapis.com/v1/places:searchNearby',
    //     {
    //         "includedTypes": keywords,
    //         "maxResultCount": 10,
    //         "locationRestriction": {
    //             "circle": {
    //                 "center": {
    //                     "latitude": 37.7937,
    //                     "longitude": -122.3965
    //                 },
    //                 "radius": 500.0
    //             }
    //         }
    //     }, {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'X-Goog-Api-Key': google_maps_api_key,
    //         'X-Goog-FieldMask': '*',
    //     }
    // }).then((result) => {
    //     console.log('places result:', result)
    // })

    return {
        title,
        categories,
        getMap,
        google_maps_api_key,
        mapOptions
    }
}