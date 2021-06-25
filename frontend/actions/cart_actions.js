import * as APIUtil from '../util/cart_api_util'


export const RECEIVE_ORDERS = "RECEIVE_ORDERS";
export const RECEIVE_ORDER = "RECEIVE_ORDER";
export const REMOVE_ORDER = "REMOVE_ORDER";
export const CLEAR_ORDER_STATE = "CLEAR_ORDER_STATE";
export const RECEIVE_CARTS = "RECEIVE_CARTS";
export const RECEIVE_CART = "RECEIVE_CART";
export const DELETE_CART = "DELETE_CART";

export const receiveOrders = (orders) => {
    return {
        type: RECEIVE_ORDERS,
        orders,
    }
}


export const receiveOrder = (order) => {
    return {
        type: RECEIVE_ORDER,
        order,
    }
}

export const removeOrder = (order) => {
    return {
        type: REMOVE_ORDER,
        order,
    }
}

export const clearOrderState = () => {
    return {
        type: CLEAR_ORDER_STATE,
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

export const createOrder = cart => dispatch => {
    return (
        // APIUtil.createOrder(cart).then((user) => dispatch(receiveCart(user)))
        APIUtil.createOrder(cart).then(
            (order)=> {
                
                dispatch(receiveOrder(order))
            }
        )
    )
}

export const deleteOrder = orderId => dispatch => {
    return (
        APIUtil.deleteOrder(orderId).then((order) => dispatch(removeOrder(order)))
    )
}

export const fetchOrders = () => dispatch => {
    return (
        APIUtil.fetchOrders().then((carts) => dispatch(receiveOrders(carts)))
    )
}

// export const fetchCart = cart => dispatch => {
//     return (
//         APIUtil.fetchCart(cart).then((cart) => dispatch(receiveCart(cart)))
//     )
// }