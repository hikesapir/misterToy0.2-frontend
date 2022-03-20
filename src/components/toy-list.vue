<template>
    <ul class="toy-list list-layout">
        <toy-preview v-for="toy in toys" :toy="toy" :key="toy._id">
            <div  class="btn-container">
                <el-button v-if="isAdmin" @click="goToEdit(toy._id)" type="primary">edit</el-button>
                <el-button @click="goToDetail(toy._id)" type="primary">details</el-button>
                <el-button v-if="isAdmin" @click="removeToy(toy._id)" type="danger">delete</el-button>
            </div>
        </toy-preview>
    </ul>
</template>

<script>
import toyPreview from "./toy-preview.vue"
export default {
    name: 'toy-list',
    props: {
        toys: Array,
        isAdmin: Boolean
    },
    emits: ['removeToy'],
    components: {
        toyPreview,
    },
    data() {
        return {}
    },
    created() {

    },
    mounted() {
    },
    methods: {
        removeToy(toyId) {
            this.$emit("removeToy", toyId);
        },
        goToEdit(id) {
            this.$router.push(`/toy/edit/${id}`);
        },
        removeToy(id) {
            this.$emit("removeToy", id);
        },
        goToDetail(id) {
            this.$router.push(`/toy/${id}`);
        },
    },
    computed: {
    },
    unmounted() {
    },
}
</script>
