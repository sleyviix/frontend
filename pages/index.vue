<template>
  <div class="min-h-screen relative max-6/6" >
    <GMap class="absolute inset-0 h-100% bg-blue-400"
          v-if="parkingPlaces.length > 0"
      ref="gMap"
      language="en"
      :cluster="{options: {styles: clusterStyle}}"
      :center="{lat:parkingPlaces[0].coordinates.lat, lng: parkingPlaces[0].coordinates.lng}"
      :options="{fullscreenControl: false, styles: mapStyle}"
      :zoom="5">

      <GMapMarker
        v-for="location in parkingPlaces"
        :key="location.id"
        :position="{lat: location.coordinates.lat, lng: location.coordinates.lng}"
        :options="{icon: location.free_spots > 0 ? pins.spacefree : pins.spacenotfree}"
        @click="currentLocation = location"
      >
<!--        <GMapInfoWindow :options="{maxWidth: 200}">-->
<!--          <code>-->
<!--            lat: {{ location.coordinates.lat }},-->
<!--            lng: {{ location.coordinates.lng }}-->
<!--          </code>-->
<!--        </GMapInfoWindow>-->
      </GMapMarker>
      <GMapCircle :options="circleOptions"/>
    </GMap>

    <parking-place-preview :parking-place="currentLocation" @close="currentLocation=null">

    </parking-place-preview>
  </div>
</template>

<script>


import parkingPlacePreview from "@/components/parkingPlacePreview";











export default {



  components : {

    'parkingPlacePreview': parkingPlacePreview

  },


  data() {
    return {
      currentLocation: {},
      circleOptions: {},

      parkingPlaces: [],
      // parkingPlaces: [
      //   {
      //     "id": 1,
      //     "name": "Chandler Larson",
      //     "post": "37757",
      //     "coordinates": {
      //       "lng": -51.84,
      //       "lat": -60.02
      //     },
      //     "total_spots": 0,
      //     "free_spots": 0
      //   },
      //
      //   {
      //     "id": 1,
      //     "name": "Chandler Larson",
      //     "post": "37757",
      //     "coordinates": {
      //       "lng": -11.84,
      //       "lat": -50.02
      //     },
      //     "total_spots": 0,
      //     "free_spots": 0
      //   }
      // ],

      pins: {
        spacefree: "/parkingicongreen3.png",
        spacenotfree: "/parkingiconred3.png",
      },
      mapStyle: [],
      clusterStyle: [
        {
          url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
          width: 56,
          height: 56,
          textColor: "#fff"
        }
      ]
    }
  },

  async fetch() {
    const response = await fetch('http://localhost:8000/api/parkingPlace')
    const json = await response.json()
    this.parkingPlaces = json.data
    console.log(this.parkingPlaces)

  },


}










</script>
