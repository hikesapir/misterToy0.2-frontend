'use strict';

import { toyService } from "../../services/toy-service";

export const toyStore = {
    state: {
        toys: [],
        isLoading: false,
    },
    getters: {
        isLoading(state) {
            return state.isLoading
        },
        toys(state) {
            return JSON.parse(JSON.stringify(state.toys))
        },
    },
    mutations: {
        setIsLoading(state, { isLoading }) {
            state.isLoading = isLoading
        },
        setToys(state, { toys }) {
            state.toys = toys
        },
    },
    actions: {
        async loadToys(context) {
            context.commit({ type: 'setIsLoading', isLoading: true })
            try {
                const toys = await toyService.query()
                context.commit({ type: 'setToys', toys })
            } catch (err) {
                console.log('loadToys err', err);
            } finally {
                context.commit({ type: 'setIsLoading', isLoading: false })
            }
        },
    },
}