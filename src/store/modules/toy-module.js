'use strict';

import { toyService } from "../../services/toy-service";

export default {
    state: {
        toys: [],
    },
    getters: {
        isLoading(state) {
            return JSON.parse(JSON.stringify(state.isLoadin))
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
                const toys = toyService.query()
                context.commit({ type: 'setToys', toys })
            } catch (err) {
                console.log('loadToys err', err);
            } finally {
                context.commit({ type: 'setIsLoading', isLoading: false })
            }
        },
    },
}