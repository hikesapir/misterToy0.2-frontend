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
        {{toy}}
        <slot></slot>
    </li>
</template>


<script>
export default {
    name: "toy-preview",
    props: {
        toy: Object,
    },
    emits: [],
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

    },
    computed: {

    },
    unmounted() {
    },
}
</script>
