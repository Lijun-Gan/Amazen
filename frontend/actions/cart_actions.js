import * as APIUtil from '../util/cart_api_util'
import {receiveCurrentUser} from '../actions/session_actions'


export const RECEIVE_CART = "RECEIVE_CART"
export const DELETE_CART = "DELETE_CART"

export const receiveCart = (cart) => {
    return {
        type: RECEIVE_CART,
        cart,
    }
}

export const removeCart = (cartId) => {
    return {
        type: DELETE_CART,
        cartId,
    }
}

export const createCart = cart => dispatch => {
    return (
        APIUtil.createCart(cart).then((user) => dispatch(receiveCart(user)))
    )
}
export const deleteCart = cartId => dispatch => {
    return (
        APIUtil.deleteCart(cartId).then((user) => dispatch(removeCart(user)))
    )
}

// export const fetchCart = cart => dispatch => {
//     return (
//         APIUtil.fetchCart(cart).then((cart) => dispatch(receiveCart(cart)))
//     )
// }