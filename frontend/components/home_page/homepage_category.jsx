import React from 'react';
import {Link} from 'react-router-dom';

class HomePageCategory extends React.Component{
    
    handleCategorty(category){
        reuturn (()=>{

        })
    }

    render(){
        return(
            <div id="homeCategory">
                <h1>Books at Amazen</h1>

                <div id="select-category-cantainer">

                <h3>Shop by Category</h3>

                <div id="select-category">

                    <div id="catPic" className="xsm">
                        <Link to="/books/arts">
                            <img id="category_img" src={window.art_book} alt="arts category"/>
                            {/* <span>Arts & Photography</span> */}
                        </Link>
                    </div>

                    <div id="catPic" className="xsm">
                        <Link to="/books/bio">
                            <img id="category_img" src={bio_book} alt="bio category"/>
                            {/* <span>Biographies & Memoirs</span> */}
                        </Link>
                    </div>

                    <div id="catPic" className="xsm">
                        <Link to="/books/business">
                            <img id="category_img" src={window.bus_book} alt="business category"/>
                            {/* <span>Business & Investing</span> */}
                        </Link>
                    </div>

                    <div id="catPic" className="sm">
                        <Link to="/books/children">
                            <img id="category_img" src={window.child_book} alt="child_book"/>
                            {/* <span>Children's Book</span> */}
                        </Link>
                    </div>

                    <div id="catPic" className="sm">
                        <Link to="/books/cookbooks">
                            <img id="category_img" src={window.cook_book} alt="cookbook category"/>
                            {/* <span>Cookbooks Food & Wine</span> */}
                        </Link>
                    </div>

                    <div id="catPic" className="md">
                        <Link to="/books/history">
                            <img id="category_img" src={window.history_book} alt="history category"/>
                            {/* <span>History</span> */}
                        </Link>
                    </div>
      
                    <div id="catPic" className="lg">
                        <Link to="/books/literature">
                            <img id="category_img" src={window.fiction_book} alt="literature category"/>
                            {/* <span>Literature & Fiction</span> */}
                        </Link>
                    </div>
                
                    <div id="catPic" className="lg">
                        <Link to="/books/mistery">
                            <img id="category_img" src={window.mystery_book} alt="mystery category"/>
                            {/* <span>Mystery & Suspense</span> */}
                        </Link>
                    </div>

                    <div id="catPic" className="xlg">
                        <Link to="/books/romance">
                            <img id="category_img" src={window.romance_book} alt="romance category"/>
                            {/* <span>Romance</span> */}
                        </Link>
                    </div>

                    <div id="catPic" className="xlg">
                        <Link to="/books/fantasy">
                            <img id="category_img" src={window.fantacy_book} alt="fantacy category"/>
                            {/* <span>Sci-fi & Fantasy</span> */}
                        </Link>
                    </div>


                    <div id="catPic" className="xlg">
                        <Link to="/books/teens">
                            <img id="category_img" src={window.teens_book} alt="young adult category"/>
                            {/* <span>Teens & Young Adult</span> */}
                        </Link>
                    </div>


                </div>

                </div>

            </div>
        )
    }

}

export default HomePageCategory;
