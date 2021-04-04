import { RECEIVE_PROFILE } from "../actions/profile_actions";


// const defaultState = {
//     id: null
// };

const profileReducer = (state = {}, action) => {
    switch(action.type){
        case(RECEIVE_PROFILE):
            return action.user;
        default:
            return state;
    }
}

export default profileReducer;