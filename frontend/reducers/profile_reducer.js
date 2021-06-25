import { RECEIVE_PROFILE } from "../actions/profile_actions";
import { DELETE_PROFILE_REVIEW} from "../actions/review_actions"

// const defaultState = {
//     id: null
// };

const profileReducer = (state = {}, action) => {

    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_PROFILE:
            return action.user;

        case DELETE_PROFILE_REVIEW:

            
            delete nextState.reviewedBookIds[action.review.book_id]
            delete nextState.reviewIds[action.review.id]

            return nextState;

        default:
            return state;
        
    }
}

export default profileReducer;