import { RECEIVE_REVIEW } from "../actions/review_actions";



const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type){
    
        case(RECEIVE_REVIEW):
            nextState[action.review.id] = action.review;
            //debugger
            return nextState;
        default:
            return state;
    }
};

export default reviewsReducer;