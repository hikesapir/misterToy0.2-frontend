<template>
  <app-header />
  <router-view  class="main-layout" />
  <p v-if="isLoading">Loading...</p>

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
    isLoading() {
      return this.$store.getters.isLoading
    }
  },
  unmounted() {
  },
}
</script>