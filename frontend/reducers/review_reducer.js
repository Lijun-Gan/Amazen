import { RECEIVE_REVIEW } from "../actions/review_actions";



const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
    
        case(RECEIVE_REVIEW):
            return Object.assign({}, state);
        default:
            return state;
    }
};

export default reviewsReducer;