import React from "react";
// import HomePageContainer from "./home_page/home_page_container";
import HomePage from "./home_page/home_page";
import SigninContainer from "./session/signin/signin_container";
import SignupContainer from "./session/signup/signup_container";
import { Route,Switch,Link } from 'react-router-dom';
import {AuthRoute,ProtectedRoute} from '../util/route_utils';
import BookIndex from './book/book_index';


const App = () => (
  <div>
    <header>

      {/* <Link to="/"> <h1>amazen</h1> </Link> */}

    </header>
    <Switch>
        <Route exact path="/" component={HomePage} />
        <AuthRoute exact path="/signin" component={SigninContainer} />
        <AuthRoute exact path="/signup" component={SignupContainer} />
        <Route exact path="/books" component={BookIndex} />
    </Switch>
  </div>
);

export default App;
