import React, { Profiler } from "react";

import { Route, Switch} from 'react-router-dom';
import {ProtectedRoute} from '../util/route_utils';

import BookShowContainer from './book/book_show/book_show_container'
import CreateReviewForm from './review/create_review_form_container';
import EditReviewForm from './review/edit_review_form_container';
import NavBarContainer from './home_page/navigation_container'
import Footer from "./home_page/footnote";
import CartContainer from './cart/cart_container';
import BookIndexContainer from './book/book_index/book_index_container';
import SearchResultContainer from './search_result/search_result_container';
import WishlistContainer from "./wishlist/wishlist_container";
import ProfileContainer from "./profile/profile_container";
import EditLoginContainer from "./profile/edit_login_container";


const NonAuthPath = () => (
  <div>
      <NavBarContainer />

    <Switch>
        <Route exact path="/books/:id" component={BookShowContainer} />
        <Route exact path="/" component={BookIndexContainer} />
        <Route exact path="/search" component={SearchResultContainer} />

        <ProtectedRoute  exact path="/reviews/:reviewId/edit" component={EditReviewForm} />
        <ProtectedRoute  exact path='/books/:bookId/create-review' component={CreateReviewForm} />
   
        <ProtectedRoute exact path="/cart" component={CartContainer} />

        <ProtectedRoute exact path="/wishlist" component={WishlistContainer} />

        <ProtectedRoute path="/profile"  component={ProfileContainer}/>
        <ProtectedRoute path="/EditLogin"  component={EditLoginContainer}/>

    </Switch>

    <Footer /> 

  </div>
);

export default NonAuthPath;
