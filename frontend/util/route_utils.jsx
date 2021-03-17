import React from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    SignedIn: Boolean(state.session.currentUser)
});

const Auth = ({loggedIn, path, component: Component}) => (
    <Route
        path={path}
        render={props => {
            // debugger
            console.log(props)
            console.log(loggedIn ? <Redirect to="/" /> : <Component {...props} />)
            return (
            loggedIn ? <Redirect to="/" /> : <Component {...props} />)
        }}
    />
);

const Protected = ({signedIn, path, component: Component}) => (
    <Route
        path={path}
        render={props=>(
            signedIn ? <Component {...props} /> : <Redirect to="/signup" />
        )}    />
)


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth))
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected))