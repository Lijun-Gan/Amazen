import * as ReviewAPIUtil from '../util/review_api_util';
import { receiveBook } from './book_actions';


export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

export const createReview = (review) => dispatch => {
    return(ReviewAPIUtil.createReview(review)
        .then((book) => {
            dispatch(receiveBook(book))
        })
    )
}

export const updateReview = (review) => dispatch => (
    ReviewAPIUtil.updateReview(review)
        .then((book) => dispatch(receiveBook(book)))
);

export const deleteReview = (review) => dispatch => (
    ReviewAPIUtil.deleteReview(review)
        .then((book) => dispatch(receiveBook(book)))
);


export const fetchReview = (reviewId) => dispatch => {
    // 
    return(
        ReviewAPIUtil.fetchReview(reviewId)
            .then((review) => {
                // 
                dispatch(receiveReview(review))})
    )
}
    