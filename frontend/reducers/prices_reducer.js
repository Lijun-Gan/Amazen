import {RECEIVE_BOOKS} from "../actions/book_actions";


const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_BOOKS:
            // nextState[action.review.id] = action.review;
            return Object.assign({}, action.books.prices)
             
        default:
            return state;
    }
};

export default reviewsReducer;