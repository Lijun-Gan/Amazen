export const fetchCarts = () => {
    return $.ajax({
        method: "GET",
        url: "api/carts",
    })
}

export const createCart = cart => {
    return $.ajax({
        method: "POST",
        url: "api/carts",
        data: { cart }
    })
}
export const deleteCart = cartId => {
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