'use strict';

import { toyService } from "../../services/toy-service";

export const toyStore = {
    state: {
        toys: [],
        filterBy: {
            name: '',
            inStock: '',
            labels: [],
            sortBy: 'Time',
        },
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
        saveToy(state, { getToy }) {
            const toy = getToy
            const idx = state.toys.findIndex((currToy) => currToy._id === toy._id)
            if (idx !== -1) state.toys.splice(idx, 1, toy)
            else state.toys.unshift(toy)
        },
        removeToy(state, { id }) {
            const idx = state.toys.findIndex((toy) => toy._id === id)
            state.toys.splice(idx, 1)
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy;
        },
    },
    actions: {
        async loadToys(context) {
            context.commit({ type: 'setIsLoading', isLoading: true })
            try {
                const toys = await toyService.query(context.state.filterBy)
                context.commit({ type: 'setToys', toys })
            } catch (err) {
                console.log('loadToys err', err);
            } finally {
                context.commit({ type: 'setIsLoading', isLoading: false })
            }
        },
        async saveToy({ commit }, { toy }) {
            commit({ type: 'setIsLoading', isLoading: true })
            try {
                const getToy = await toyService.save(toy)
                commit({ type: 'saveToy', getToy })
            } catch (err) {
                console.log('saveToy err', err);
            } finally {
                commit({ type: 'setIsLoading', isLoading: false })
            }
        },
        async removeToy({ commit }, { id }) {
            try {
                const toy = await toyService.remove(id)
                commit({ type: 'removeToy', id })

            } catch (err) {
                console.log('removeToy err', err);
            }
        },
        filter({ commit, dispatch }, { filterBy }) {
            commit({ type: 'setFilter', filterBy });
            dispatch({ type: 'loadToys' });
        },
    },
}