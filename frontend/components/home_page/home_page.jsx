import NavBar from './navigation';
import FootNote from "./footnote";
import React from 'react';
import HomePageCategory from './homepage_category';

const HomePage = (props)=>{
    return(
        <div>
            <NavBar />
            <HomePageCategory />
            {console.log(props)}
            <FootNote />
        </div>
    )
}

export default HomePage;