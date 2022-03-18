'use strict';

import { userService } from "../../services/user-service";

export const userStore = {
    state: {
        user: userService.getLoggedinUser(),
    },
    getters: {
        getUsername(state) {
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
                console.log('loggedUser', loggedUser);
                context.commit({ type: 'setLoggedinUser' })

            } catch (err) {
                console.log('login', err);
            }
        },
        async signup(context, { user }) {

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