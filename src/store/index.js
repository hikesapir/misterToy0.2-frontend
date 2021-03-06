'use strict';

import { createStore } from 'vuex'
import { userStore } from './modules/user-module.js';
import { toyStore } from './modules/toy-module.js';
import { reviewStore } from './modules/review.module.js';

// create a store instance
const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    userStore,
    toyStore,
    reviewStore
  },
})

export default store
