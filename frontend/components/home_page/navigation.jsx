import React from 'react';
import { Link } from 'react-router-dom';
import NavSigninContainer from './nav_bar/nav_signin_container'
import SearchBarContainer from './nav_bar/search_bar_container'

//{ currentUser, signout }

const NavBar = () => {
  // const signInLink = () => (
  //   <nav >
  //     <Link to="/signin"> Hello, Sign in</Link>
  //   </nav>
  // );
  
  // const signedInHomePage = () => (
  //   <nav >
  //     <h2>Hi, {currentUser.username}!</h2>
  //     <button onClick={signout}>Log Out</button>
  //   </nav>
  // );

  // return currentUser ?  signedInHomePage() : signInLink() ;

  return (
    <div>


    <div id='nav-bar-top'>

        <div className="nav-top-left">
          <Link to="/"> 
            <img id="nav-amazen-logo" src={window.nav_amazenLogo} alt="amazen logo"/>
          </Link>
          <Link to="/">
          <img id="nav-address" src={window.nav_address} alt="address"/>
          </Link>
        </div>

        <SearchBarContainer />

        <div className="nav-top-right">
          <Link to="/">
          <img id="nav-language" src={window.language_icon} alt="language"/>
          </Link>
          <NavSigninContainer />
          {/* <Link to="/">
          <img id="nav-returns" src={window.nav_returns} alt="returns"/>
          </Link> */}

           <button className="nav-returns">
           <span className="nav-signin">Returns </span> 
           <p className="nav-signin"> & Orders</p>
           </button>
    

          <Link to="/">
          <img id="nav-cart" src={window.nav_cart} alt="shopping cart"/>
          </Link>
        </div>

    </div>


    <div id='nav-bar-mid'>
      <Link to="/">
      <img id="nav-mid-all" src={window.nav_mid_all} alt="middle nav"/>
      </Link>

       <div id="nav-mid-container"> 
          <button className="sub-nav first">Best Sellers</button>
          <button className="sub-nav">Today's Deals</button>
          <button className="sub-nav">Prime</button>
          <button className="sub-nav">Customer Service</button>
          <button className="sub-nav">New Release</button>
          <button className="sub-nav">Books</button>
          <button className="sub-nav">Fashion</button>
          <button className="sub-nav">Kindle Books</button>
          <button className="sub-nav">Gift Cards</button>
          <button className="sub-nav">Toys & Games</button>
          <button className="sub-nav">Find a Gift</button>
          <button className="sub-nav">Amazon Home</button>
          <button className="sub-nav">Computers</button>
          <button className="sub-nav">Sell</button>
          <button className="sub-nav">Pharmacy</button>
          <button className="sub-nav">Video Games</button>
          <button className="sub-nav last">Shop women-owned</button>
        </div>
      </div>

    <div id="book-category">
      

    </div>


    </div>
  )
};


export default NavBar;
