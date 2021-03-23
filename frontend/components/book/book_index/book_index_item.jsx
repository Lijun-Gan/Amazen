import React from 'react';
import { Link } from 'react-router-dom';
import BookShowContainer from '../book_show/book_show_container'

const BookIndexItem = ({ book }) => {
    let avg_rating = (book.avg_rating / 5 * 100).toString()+"%"
    debugger
    let review_ratings = "("+ book.avg_rating.toString() +")"

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