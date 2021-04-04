export const fetchWishlists = () => {

    return $.ajax({
        method: "GET",
        url: "api/whishlists",
    })
}

export const createWishlist = wishlist => {

    return $.ajax({
        method: "POST",
        url: "api/whishlists",
        data: { wishlist }
    })
}
export const deleteWishlist = wishlistId => {
    
    return $.ajax({
        method: "delete",
        url: `api/whishlists/${wishlistId}`,
    })
}
