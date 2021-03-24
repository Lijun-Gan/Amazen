import React from "react";
import HomePage from "./home_page/home_page";

import { Route,Switch} from 'react-router-dom';
import {ProtectedRoute} from '../util/route_utils';

import BookShowContainer from './book/book_show/book_show_container'
import CreateReviewForm from './review/create_review_form_container';
import EditReviewForm from './review/edit_review_form_container';
import NavBarContainer from './home_page/navigation_container'
import Footer from "./home_page/footnote";


const NonAuthPath = () => (
  <div>
      <NavBarContainer />

    <Switch>
        <Route exact path="/books/:id" component={BookShowContainer} />
        <Route exact path="/" component={HomePage} />

        <ProtectedRoute  exact path="/reviews/:reviewId/edit" component={EditReviewForm} />
        <ProtectedRoute  exact path='/books/:bookId/create-review' component={CreateReviewForm} />
   
    </Switch>

    <Footer /> 

  </div>
);

export default NonAuthPath;
