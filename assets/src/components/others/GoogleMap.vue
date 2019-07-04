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
        latitude: 29.006429565755298,
        longitude: 41.005430462874486
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
      center: new google.maps.LatLng(mapCentre.longitude, mapCentre.latitude)
    }
    this.map = new google.maps.Map(element, options);
    this.markerCoordinates.forEach((coord) => {
      const position = new google.maps.LatLng(coord.longitude, coord.latitude);
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
      var t=this;
      t.destinationLongitude=t.markers[0].position.lng();
      t.destinationLatitude=t.markers[0].position.lat();
      this.$emit('destinationLongitude', t.destinationLongitude)
      this.$emit('destinationLatitude', t.destinationLatitude)
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