import React from "react";

import { Route, Switch} from 'react-router-dom';
import {ProtectedRoute} from '../util/route_utils';

import BookShowContainer from './book/book_show/book_show_container'
import CreateReviewForm from './review/create_review_form_container';
import EditReviewForm from './review/edit_review_form_container';
import NavBarContainer from './home_page/navigation_container'
import Footer from "./home_page/footnote";
import CartContainer from './cart/cart_container';
import HomeContainer from './book/book_index/home_container';
import BookIndexContainer from './book/book_index/book_index_container';
import SearchResultContainer from './search_result/search_result_container';
import WishlistContainer from "./wishlist/wishlist_container";
import ProfileContainer from "./profile/profile_container";
import EditLoginContainer from "./profile/edit_login_container";
import OrderContainer from "./order/order_container";
import ConfirmContainer from "./cart/order_confirmation";
import ContactUs from "./email/email_form";



const NonAuthPath = () => (
  <div>
      <NavBarContainer />

    <Switch>
        <Route exact path="/bookFilter/:kinds/:kind" component={BookIndexContainer} />
        <Route exact path="/books/:id" component={BookShowContainer} />
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/search" component={SearchResultContainer} />
        <Route exact path="/contact" component={ContactUs} />

        <ProtectedRoute  exact path="/reviews/:reviewId/edit" component={EditReviewForm} />
        <ProtectedRoute  exact path='/books/:bookId/create-review' component={CreateReviewForm} />
   
        <ProtectedRoute exact path="/cart" component={CartContainer} />

        <ProtectedRoute exact path="/wishlist" component={WishlistContainer} />
        <ProtectedRoute exact path="/orders" component={OrderContainer} />

        <ProtectedRoute exact path="/profile"  component={ProfileContainer}/>
        <ProtectedRoute exact path="/editLogin"  component={EditLoginContainer}/>

        <ProtectedRoute exact path="/order"  component={OrderContainer}/>
        <ProtectedRoute exact path="/order-confirmation"  component={ConfirmContainer}/>

    </Switch>

    <Footer /> 

  </div>
);

export default NonAuthPath;
