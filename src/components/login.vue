<template>
    <section v-if="!loggedUser" class="login">
        <h4>Login</h4>
        <form>
            <el-input type="text" v-model="user.username" placeholder="Enter username" />
            <el-input type="password" v-model="user.password" placeholder="Enter password" />
            <el-button @click="login" type="primary">Login</el-button>
        </form>
        <el-button @click="signup" type="success">Sign-up</el-button>
    </section>
    <section v-if="loggedUser" class="login">
        <h1>hello {{ loggedUser }}</h1>
        <el-button @click="logout" type="danger">Logout</el-button>
    </section>
</template>
<script>
export default {
    name: 'login',
    props: { loggedUser: String },
    emits: ['signup', 'login', 'logout'],
    components: {},
    data() {
        return {
            user: {
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
        login() {
            this.$emit('login', this.user)
        },
        signup() {
            this.$emit('signup')
        },
        logout() {
            this.$emit('logout')
        }
    },
    computed: {

    },
    unmounted() {
    },
}
</script>
