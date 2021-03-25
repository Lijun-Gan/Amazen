import React from 'react';
import { Link } from 'react-router-dom';

const BookIndexItem = ({ book }) => {
    
    let avg_rating = (Math.max(book.avg_rating / 5 )* 100).toString()+"%"
    let review_ratings = "("+ book.avg_rating.toString() +")"

    // let avg_rating;
    // let review_ratings;
    // let totalRating  = 0;
    // debugger

    // if(book.reviews.length> 0) {
    //     book.reviews.forEach((review)=>{
    //         totalRating += review.rating
    //     })
    //     avg_rating = ((totalRating / book.reviews.length / 5).toFixed(2) * 100).toString()+"%";
    //     review_ratings = "("+ ((totalRating / book.reviews.length).toFixed(2)).toString() +")"

    // }else{
    //     avg_rating = "0%";
    //     review_ratings = "(0.0) "
    // }


    return (
        
        <li className='bookItem-container'>
            <Link to={`/books/${book.id}`}>
            {/* <button className='book-info' onClick={()=>(<BookShowContainer />)}> */}
                <div className='book-photo'>
                    <img className='index-book-photo' src={book.image_url}></img>
                </div>
                <p className='index-book-title'>{book.title}</p>



<div className="rating-star-container">
    <div className="star-ratings-css">
        <div className="star-ratings-css-top" style={{"width":  `${avg_rating}` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
    </div> 
    <p className="review-count">{review_ratings}</p>
</div>
                <span className="index-book--price">Price: { "$ "+ Number.parseFloat(parseFloat(book.price)).toFixed(2)}</span>
                <span className='free-ship-cap'>FREE Shipping by Amazen</span>
            </Link>
            {/* </button> */}
        </li>
    )
};

export default BookIndexItem;