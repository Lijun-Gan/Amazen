import React from 'react';
import { Link } from 'react-router-dom';


const NavSignin = ({ currentUser, signout }) => {
  const signInLink = () => (
    <div className="nav-signin-container">
      <Link  to="/signin">
      <span className="nav-signin">Hello, Sign in </span> 
      <p className="nav-signin"> Account ▾</p>
      </Link>
    </div>
  );
  
  const navSignedIn = () => (
    <div className="nav-signin-container">
      <span className="nav-signin">Hello, {currentUser.username}!</span>
      <button className="nav-signin" onClick={signout}>Log Out</button>
    </div>
  );

  return currentUser ?  navSignedIn() : signInLink() ;
};


export default NavSignin;

