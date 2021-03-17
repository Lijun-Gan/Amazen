import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = ({ currentUser, signout }) => {
  const signInLink = () => (
    <nav >
      <Link to="/signin"> Hello, Sign in</Link>
    </nav>
  );
  
  const signedInHomePage = () => (
    <nav >
      <h2>Hi, {currentUser.username}!</h2>
      <button onClick={signout}>Log Out</button>
    </nav>
  );

  return currentUser ?  signedInHomePage() : signInLink() ;
};


export default HomePage;

