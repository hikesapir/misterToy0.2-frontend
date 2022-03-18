<template>
    <section class="toy-app">
        <toy-filter />
        <el-button class="btn" @click="goAdd()" type="primary" round>Add new toy</el-button>
        <p v-if="isLoading">Loading...</p>
        <toy-list :toys="toys" />
    </section>
</template>
<script>
import toyFilter from "../components/toy-filter.vue"
import toyList from "../components/toy-list.vue"

export default {
    name: 'toy-app',
    props: [],
    emits: [],
    components: {
        toyFilter,
        toyList
    },
    data() {
        return {}
    },
    created() {

    },
    mounted() {
    },
    methods: {
        goAdd() {
            this.$router.push('/toy/edit')
        },
    },
    computed: {
        toys() {
            return this.$store.getters.toys
        },
        isLoading() {
            return this.$store.getters.isLoading
        }
    },
    unmounted() {
    },
}
</script>
