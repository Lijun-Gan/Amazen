  
import { RECEIVE_CART } from '../actions/cart_actions';

export default (oldState = {}, action) => {
    const nextState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_CART: {
           nextState[action.cart.id] = action.cart
           return  nextState
        }
        default: {
            return oldState;
        }
    }
}