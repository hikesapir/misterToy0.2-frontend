<template>
  <header class="app-header">
    <h1>Mister Toy</h1>
    <nav>
      <router-link to="/" class="link">Home</router-link> |
      <router-link to="/about" class="link">about</router-link> |
      <router-link to="/toy" class="link">Toys</router-link> |
      <router-link to="/toy/dashboard" class="link">Dashboard</router-link>
    </nav>
  </header>
</template>


<script>
export default {
    name: 'app-header',
    props: [],
    emits: [],
    components: {},
    data() {
        return {}
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
