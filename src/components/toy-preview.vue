<template>
    <li class="toy-preview">
        <b>
            <span>Name:</span>
            {{ toy.name }}
        </b>
        <p>
            <span>Price:</span>
            {{ toy.price }}
        </p>
        <p>
            <span>inStock:</span>
            {{ toy.inStock }}
        </p>
        <div class="btn-container">
            <el-button @click="goToEdit" type="primary">edit</el-button>
            <el-button type="primary">details</el-button>
            <el-button @click="removeToy" type="danger">delete</el-button>
        </div>
    </li>
</template>


<script>
export default {
    name: "toy-preview",
    props: {
        toy: Object,
    },
    emits: ['removeToy'],
    components: {

    },
    data() {
        return {}
    },
    created() {

    },
    mounted() {
    },
    methods: {
        goToEdit() {
            this.$router.push(`/toy/edit/${this.toy._id}`);
        },
        removeToy() {
            this.$emit("removeToy", this.toy._id);
        },
    },
    computed: {
    },
    unmounted() {
    },
}
</script>
