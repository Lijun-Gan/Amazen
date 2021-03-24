import NavBarContainer from './navigation_container';
import FootNote from "./footnote";
import React from 'react';
import HomePageCategory from './homepage_category';
import BookIndex from '../book/book_index/book_index_container';

const HomePage = (props)=>{
    return(
        <div>
            <NavBarContainer />
            <HomePageCategory />
            <BookIndex />
            <FootNote />
        </div>
    )
}

export default HomePage;