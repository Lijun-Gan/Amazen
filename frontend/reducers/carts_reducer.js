  
import { RECEIVE_CART , DELETE_CART} from '../actions/cart_actions';

export default (oldState = {}, action) => {
    const nextState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_CART: {
           let uniqueId = action.cart.book_id.toString() + "_" + action.cart.format
           nextState[uniqueId] = action.cart
           return  nextState
        }

        case DELETE_CART:{
            debugger
            delete nextState[action.cartId]
            debugger
            return nextState
        }

        default: {
            return oldState;
        }
    }
}