<template>
    <section class="dashboard">
        <div>
            <BarChart :chartData="testData" />
        </div>
    </section>
</template>
<script>
import { defineComponent } from 'vue';
import { BarChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
    name: 'dashboard',
    props: [],
    emits: [],
    components: {
        BarChart,
    },
    data() {
        return {
            labels: ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor', 'Battery Powered'],
        }
    },
    created() {

    },
    mounted() {
    },
    methods: {},
    computed: {
        toyCountByType() {
            const labelMap = {}
            this.toys.forEach(toy => {
                toy.labels.forEach(label => {
                    if (!labelMap[label]) {
                        labelMap[label] = 0
                    }
                    labelMap[label]++
                })
            })
            return [... this.labels.map(label => {
                return (labelMap[label]) ? labelMap[label] : 0
            })]

        },
        toys() {
            return this.$store.getters.toys
        },
        testData() {
            return {
                labels: this.labels,
                datasets: [
                    {
                        data: this.toyCountByType,
                        backgroundColor: ['#123E6B'],
                        // backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED', '#97B0C4', '#A5C8ED'],
                    },
                ],
            }
        }
    },
    unmounted() {
    },
}
</script>
