  
import {DELETE_WISHLIST, RECEIVE_WISHLISTS, RECEIVE_WISHLIST, CLEAR_WISHLIST_STATE } from '../actions/wishlist_actions'

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
            delete nextState[action.wishlist.id];
            return nextState;
        }
        case CLEAR_WISHLIST_STATE :{ 
       
            return {};
        }

        default: {
            return state;
        }
    }
}