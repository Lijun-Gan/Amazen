import { DELETE_CART } from '../actions/cart_actions';
import { RECEIVE_CURRENT_USER, SIGNOUT_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {

    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_CURRENT_USER:

        return Object.assign({}, {[action.currentUser.id]: action.currentUser });

        case SIGNOUT_CURRENT_USER:
          return {};

      default:
          return state;
    }
};

export default usersReducer;