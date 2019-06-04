<template>
  <div style="height:100%;width:100%;text-align:left;">
    <div ref="basicMapbox" :style="mapSize"></div>
  </div>
</template>
<script>
import mapboxgl from 'mapbox-gl'
export default {
  props: {
    mapWidth: {
      type: String
    },
    mapHeight: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    // 初始化
    init () {
      mapboxgl.accessToken = 'pk.eyJ1IjoibWFnaWNmaXNoMTk4MSIsImEiOiJjandnNDd6dDkxejRiNDVrZGNnODEzenVtIn0.45NBB4c2whV8H2R8WUe9cA'
      var map = new mapboxgl.Map({
        container: this.$refs.basicMapbox,
        style: 'mapbox://styles/mapbox/navigation-guidance-night-v2',
        center: [114.17221790000008, 22.2769058],
        zoom:1
      })
      
      var nav = new mapboxgl.NavigationControl();
      map.addControl(nav,'top-left');
      var geolocate = new mapboxgl.GeolocateControl({
            positionOptions:{
                  enableHighAccuracy: true
            },
            trackUserLocation: true
      });
      map.addControl(geolocate);
      var scale = new mapboxgl.ScaleControl({
            maxWidth: 80,
            unit: 'metric'
      });
      map.addControl(scale);
      var fullScreen = new mapboxgl.FullscreenControl();
      map.addControl(fullScreen);
      
      var popup = new mapboxgl.Popup({
            offset:{
                  'bottom':[0,-42]
            }
      }).setHTML("<h1>HONGKONG</h1>")
      var popup1 = new mapboxgl.Popup({
            offset:{
                  'bottom':[0,-42]
            }
      }).setHTML("<h1>TOKYO</h1>")
      new mapboxgl.Marker({offset:{x:0,y:-20.5}})
      .setLngLat([114.17221790000008, 22.2769058])
      .addTo(map)
      .setPopup(popup);
      new mapboxgl.Marker({offset:{x:0,y:-20.5}})
      .setLngLat([139.69494469999995, 35.671736])
      .addTo(map)
      .setPopup(popup1);
    }
    
  },
  computed: {
    mapSize () {
      let styleObj = {
        width: this.mapWidth,
        height: this.mapHeight
      }
      return styleObj
    }
  }
}
</script>
<style>
@import url('https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css');
</style>