import * as ReviewAPIUtil from '../util/review_api_util';
import { receiveBook } from './book_actions';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
});

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

export const createReview = (review) => dispatch => {


    ReviewAPIUtil.createReview(review)
        .then((book) => {
  
            dispatch(receiveBook(book))

        })
}


export const updateReview = (review) => dispatch => (
    ReviewAPIUtil.updateReview(review)
        .then((book) => dispatch(receiveBook(book)))
);

export const deleteReview = (review) => dispatch => (
    ReviewAPIUtil.deleteReview(review)
        .then((book) => dispatch(receiveBook(book)))
);
