
<template>
    <gmap-map
      :center="center"
      text-md-center
      :zoom="20"
      style="width: 100%; height: 400px"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :title="m.title"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </template>
  <script>
    export default {
        name:'googleMap',
      data () {
        return {
          
          center: {lat: this.latitude, lng: this.longitude},
          markers: [{
            position: {lat: this.latitude, lng: this.longitude},
            title: this.title
          }]
        }
      },
  
      props: {
          latitude: Number,
          longitude: Number,
          title: String
      }
    }
  </script>
  