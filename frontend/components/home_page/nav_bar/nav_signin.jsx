import React from 'react';
import { Link } from 'react-router-dom';


const NavSignin = ({ currentUser, signout }) => {
  const signInLink = () => (
    <div className="nav-signin-container">
      <Link  to="/signin">
      <span className="nav-signin">Hello, Sign in </span> 
      <p className="nav-signin"> Account & Lists ▾</p>
      </Link>
    </div>
  );
  
  const navSignedIn = () => (
    <div className="nav-signin-container">
      <p className="nav-signin username">Hello, {currentUser.username}!</p>
      {/* <p></p> */}
      <button className="nav-signin" onClick={signout}>Log Out</button>
    </div>
  );

  return currentUser ?  navSignedIn() : signInLink() ;
};


export default NavSignin;