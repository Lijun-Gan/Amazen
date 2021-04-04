import React from 'react';
import ReactDOM from "react-dom";
import configureStore from './store/store'
import {checkUser} from "./util/session_api_util";
import {signin, signout, signup} from "./actions/session_actions"
import Root from "./components/root";
import { fetchBook,fetchBooks,fetchBooksCategory, fetchBooksTitle } from './actions/book_actions';
import { createReview,updateReview,deleteReview,fetchReview } from './actions/review_actions';
import {createCart, deleteCart} from './actions/cart_actions';
import {createWishlist, deleteWishlist} from './actions/wishlist_actions';

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

    window.fetchBook = fetchBook
    window.fetchBooks = fetchBooks
    window.fetchBooksCategory = fetchBooksCategory
    window.fetchBooksTitle = fetchBooksTitle

    window.createReview = createReview
    window.updateReview = updateReview
    window.deleteReview = deleteReview
    window.fetchReview = fetchReview
    
    window.createCart = createCart 
    window.deleteCart = deleteCart

    window.deleteWishlist = deleteWishlist
    window.createWishlist = createWishlist


    ReactDOM.render(<Root store={store} />, root);

    
})
