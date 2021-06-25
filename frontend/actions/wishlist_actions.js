import * as APIUtil from '../util/wishlist_api_util'


export const RECEIVE_WISHLISTS = "RECEIVE_WISHLISTS";
export const RECEIVE_WISHLIST = "RECEIVE_WISHLIST";
export const DELETE_WISHLIST = "DELETE_WISHLIST";
export const CLEAR_WISHLIST_STATE = "CLEAR_WISHLIST_STATE";



export const receiveWishlists = (wishlists) => {
    return {
        type: RECEIVE_WISHLISTS,
        wishlists,
    }
}

export const receiveWishlist = (wishlist) => {
    return {
        type: RECEIVE_WISHLIST,
        wishlist,
    }
}

export const removeWishlist = (wishlist) => {
    return {
        type: DELETE_WISHLIST,
        wishlist,
    }
}

export const clearWishlistState = () => {
    return {
        type: CLEAR_WISHLIST_STATE,
    
    }
}

export const fetchWishlists = ()=>dispatch =>{
    return (
        APIUtil.fetchWishlists().then((wishlists) => dispatch(receiveWishlists(wishlists)))
    )
}

export const createWishlist = wishlist => dispatch => {
    return (
        APIUtil.createWishlist(wishlist).then((wishlist) => {
            
            dispatch(receiveWishlist(wishlist))
        })
    )
}

export const deleteWishlist = whishlistId => dispatch => {
    return (
        APIUtil.deleteWishlist(whishlistId).then((wishlist) => dispatch(removeWishlist(wishlist)))
    )
}