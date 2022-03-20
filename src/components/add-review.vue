<template>
    <section class="add-review">
        <h4>add-review</h4>
        <form>
            <el-input
                v-model="review.txt"
                :autosize="{ minRows: 2, maxRows: 4 }"
                type="textarea"
                placeholder="Enter review"
                resize="none"
            />
            <el-button type="primary" @click="addReview">add</el-button>
        </form>
        <pre>{{ review }}</pre>
    </section>
</template>
<script>
export default {
    name: 'add-review',
    props: {
        toyId: String
    },
    emits: ['addReview'],
    components: {},
    data() {
        return {
            review: {
                txt: '',
                aboutToyId: null
            }
        }
    },
    created() {
        this.review.aboutToyId = this.toyId
    },
    mounted() {
    },
    methods: {
        addReview() {
            this.$emit('addReview', this.review)
        }
    },
    computed: {

    },
    unmounted() {
    },
}
</script>
