import React from 'react';
import ReactDOM from "react-dom";
import configureStore from './store/store'
import {checkUser} from "./util/session_api_util";
import {signin, signout, signup} from "./actions/session_actions"
import Root from "./components/root";

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
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.signin = signin;
    window.signout = signout;
    window.signup = signup;

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.checkUser = checkUser

    ReactDOM.render(<Root store={store} />, root);

    
})
