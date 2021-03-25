  
import { RECEIVE_CART } from '../actions/cart_actions';

export default (oldState = {}, action) => {
    switch (action.type) {
        case RECEIVE_CART: {
            return Object.assign({}, oldState, action.cart)
        }
        default: {
            return oldState;
        }
    }
}