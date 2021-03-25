import * as APIUtil from '../util/cart_api_util'

export const RECEIVE_CART = "RECEIVE_CART"

const receiveCart = (cart) => {
    return {
        type: RECEIVE_CART,
        cart,
    }
}
export const createCart = cart => dispatch => {
    return (
        APIUtil.createCart(cart).then((cart) => dispatch(receiveCart(cart)))
    )
}
