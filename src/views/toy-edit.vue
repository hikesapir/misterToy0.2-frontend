<template>
    <section class="toy-edit">
        <h1>{{ title }}</h1>
    </section>
</template>
<script>
export default {
    name: 'toy-edit',
    props: [],
    emits: [],
    components: {},
    data() {
        return {}
    },
    created() {
        if (this.toyId) {
            toyService.getById(this.toyId).then(toy => this.toyToEdit = toy)
        } else {
            this.toyToEdit = toyService.getEmptyToy()
        }
    },
    mounted() {
    },
    methods: {},
    computed: {
        toyId() {
            return this.$route.params.toyId
        },
        title() {
            return this.toyId ? 'Toy Edit' : 'Toy Add'
        },

    },
    unmounted() {
    },
}
</script>
