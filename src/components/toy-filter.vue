<template>
    <section class="toy-filter">
        <el-input
            class="w-50 m-2 input"
            type="text"
            placeholder="Search toy.."
            v-model="filterBy.name"
        />
        <label>
            Stock:
            <el-select class="select" v-model="filterBy.inStock">
                <el-option
                    v-for="stock in stockOptions"
                    :key="stock.label"
                    :label="stock.label"
                    :value="stock.value"
                />
            </el-select>
        </label>
        <label>
            Labels:
            <el-select class="select" v-model="filterBy.labels" multiple placeholder="Select">
                <el-option
                    v-for="label in labelOptions"
                    :key="label"
                    :label="label"
                    :value="label"
                />
            </el-select>
        </label>
        <label>
            Sort By:
            <el-select class="select" v-model="filterBy.sortBy">
                <el-option v-for="sort in sortOptions" :key="sort" :label="sort" :value="sort" />
            </el-select>
        </label>
    </section>
</template>
<script>
export default {
    name: 'toy-filter',
    props: [],
    emits: [],
    components: {},
    data() {
        return {
            filterBy: {
                name: '',
                inStock: '',
                labels: [],
                sortBy: 'Time',
            },
            stockOptions: [{ label: 'All', value: '' }, { label: 'In stock', value: true }, { label: 'Out stock', value: false }],
            labelOptions: ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor', 'Battery Powered'],
            sortOptions: ['Time', 'Name', 'Price']

        }
    },
    created() {

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
