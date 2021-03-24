import React from "react";
import SigninContainer from "./session/signin/signin_container";
import SignupContainer from "./session/signup/signup_container";
import { Switch } from 'react-router-dom';
import {AuthRoute,} from '../util/route_utils';




const AuthPath = () => (


    <Switch>
        <AuthRoute exact path="/signin" component={SigninContainer} />
        <AuthRoute exact path="/signup" component={SignupContainer} />
    </Switch>

);


export default AuthPath;
