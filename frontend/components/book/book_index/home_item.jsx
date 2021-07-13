import React from 'react';
import { Link } from 'react-router-dom';

const HomeItem = ({book, prime}) => {
    
     
    
    if (book.avg_rating === undefined){
        return <h1>Loading.......</h1>
    }


    let avg_rating = ( book.avg_rating / 5 * 100).toString()+"%"
    let review_ratings = "("+ book.avg_rating.toString() +")"



    return (
        
        <li className='bookItem-container'>
            <Link to={`/books/${book.id}`}>
            {/* <button className='book-info' onClick={()=>(<BookShowContainer />)}> */}
                <div className='book-photo'>
                    <img className='index-book-photo' src={book.image_url}></img>
                </div>

            <div className="showPage-book-info">

                <p className='home-book-title'>{book.title}</p>

                <div className="home-rating-star-container">
                    <div className="star-ratings-css-home-page">
                        <div className="star-ratings-css-top" style={{"width":  `${avg_rating}` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                        <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                    </div> 
                    <p className="review-count-home-page">{book.total_reviews}</p>
                    {/* book.reviewIds.length */}
                </div>
                              
                <div className="price-prime">
                    <p className="index-book--price home">{ "$"+ Number.parseFloat(parseFloat(book.price)).toFixed(2)}</p>
  
                    {prime[book.id] ? <p className="check-color">✓</p> : null} 
                    {prime[book.id] ? <p className="prime-color">prime</p> : null} 
                    
                    {/* <img className="home-prime" src={window.prime} alt="price and prime" /> */}
                </div>
                {/* <p className="index-book--price-discount home">{ "$"+ Number.parseFloat(parseFloat(book.price)).toFixed(2)}</p> */}
                {/* <p className='free-ship-cap home'>FREE Shipping by Amazen</p> */}


            </div>         
            
            </Link>
            {/* </button> */}
        </li>
    )
};

export default HomeItem;