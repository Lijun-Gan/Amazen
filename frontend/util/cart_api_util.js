export const createCart = cart => {
    return $.ajax({
        method: "POST",
        url: "api/carts",
        data: { cart }
    })
}