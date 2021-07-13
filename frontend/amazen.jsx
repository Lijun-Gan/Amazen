import React from 'react';
import ReactDOM from "react-dom";
import configureStore from './store/store'
import { checkUser, updateZipCode } from "./util/session_api_util";
import {signin, signout, signup} from "./actions/session_actions"
import Root from "./components/root";
import { fetchBook,fetchBooks,fetchBooksCategory, fetchBooksTitle, fetchBooksTitles } from './actions/book_actions';
import { createReview,updateReview,deleteReview,fetchReview } from './actions/review_actions';
import {createOrder} from './actions/cart_actions';
import {createWishlist, deleteWishlist, fetchWishlists} from './actions/wishlist_actions';
import {fetchProfile} from './actions/profile_actions';

document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById("root");
    // const store = configureStore();

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
            users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        // delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.signin = signin;
    window.signout = signout;
    window.signup = signup;

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.checkUser = checkUser
    window.updateZipCode = updateZipCode

    window.fetchBook = fetchBook
    window.fetchBooks = fetchBooks
    window.fetchBooksCategory = fetchBooksCategory
    window.fetchBooksTitle = fetchBooksTitle

    window.createReview = createReview
    window.updateReview = updateReview
    window.deleteReview = deleteReview
    window.fetchReview = fetchReview
    
    window.createOrder = createOrder 
    // window.deleteCart = deleteCart

    window.deleteWishlist = deleteWishlist
    window.createWishlist = createWishlist
    window.fetchWishlists = fetchWishlists

    window.fetchProfile = fetchProfile
    
    store.dispatch(fetchBooksTitles());

    ReactDOM.render(<Root store={store} />, root);

})
