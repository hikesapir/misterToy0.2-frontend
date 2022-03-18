<template>
  <app-header />
  <router-view class="main-layout" />
  <app-footer />
</template>

<script>
import appHeader from "./components/app-header.vue"
import appFooter from "./components/app-footer.vue"

export default {
  name: 'App',
  props: [],
  emits: [],
  components: {
    appHeader,
    appFooter
  },
  data() {
    return {}
  },
  created() {
    this.$store.dispatch({ type: 'loadToys' })
  },
  mounted() {
  },
  methods: {},
  computed: {
  },
  unmounted() {
  },
}
</script>