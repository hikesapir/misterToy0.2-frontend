<template>
    <section class="toy-filter">
        <el-input
            class="w-50 m-2 input"
            type="text"
            placeholder="Search toy.."
            v-model="filterBy.name"
            @input="setFilter"
        />
        <label>
            Stock:
            <el-select  @change="setFilter" class="select" v-model="filterBy.inStock">
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
            <el-select @change="setFilter" class="select" v-model="filterBy.labels" multiple placeholder="Select">
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
            <el-select @change="setFilter" class="select" v-model="filterBy.sortBy">
                <el-option v-for="sort in sortOptions" :key="sort.label" :label="sort.label" :value="sort.value" />
            </el-select>
        </label>
    </section>
</template>
<script>
export default {
    name: 'toy-filter',
    props: [],
    emits: ['setFilter'],
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
            sortOptions: [{ label: 'Time', value: 'ceartedAt' },{ label: 'Name', value: 'name' },{ label: 'Price', value: 'price' }]

        }
    },
    created() {

    },
    mounted() {
    },
    methods: {
        setFilter() {
            this.$emit('setFilter', JSON.parse(JSON.stringify(this.filterBy)));
        },
    },
    computed: {
    },
    unmounted() {
    },
}
</script>
