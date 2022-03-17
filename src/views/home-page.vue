<template>
    <section class="home-page">
      
        <img src="/src/assets/img/toys.svg" />
        <login v-if="!isSignup" @signup="signup" />
        <sign-up v-if="isSignup" @signup="signup"/>
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
        signup() {
            this.isSignup = !this.isSignup
        }
    },
    computed: {
    },
    unmounted() {
    },
}
</script>
