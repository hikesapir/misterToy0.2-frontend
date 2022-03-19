'use strict';

import { userService } from "../../services/user-service";

export const userStore = {
    state: {
        user: userService.getLoggedinUser(),
    },
    getters: {
        getUser(state) {
            return JSON.parse(JSON.stringify(state.user))
        }
    },
    mutations: {
        setLoggedinUser(state) {
            state.user = userService.getLoggedinUser()
        },
        logout(state) {
            userService.logout()
            state.user = { username: '', password: '' }
        }
    },
    actions: {
        async login(context, { user }) {
            try {
                const loggedUser = await userService.login(user)
                context.commit({ type: 'setLoggedinUser' })

            } catch (err) {
                console.log('login', err);
            }
        },
        async signup(context, { user }) {
            try {
                const loggedUser = await userService.signup(user)
                context.commit({ type: 'setLoggedinUser' })

            } catch (err) {
                console.log('signup', err);
            }
        },
        async logout(context) {
            try {
                const res = await userService.logout()
                console.log('logout', res);
                context.commit({ type: 'setLoggedinUser' })

            } catch (err) {
                console.log('logout', err);
            }
        },
    },

}