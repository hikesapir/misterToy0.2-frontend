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
            <p v-for="review in reviews">
            <b>Author: {{ review.byUser.fullname }}</b>
            <br>
            {{ review.txt }}
            <hr></p>
            <el-button type="primary" @click="openModal" round>Add review</el-button>
        </div>
        <!-- <pre>{{ reviews }}</pre> -->
        <chat-room :toyId="toy._id" :username="username"/>
        <add-review v-if="isopen" @addReview="addReview" :toyId="toy._id"/>
    </section>
</template>

<script>
import { toyService } from "../services/toy-service"
import addReview from "../components/add-review.vue"
import chatRoom from "../components/chat-room.vue"

export default {
    name: 'toy-details',
    props: [],
    emits: [],
    components: {
        addReview,
        chatRoom
    },
    data() {
        return {
            toy: null,
            isopen: false,
        }
    },
    created() {
        const { id } = this.$route.params

        toyService.getById(id).then((toy) => {
            this.toy = toy
            const test = { aboutToyId: this.toy._id }
            this.$store.dispatch({ type: 'loadReviews', filterBy: test })
        })
    },
    mounted() {
    },
    methods: {
        addReview(review) {
            console.log(review);
            this.$store.dispatch({ type: 'addReview', review });
            this.isopen = false
        },
        openModal() {
            this.isopen = true
        }
    },
    computed: {
        reviews() {
            return this.$store.getters.reviews
        },
        username() {
            // if(!this.$store.getters.getUser) return 'a'
            return this.$store.getters.getUser.username
        }
    },
    unmounted() {
    },
}
</script>
