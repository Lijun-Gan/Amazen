import React from "react";
// import HomePageContainer from "./home_page/home_page_container";
import HomePage from "./home_page/home_page";
import SigninContainer from "./session/signin/signin_container";
import SignupContainer from "./session/signup/signup_container";
import { Route,Switch,Link } from 'react-router-dom';
import {AuthRoute,ProtectedRoute} from '../util/route_utils';
// import BooksByCategory from './book/bookCategories/books_by_category'; 

import BookShowContainer from './book/book_show/book_show_container'
// import NavBar from './home_page/navigation';
import BookIndexContainer from './book/book_index/book_index_container';
import CreateReviewForm from './review/create_review_form_container';
import EditReviewForm from './review/edit_review_form_container';
import AuthPath from './auth_path';
import NonAuthPath from './non_auth_path';

const App = () => (
  <div>
    <header>

    </header>

    <Switch>
        <AuthRoute exact path="/signin" component={AuthPath} />
        <AuthRoute exact path="/signup" component={AuthPath} />
        <Route path="/" component={NonAuthPath} />
    </Switch>


    {/* <Switch>
        <Route exact path="/books/:id" component={BookShowContainer} />
       

        <ProtectedRoute  exact path="/reviews/:reviewId/edit" component={EditReviewForm} />
        <ProtectedRoute  exact path='/books/:bookId/create-review' component={CreateReviewForm} />
        <AuthRoute exact path="/signin" component={SigninContainer} />
        <AuthRoute exact path="/signup" component={SignupContainer} />
    </Switch> */}
  </div>
);



export default App;

{/* <Switch>

    <AuthRoute exact path="/signin" component={AuthPath} />
    <AuthRoute exact path="/signup" component={AuthPath} />
    <Route exact path="/books/:id" component={BookShowContainer} />
    <Route exact path="/" component={HomePage} />
    <ProtectedRoute  exact path="/reviews/:reviewId/edit" component={EditReviewForm} />
    <ProtectedRoute  exact path='/books/:bookId/create-review' component={CreateReviewForm} />


</Switch> */}
