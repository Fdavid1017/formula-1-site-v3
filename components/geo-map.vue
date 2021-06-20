<template>
  <div id="map-container">
    <l-map id="map" ref="map" style="height: 350px" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" />
      <l-geo-json :geojson="geoJson" />
    </l-map>
  </div>
</template>

<script>
import L from 'Leaflet'

export default {
  name: 'GeoMap',
  props: {
    geoJsonName: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 13,
      geoJson: null,
      center: [54.605463, 24.46997]
    }
  },
  async fetch () {
    const geo = await fetch(`http://localhost:5000/api/circuitGeojson/${this.geoJsonName}`).then(res => res.json())

    this.geoJson = geo

    const center = [geo.features[0].geometry.coordinates[0][0], geo.features[0].geometry.coordinates[0][1]]
    const t = L.latLng(center[1], center[0])
    this.center = t
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
#map-container {
  -webkit-box-shadow: 5px -5px 0px 0px $F1-red,
  -2px 2px 15px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 5px -5px 0px 0px $F1-red,
  -2px 2px 15px 0px rgba(0, 0, 0, 0.5);

  -webkit-border-radius: 0px 15px 0px 0px;
  -moz-border-radius: 0px 15px 0px 0px;
  border-radius: 0px 15px 0px 0px;

  #map {
    -webkit-border-radius: 0px 15px 0px 0px;
    -moz-border-radius: 0px 15px 0px 0px;
    border-radius: 0px 15px 0px 0px;
  }

  width: 100%;
  height: 100%;
}
</style>
