import React from "react";
import HomePageContainer from "./home_page/home_page_container";
import SigninContainer from "./session/signin/signin_container";
import SignupContainer from "./session/signup/signup_container";
import { Route,Switch,Link } from 'react-router-dom';
import {AuthRoute,ProtectedRoute} from '../util/route_utils';
import BookIndex from './book/book_index';


const App = () => (
  <div>
    <header>

      <Link to="/"> <h1>Amazen Logo</h1> </Link>

      <HomePageContainer />
    </header>
    <Switch>

        <Route exact path="/signin" component={SigninContainer} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/books" component={BookIndex} />
    </Switch>
  </div>
);

export default App;
