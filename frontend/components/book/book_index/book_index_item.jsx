import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";


const BookIndexItem = ({book, prime, currentUserId}) => {

    const history = useHistory();

    const handlePrice = () =>{
        if(currentUserId){      
            const savedCart = localStorage.getItem(currentUserId);
            // let cart = {};
            let cart = {"cartItems":{} , "prices": {}};
        
            if (savedCart) { 
            
                cart = JSON.parse(savedCart);
                
            }
            
            cart["prices"][book.id.toString()] = { format: book.format, price:book.price}
            
            localStorage.setItem(currentUserId, JSON.stringify(cart));
        }

        history.push({
            pathname:  `/books/${book.id}`,
         });
        
    }
    
    
    if (book.avg_rating === undefined){
        return <h1>Loading.......</h1>
    }


    let avg_rating = ( book.avg_rating / 5 * 100).toString()+"%"
    let review_ratings = "("+ book.avg_rating.toString() +")"

    const price =  Number.parseFloat(parseFloat(book.price)).toFixed(2);
    const priceArr =  price.split(".")
    const priceLeft = priceArr[0]
    const priceRight = priceArr[1]

    let discountPrice = book.price * 0.75 + 0.99;
    discountPrice = Number.parseFloat(parseFloat(discountPrice)).toFixed(2);
    const discountPriceArr =  discountPrice.split(".")
    const discountPriceLeft = discountPriceArr[0]
    const discountPriceRight = discountPriceArr[1]

  
    return (
        
        <li className='bookItem-container'>
            {/* <Link to={`/books/${book.id}`}> */}
            <button className='book-info' onClick={ handlePrice}>
                <div className='book-photo'>
                    <img className='index-book-photo' src={book.image_url}></img>
                </div>

            <div className="showPage-book-info">

                <p className='book-index-page-title'>{book.title}</p>

                <p className='index-book-page-author'>{book.author}</p>
                <p className='index-book-page-format'>{book.format}</p>

                
                {/* { discount[book.id] && discount[book.id] === book.format ?  */}
                { book.discount ? 
                
                (<div className="book-index-price-prime">
                    <p className="index-book-show-price-dollar">$</p>
                    <p className="index-book-show-price">{ discountPriceLeft}</p>
                    <p className="index-book-show-price-decimal">{ discountPriceRight}</p>
                    {/* <p className="index-book-show-price">{ "$"+ book.price.split('.')[0]}</p> */}

                    <p className="index-book-cross-price">{ "$"+ price }</p>
                </div>)
                 : 
                (<div className="book-index-price-prime">
                     <p className="index-book-show-price-dollar">$</p>
                    <p className="index-book-show-price">{ priceLeft}</p>
                    <p className="index-book-show-price-decimal">{priceRight}</p>
                </div>)
                }

                <div className="book-index-rating-star-container">
                    <div className="star-ratings-css-home-page">
                        <div className="star-ratings-css-top" style={{"width":  `${avg_rating}` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                        <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                    </div> 
                    <p className="review-count-home-page">({book.total_reviews})</p>
                    {/* book.reviewIds.length */}
                </div>
               


                {prime[book.id] ?
                (<div className="book-index-price-prime">
                    <p className="book-index-check-color">✓</p> 
                    <p className="prime-color">prime</p> 
                </div>    )   : null  } 

                {/* <div className="book-index-price-prime">
                    {prime[book.id] ? <p className="book-index-check-color">✓</p> : null} 
                    {prime[book.id] ? <p className="prime-color">prime</p> : null} 
                </div>         */}
       
            </div>         
            
            {/* </Link> */}
            </button>
        </li>
    )
};

export default BookIndexItem;