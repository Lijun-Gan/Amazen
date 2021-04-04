import {RECEIVE_BOOK} from "../actions/book_actions";


const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_BOOK:
            // nextState[action.review.id] = action.review;
            return Object.assign({}, action.oneBook.prices)
             
        default:
            return state;
    }
};

export default reviewsReducer;