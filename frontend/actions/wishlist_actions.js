import * as APIUtil from '../util/wishlist_api_util'


export const RECEIVE_WISHLISTS = "RECEIVE_WISHLISTS"
export const RECEIVE_WISHLIST = "RECEIVE_WISHLIST"
export const DELETE_WISHLIST = "DELETE_WISHLIST"



export const receiveWishlists = (whishlists) => {
    return {
        type: RECEIVE_WISHLISTS,
        whishlists,
    }
}

export const receiveWishlist = (whishlist) => {
    return {
        type: RECEIVE_WISHLIST,
        whishlist,
    }
}

export const removeWishlist = (whishlistId) => {
    return {
        type: DELETE_WISHLIST,
        whishlistId,
    }
}

export const fetchWishlists = ()=>dispatch =>{
    return (
        APIUtil.fetchWishlist().then((wishlists) => dispatch(receiveWishlists(wishlists)))
    )
}

export const createWishlist = whishlist => dispatch => {
    return (
        APIUtil.createWishlist(whishlist).then((wishlist) => dispatch(receiveWishlist(wishlist)))
    )
}

export const deleteWishlist = whishlistId => dispatch => {
    return (
        APIUtil.deleteWishlist(whishlistId).then((wishlist) => dispatch(removeWishlist(wishlist)))
    )
}