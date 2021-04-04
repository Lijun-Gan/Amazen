import * as APIUtil from '../util/cart_api_util'


export const RECEIVE_CARTS = "RECEIVE_CARTS"
export const RECEIVE_CART = "RECEIVE_CART"
export const DELETE_CART = "DELETE_CART"

export const receiveCarts = (carsts) => {
    return {
        type: RECEIVE_CARTS,
        carts,
    }
}

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