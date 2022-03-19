<template>
    <section v-if="toy" class="toy-details">
        <div>
            <h1>name: {{ toy.name }}</h1>
            <p>id: {{ toy._id }}</p>
            <p>price: {{ toy.price }}</p>
            <p>type: {{ toy.type }}</p>
            <p>createdAt: {{ toy.createdAt }}</p>
            <p>inStock: {{ toy.inStock }}</p>
            <hr />
            <b>review:</b>
            <p v-for="review in toy.reviews">{{ review }}</p>
            <el-button type="primary" round>Add new review</el-button>
        </div>
    </section>
</template>

<script>
import { toyService } from "../services/toy-service"

export default {
    name: 'toy-details',
    props: [],
    emits: [],
    components: {},
    data() {
        return {
            toy: null,

        }
    },
    created() {
        const { id } = this.$route.params

        toyService.getById(id).then((toy) => {
            this.toy = toy
        })
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
