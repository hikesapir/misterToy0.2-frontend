<template>
  <section class="about">
    <div class="text-container">
      <h1>about</h1>
      <p>Gary Grant found employment in the 1970s at a local bike shop in Amersham, his hometown. His natural talent for buying and selling flourished when he recognised a new craze for customised skateboards, so he started selling skateboard accessories while he was still working at the bike shop. The owner of the bike shop was suitably unimpressed that the majority of calls into the store were for Gary and so Gary was let go, set free to start up on his own.</p>
    </div>
    <GMapMap :center="center" :zoom="12" map-type-id="terrain" style="width: 500px; height: 300px">
      <GMapCluster>
        <GMapMarker
          v-for="(m, index) in markers"
          :key="index"
          :position="m.position"
          :clickable="true"
          :draggable="false"
          @click="center = m.position"
        />
      </GMapCluster>
    </GMapMap>
    <div class="btn-container">
      <el-button
        v-for="loc in locs"
        :key="loc.name"
        type="success"
        size="large"
        @click="loc.func(loc.pos)"
      >{{ loc.name }}</el-button>
    </div>
  </section>
</template>
<script>
export default {
  name: 'about',
  props: [],
  emits: [],
  components: {},
  data() {
    return {
      center: { lat: 32.088179, lng: 34.790144 },
      locs: [{ name: 'Tel Aviv', func: this.updateLoc, pos: { lat: 32.088179, lng: 34.790144 } },
      { name: 'Ramat Gan', func: this.updateLoc, pos: { lat: 32.066278, lng: 34.830301 } },
      { name: 'Petach Tikva', func: this.updateLoc, pos: { lat: 32.093869, lng: 34.882401 } }],
      markers: [
        {
          position: {
            lat: 32.088179,
            lng: 34.790144,
          },
        }, // Along list of clusters
        {
          position: {
            lat: 32.066278,
            lng: 34.830301,
          },
        }, // Along list of clusters
        {
          position: {
            lat: 32.093869,
            lng: 34.882401,
          },
        }, // Along list of clusters
      ],
    }
  },
  created() {

  },
  mounted() {
  },
  methods: {
    updateLoc({ lat, lng }) {
      console.log(lat, lng);
      this.center = { lat: lat, lng: lng }
    },
  },
  computed: {
  },
  unmounted() {
  },
}
</script>
