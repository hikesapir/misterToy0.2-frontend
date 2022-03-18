<template>
    <ul class="toy-list list-layout">
        <toy-preview v-for="toy in toys" :toy="toy" :key="toy._id" @removeToy="removeToy"></toy-preview>
    </ul>
</template>

<script>
import toyPreview from "./toy-preview.vue"
export default {
    name: 'toy-list',
    props: {
        toys: Array
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
    },
    computed: {
    },
    unmounted() {
    },
}
</script>
