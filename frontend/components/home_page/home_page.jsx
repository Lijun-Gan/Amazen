import NavBar from './navigation';
import FootNote from "./footnote";
import React from 'react';
import HomePageCategory from './homepage_category';

const HomePage = (props)=>{
    return(
        <div>
            <NavBar />
            <HomePageCategory />
            <p>
          
            </p>
            <FootNote />
        </div>
    )
}

export default HomePage;