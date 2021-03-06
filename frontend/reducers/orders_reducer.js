import { RECEIVE_ORDERS,  RECEIVE_ORDER, REMOVE_ORDER, CLEAR_ORDER_STATE} from '../actions/cart_actions';

export default (state = {}, action) => {
    const nextState = Object.assign({}, state)
    switch (action.type) {
        case  RECEIVE_ORDERS: 
            return Object.assign({}, state, action.orders)
        
        case  RECEIVE_ORDER: 
            
            nextState[action.order.id] = action.order;
            return nextState
        
        case REMOVE_ORDER:
            delete nextState[action.order.id]
            return nextState

        case CLEAR_ORDER_STATE:

            return {}

        default: 
            return state;
        
    }
}