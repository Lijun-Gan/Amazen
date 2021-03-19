import React from 'react';
import { Link } from 'react-router-dom';
import NavSigninContainer from './nav_bar/nav_signin_container'
import SearchBarContainer from './nav_bar/search_bar_container'

//{ currentUser, signout }

const HomePage = () => {
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
      <Link to="/"> 
        <img id="nav-amazen-logo" src={window.nav_amazenLogo} alt="amazen logo"/>
      </Link>
      <Link to="/">
      <img id="nav-address" src={window.nav_address} alt="address"/>
      </Link>
      <SearchBarContainer />
      <Link to="/">
      <img id="nav-language" src={window.language_icon} alt="language"/>
      </Link>
      <NavSigninContainer />
      <Link to="/">
      <img id="nav-returns" src={window.nav_returns} alt="returns"/>
      </Link>
      <Link to="/">
      <img id="nav-cart" src={window.nav_cart} alt="shopping cart"/>
      </Link>
    </div>


    <div id='nav-bar-mid'>
      <Link to="/">
      <img id="nav-mid-all" src={window.nav_mid_all} alt="middle nav"/>
      </Link>
      <button>Best Sellers</button>
      <button>Today's Deals</button>
      <button>recommendation</button>
      <button>Primes</button>
      <button>Customer Service</button>
      <button>Kindle Books</button>
    </div>

    </div>
  )
};


export default HomePage;

