  
import { RECEIVE_ORDERS , RECEIVE_CART , DELETE_CART} from '../actions/cart_actions';

export default (state = {}, action) => {
    const nextState = Object.assign({}, state)
    switch (action.type) {

        case RECEIVE_CART: {
           let uniqueId = action.cart.book_id.toString() + "_" + action.cart.format
           nextState[uniqueId] = action.cart
           return  nextState
        }

        case DELETE_CART:{
            delete nextState[action.cartId]
            return nextState
        }


        default: {
            return state;
        }
    }
}