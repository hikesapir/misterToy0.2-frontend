<template>
    <section class="toy-edit">
        <h1>{{ title }}</h1>
        <pre>
    {{ toyToEdit }}
</pre>
    </section>
</template>

<script>
import { toyService } from "../services/toy-service"
export default {
    name: 'toy-edit',
    props: [],
    emits: [],
    components: {},
    data() {
        return {
            toyToEdit: null,
        }
    },
    created() {
        if (this.toyId) {
            (async () => {
                const toy = await toyService.getById(this.toyId)
                this.toyToEdit = toy
            })()
            // toyService.getById(this.toyId).then(toy => this.toyToEdit = toy)
        } else {
            this.toyToEdit = toyService.getEmptyToy()
        }
    },
    mounted() {
    },
    methods: {},
    computed: {
        toyId() {
            return this.$route.params.id
        },
        title() {
            return this.toyId ? 'Toy Edit' : 'Toy Add'
        },

    },
    unmounted() {
    },
}
</script>
