<template>
    <section class="sign-up">
        <h4>Sign-up</h4>
        <form>
            <el-input type="text" v-model="user.fullname" placeholder="Enter fullname" />
            <el-input type="text" v-model="user.username" placeholder="Enter username" />
            <el-input type="password" v-model="user.password" placeholder="Enter password" />
            <el-button @click="signup" type="success">Sign-up</el-button>
        </form>
    </section>
</template>
<script>
export default {
    name: 'sign-up',
    props: [],
    emits: ['signup'],
    components: {},
    data() {
        return {
            user: {
                fullname: '',
                username: '',
                password: '',
            }
        }
    },
    created() {

    },
    mounted() {
    },
    methods: {
        signup() {
            this.$emit('signup', this.user);
        }
    },
    computed: {
    },
    unmounted() {
    },
}
</script>
