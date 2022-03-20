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
        setReviews(state, { reviews }) {
            console.log(reviews);
            state.reviews = reviews;
        },
    },
    actions: {
        async addReview(context, { review }) {
            try {
                review = await reviewService.add(review)
                context.commit({ type: 'addReview', review })
                // context.dispatch({ type: 'increaseScore' })
                return review;
            } catch (err) {
                console.log('reviewStore: Error in addReview', err)
                throw err
            }
        },
        async loadReviews(context, { filterBy }) {
            console.log(filterBy);
            try {
                const reviews = await reviewService.query(filterBy);
                context.commit({ type: 'setReviews', reviews })
            } catch (err) {
                console.log('reviewStore: Error in loadReviews', err)
                throw err
            }
        },
    }

}