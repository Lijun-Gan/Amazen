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
                <h3>Shop by Category</h3>

                <div id="select-category">
                    <Link to="/books/business">
                        Click books
                    </Link>
      
                </div>
            </div>
        )
    }

}

export default HomePageCategory;
