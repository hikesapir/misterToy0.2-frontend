<template>
    <section class="home-page">
        <img src="/src/assets/img/toys.svg" />
        <login
            v-if="!isSignup"
            @login="login"
            @signup="signup"
            @logout="logout"
            :loggedUser="user.username"
        />
        <!-- <login v-if="!isSignup" @login="login" @signup="signup" @logout="logout" /> -->
        <sign-up v-if="isSignup && !user" @signup="signup" />
    </section>
</template>
<script>
import login from "../components/login.vue"
import signUp from "../components/sign-up.vue"

export default {
    name: 'home-page',
    props: [],
    emits: [],
    components: {
        login,
        signUp
    },
    data() {
        return {
            isSignup: false
        }
    },
    mounted() {
    },
    methods: {
        signup(user) {
            if (this.isSignup) {
                this.$store.dispatch({ type: 'signup', user });
            }
            this.isSignup = !this.isSignup
        },
        login(user) {
            this.$store.dispatch({ type: 'login', user });
        },
        logout() {
            this.$store.dispatch({ type: 'logout'});
            // this.$store.commit({ type: 'logout' });
        }
    },
    computed: {
        user() {
            return this.$store.getters.getUser
        }
    },
    unmounted() {
    },
}
</script>
