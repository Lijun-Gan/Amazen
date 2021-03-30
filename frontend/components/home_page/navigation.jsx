import React from 'react';
import { Link } from 'react-router-dom';
import NavSigninContainer from './nav_bar/nav_signin_container'
import SearchBarContainer from './nav_bar/search_bar_container'

//{ currentUser, signout }

const NavBar = (props) => {

  // let quantity = 0;
  // let username;

  // if(props.username === undefined || props.cartsBook === null || props.cartsBook.length === 0 ){
  // if(props.cartsBook.length === 0 ){
  //   
  //   username = "";
  // }else{
 
  //    
  //   username = props.username;
  //   const {cartsBook} = props
  //   // let cartsBook = Object.values(props.cartsBook)
  //     if(cartsBook.length > 0){

  //       cartsBook.forEach(book => {
  //           quantity = quantity + Number(book.quantity);
  //       });
  //     }

  // }

  let numBooksInCart = {
    "position": "relative",
    fontSize: "18px",
    marginTop: "5px",
    "color": "#f08804",
    zIndex: "2"
};


// let books = JSON.parse(localStorage.getItem(props.user.id))
// cartsBook = Object.values(cartsBook)


if (props.quantity < 10) {
    numBooksInCart["left"] = "30px";
} else if (props.quantity < 20) {
    numBooksInCart["left"] = "34px";
} else {
    numBooksInCart["left"] = "36px";
}
   
  return (
    <div id="nav-bar-container">

    <div id='nav-bar-top'>

        <div className="nav-top-left">
          <Link to="/"> 
            <img id="nav-amazen-logo" src={window.nav_amazenLogo} alt="amazen logo"/>
          </Link>
          

<div className="nav-search-bar-container-outer">

<div className="location-container">

<img className="location-icon" src={ window.location_icon} alt="location" />
</div>
{/* <span className="material-icons loc">room</span> */}
  <button className="nav-address-container">
    <p className="nav-address">Deliver to {props.username}</p> 
    <p className="nav-address-select">Select your address</p>
 </button>
</div>

 


        </div>

        <SearchBarContainer />

        <div className="nav-top-right">
    
          <NavSigninContainer />
   

           <button className="nav-returns">
           <span className="nav-signin">Returns </span> 
           <p className="nav-signin"> & Orders</p>
           </button>
    
    


                  <Link to="/cart" id="cart">
                      <h5 style={numBooksInCart}>{props.quantity}</h5>
                      <img src={window.cart} alt="cart" />
                  </Link>


          
        </div>

    </div>


    <div id='nav-bar-mid'>

       <button className="nav-mid-all-container">
        <img id="nav-mid-all" src={window.all_icon} alt="middle nav"/>
        <p className="word-all">&nbsp;All</p>
       </button>

       <div id="nav-mid-container"> 
          <button className="sub-nav xxsm">Best Sellers</button>
          <button className="sub-nav xxsm">Today's Deals</button>
          <button className="sub-nav xsm">Prime</button>
          <button className="sub-nav xsm">Customer Service</button>
          <button className="sub-nav sm">New Release</button>
          <Link to="/" > 
          <button className="sub-nav sm">Books</button>
          </Link>
      

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
        <a className="subNav last" href="https://github.com/Lijun-Gan/Amazen">Shop women-owned</a>
          <button ></button>
      </div>

    <div id="book-category">
      

    </div>


    </div>
  )
};


export default NavBar;
