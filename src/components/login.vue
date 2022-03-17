<template>
    <section class="login">
        <h4>Login</h4>
        <form >
            <el-input  type="text" v-model="user.username" placeholder="Enter username" />
            <el-input  type="password" v-model="user.password" placeholder="Enter password" />
            <el-button @click="login" type="primary">Login</el-button>
        </form>
            <el-button @click="signup" type="success">Sign-up</el-button>
    </section>
</template>
<script>
export default {
    name: 'login',
    props: [],
    emits: [],
    components: {},
    data() {
        return {
            user: {
                username: '',
                password: '',
            }
        }
    },
    mounted() {
    },
    methods: {
        login() {
            console.log('login');
        },
        signup(){
            this.$emit('signup')
        }
    },
    computed: {
    },
    unmounted() {
    },
}
</script>
