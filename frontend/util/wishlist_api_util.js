export const fetchWishlists = () => {

    return $.ajax({
        method: "GET",
        url: "api/wishlists",
    })
}

export const createWishlist = wishlist => {

    return $.ajax({
        method: "POST",
        url: "api/wishlists",
        data: { wishlist }
    })
}
export const deleteWishlist = wishlistId => {
    
    return $.ajax({
        method: "delete",
        url: `api/wishlists/${wishlistId}`,
    })
}
