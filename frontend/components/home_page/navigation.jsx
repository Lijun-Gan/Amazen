import React from 'react';
import { Link } from 'react-router-dom';
import NavSigninContainer from './nav_bar/nav_signin_container'
import SearchBarContainer from './nav_bar/search_bar_container'

//{ currentUser, signout }

const NavBar = (props) => {
  let username;
  if(props.user === undefined){
    username = ""
  }else{
    username = props.user.username
  }

  debugger
  return (
    <div>

    <div id='nav-bar-top'>

        <div className="nav-top-left">
          <Link to="/"> 
            <img id="nav-amazen-logo" src={window.nav_amazenLogo} alt="amazen logo"/>
          </Link>
          

<div className="nav-search-bar-container-outer">

<span className="material-icons loc">room</span>
  <button className="nav-address-container">
    <p className="nav-address">Deliver to {username}</p> 
    <p className="nav-address-select">Select your address</p>
 </button>
</div>

 


        </div>

        <SearchBarContainer />

        <div className="nav-top-right">
          {/* <Link to="/">
          <img id="nav-language" src={window.language_icon} alt="language"/>
          </Link> */}
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
          <button className="sub-nav xxsm">Best Sellers</button>
          <button className="sub-nav xxsm">Today's Deals</button>
          <button className="sub-nav xsm">Prime</button>
          <button className="sub-nav xsm">Customer Service</button>
          <button className="sub-nav sm">New Release</button>
          <button className="sub-nav sm">Books</button>
          <button className="sub-nav md">Fashion</button>
          <button className="sub-nav md">Kindle Books</button>
          <button className="sub-nav md">Gift Cards</button>
          <button className="sub-nav md">Toys & Games</button>
          <button className="sub-nav lg">Find a Gift</button>
          <button className="sub-nav lg">Amazon Home</button>
          <button className="sub-nav lg">Computers</button>
          <button className="sub-nav xlg">Sell</button>
          <button className="sub-nav xlg">Pharmacy</button>
          <button className="sub-nav xlg">Video Games</button>
        </div>
          <button className="subNav last">Shop women-owned</button>
      </div>

    <div id="book-category">
      

    </div>


    </div>
  )
};


export default NavBar;
