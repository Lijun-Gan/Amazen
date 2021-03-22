import React from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    signedIn: Boolean(state.session.id)
});

const Auth = ({signedIn, path, component: Component, exact}) => (
    <Route
        path={path}
        exact={exact}
        render={props => {
            return (
                signedIn? <Redirect to="/" /> : <Component {...props} />)
        }}
    />
);

const Protected = ({signedIn, path, component: Component, exact}) => (
    <Route
        path={path}
        exact={exact}
        render={props=>(
            signedIn ? <Component {...props} /> : <Redirect to="/signin" />
        )}    />
)


export const AuthRoute = withRouter(connect(mapStateToProps,null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps,null)(Protected))