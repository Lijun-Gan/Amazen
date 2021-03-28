import * as APIUtil from '../util/cart_api_util'

export const RECEIVE_CART = "RECEIVE_CART"
export const DELETE_CART = "DELETE_CART"

export const receiveCart = (cart) => {
    return {
        type: RECEIVE_CART,
        cart,
    }
}

export const deleteCart = (cartId) => {
    return {
        type: DELETE_CART,
    
        cartId,
    }
}
export const createCart = cart => dispatch => {
    return (
        APIUtil.createCart(cart).then((cart) => dispatch(receiveCart(cart)))
    )
}

// export const fetchCart = cart => dispatch => {
//     return (
//         APIUtil.fetchCart(cart).then((cart) => dispatch(receiveCart(cart)))
//     )
// }