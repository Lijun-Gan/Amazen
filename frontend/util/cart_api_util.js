export const fetchOrders = () => {
    return $.ajax({
        method: "GET",
        url: "api/carts",
    })
}

export const createOrder = cart => {
    return $.ajax({
        method: "POST",
        url: "api/carts",
        data: { cart }
    })
}

export const deleteOrder = cartId => {
    return $.ajax({
        method: "delete",
        url: `api/carts/${cartId}`,
    })
}


// export const fetchCart = cart => {
//     return $.ajax({
//         method: "GET",
//         url: "api/carts/"
//     })
// }