<template>
    <ul class="toy-list list-layout">
        <toy-preview v-for="toy in toys" :toy="toy" :key="toy._id">
            <div v-if="isAdmin" class="btn-container">
                <el-button @click="goToEdit" type="primary">edit</el-button>
                <el-button @click="goToDetail" type="primary">details</el-button>
                <el-button @click="removeToy" type="danger">delete</el-button>
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
        goToEdit() {
            this.$router.push(`/toy/edit/${this.toy._id}`);
        },
        removeToy() {
            this.$emit("removeToy", this.toy._id);
        },
        goToDetail() {
            this.$router.push(`/toy/${this.toy._id}`);
        },
    },
    computed: {
    },
    unmounted() {
    },
}
</script>
