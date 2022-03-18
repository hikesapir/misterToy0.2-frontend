<template>
    <section v-if="toyToEdit" class="toy-edit">
        <h1>{{ title }}</h1>
        <pre>{{ toyToEdit }}</pre>
        <form class="form">
            <div class="form-control">
                <label for="txt" class="form-label">Toy name:</label>
                <el-input
                    required
                    v-model="toyToEdit.name"
                    id="txt"
                    type="text"
                    class="form-input input"
                    placeholder="Enter your toy name here..."
                />
            </div>
            <div class="form-control">
                <label for="speed" class="form-label">Toy price:</label>
                <el-input
                    required
                    v-model.number="toyToEdit.price"
                    id="price"
                    type="number"
                    class="form-input input"
                />
            </div>
            <el-select class="select" multiple v-model="toyToEdit.labels" placeholder="Select">
                <el-option v-for="item in options" :key="item" :label="item" :value="item" />
            </el-select>
            <div class="btn-group">
                <br />
                <el-button @click="saveToy" class="btn btn-info">save</el-button>
            </div>
        </form>
        <el-button @click="goBack" class="btn">go back</el-button>
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
            options: ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor', 'Battery Powered'],

        }
    },
    created() {
        if (this.toyId) {
            (async () => {
                const toy = await toyService.getById(this.toyId)

                this.toyToEdit = toy
            })()
        } else {
            this.toyToEdit = toyService.getEmptyToy()
        }
    },
    mounted() {
    },
    methods: {
        saveToy() {
            console.log('frist saveToy', this.toyToEdit);
            this.$store.dispatch({ type: 'saveToy', toy: this.toyToEdit })
            this.$router.push('/toy')
        },
        goBack() {
            this.$router.push('/toy')
        },
    },
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
