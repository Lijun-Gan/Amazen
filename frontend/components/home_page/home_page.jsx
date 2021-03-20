import NavBar from './navigation';
import FootNote from "./footnote";
import React from 'react';

const HomePage = ()=>{
    return(
        <div>
            <NavBar />
            <h1>Body</h1>
            <FootNote />
        </div>
    )
}

export default HomePage;