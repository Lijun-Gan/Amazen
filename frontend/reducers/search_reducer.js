import {RECEIVE_SEARCH} from "../actions/book_actions"

const searchReducer = (state = '', action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SEARCH:
            return action.search
        default:
            return state;
    }
}

export default searchReducer