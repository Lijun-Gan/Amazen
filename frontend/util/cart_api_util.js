export const createCart = cart => {
    return $.ajax({
        method: "POST",
        url: "api/carts",
        data: { cart }
    })
}

// export const fetchCart = cart => {
//     return $.ajax({
//         method: "GET",
//         url: "api/carts/"
//     })
// }