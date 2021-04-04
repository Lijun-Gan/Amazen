  
import {DELETE_WISHLIST, RECEIVE_WISHLISTS, RECEIVE_WISHLIST} from '../actions/wishlist_actions'

export default (state = {}, action) => {
    const nextState = Object.assign({}, state)
    switch (action.type) {

        case  RECEIVE_WISHLISTS: {
            return Object.assign({}, state,action.wishlists)
        }

        case RECEIVE_WISHLIST:{
            nextState[action.wishlist.id] = action.wishlist

            return nextState;
        }

        case DELETE_WISHLIST:{ 
            delete nextState[action.wishlistId];
            return nextState;
        }

        default: {
            return state;
        }
    }
}