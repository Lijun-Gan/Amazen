import React from 'react';
import { Link } from 'react-router-dom';


const NavSignin = ({ currentUser, signout }) => {
  const signInLink = () => (
    <div id="nav-signin">
      <Link  to="/signin"> Hello, Sign in 
      <span id="nav-account"> Account ▾</span>
      </Link>
    </div>
  );
  
  const navSignedIn = () => (
    <div id="nav-signin">
      <h2>Hi, {currentUser.username}!</h2>
      <button onClick={signout}>Log Out</button>
    </div>
  );

  return currentUser ?  navSignedIn() : signInLink() ;
};


export default NavSignin;

