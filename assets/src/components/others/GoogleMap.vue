<template>
<div>
  <div class="google-map" :id="mapName" @click="updateMarkerPosition"></div>
</div>
</template>
<script>
export default {
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + "-map",
      markerCoordinates: [{
        latitude: "40.997033110617345",
        longitude: "28.890365352538993"
      }],
      map: null,
      markers: [],
      destinationLatitude: null,
      destinationLongitude: null
    }
  },
  mounted: function () {
    const element = document.getElementById(this.mapName)
    const mapCentre = this.markerCoordinates[0];
    const options = {
      zoom: 12,
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
    }
    this.map = new google.maps.Map(element, options);
    this.markerCoordinates.forEach((coord) => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({ 
        position,
        map: this.map,
        draggable: true
      });
      this.markers.push(marker)
    });
  },
  methods: {
    updateMarkerPosition() {
      this.destinationLongitude=this.markers[0].position.lng();
      this.destinationLatitude=this.markers[0].position.lat();
      this.$emit('destinationLongitude', this.destinationLongitude)
      this.$emit('destinationLatitude', this.destinationLatitude)
    }
  }
};
</script>
<style scoped>
.google-map {
  width: 600px;
  height: 400px;
  margin: 0 auto;
  background: gray;
}
</style>