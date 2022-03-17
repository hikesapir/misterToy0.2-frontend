'use strict';

import { userService } from "../../services/user-service";

export const userStore = {
    state: {
        user: userService.getLoggedinUser(),
    },
    getters: {
        getUsername(state) {
            return JSON.parse(JSON.stringify(state.user.username))
        }
    },
    mutations: {
        setLoggedinUser(state, { user }) {
            state.user = user
        },
        logout(state){
            userService.logout()
            state.user = { username: '', password: '' }            
        }
    },
    actions: {
        async login(context, { user }) {
console.log(user);
            try {
                const loggedUser = await userService.checkLogin(user)
                context.commit({
                    type: 'setLoggedinUser',
                    user: loggedUser
                })

            } catch (err) {
                console.log('login', err);
            }
        },
    },

}