'use strict';
import { reviewService } from '../../services/review.service.js'


export const reviewStore = {

    state: {
        reviews: []
    },
    getters: {
        reviews(state) {
            return JSON.parse(JSON.stringify(state.reviews))
        },
    },
    mutations: {
        addReview(state, { review }) {
            state.reviews.push(review)
        },
    },
    actions: {
        async addReview(context, { review }) {
            try {
                review = await reviewService.add(review)
                console.log(review);
                // context.commit({ type: 'addReview', review })
                // context.dispatch({ type: 'increaseScore' })

                return review;
            } catch (err) {
                console.log('reviewStore: Error in addReview', err)
                throw err
            }
        },
    }

}