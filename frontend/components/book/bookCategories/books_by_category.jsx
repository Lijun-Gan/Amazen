import NavBar from '../../home_page/navigation';
import FootNote from "../../home_page/footnote";
import React from 'react';


const BooksByCategory = (props)=>{
    // debugger
        return(
            <div id="Books_by_Category">
                <NavBar />
                <h1>this is BooksByCategory page</h1>
                {console.log(props)}
                <FootNote />
            
            </div>
        )

}
    

    




export default BooksByCategory;