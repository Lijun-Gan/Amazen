import React from 'react';
import {Link} from "react-router-dom";


class BookShow extends React.Component {
    constructor(props) {
      super(props);
      this.state = ({
        //   book: this.props.book,
          format: 'Select format ',
          price: '0.00'
      })
      this.handlePrice = this.handlePrice.bind(this)
    }
  
    componentDidMount(){
        debugger
      this.props.fetchBook(this.props.match.params.id)
    }


    handlePrice(e){
        // debugger

        const book_format_price = e.target.value.split(",")

        // debugger
        this.setState({
            format: book_format_price[0],
            price: book_format_price[1]
        })
    }


    handleDate(unformatedDate){

        const d = new Date(unformatedDate)
        const months = {
            0: 'January',
            1: 'February',
            2: 'March',
            3: 'April',
            4: 'May',
            5: 'June',
            6: 'July',
            7: 'August',
            8: 'September',
            9: 'October',
            10: 'November',
            11: 'December'
        }
        const monthName = months[d.getMonth()]
        const year = d.getFullYear() 
        const date = d.getDate()
        return `${monthName} ${date}, ${year}`
    }
    

    render(){  
        debugger
        let show_page = <h1>Loading......</h1>
        debugger
       if(this.props.book === undefined ||  this.props.reviews === undefined || this.props.book.prices === undefined)  return show_page
        debugger

        if (this.props.book){

            const {book, reviews} = this.props
            let author_bio;
  

            if (book.biography ){
                author_bio = (
                    <div>
                        <p className="author-bio-name">About the Author: </p>
                        <p className="author-bio-p">{book.biography}</p>
                    </div>
                ) 
            }

            debugger

            // let avg_rating = (book.avg_rating / 5 * 100).toString()+"%"
            // let review_count = "(" + book.avg_rating.toString() + " rating" + ", " + book.reviews.length.toString() + " reviews" + ")"
            
            let totalRating  = 0;
            let avg_rating_out 
            let avg_rating 
            let total_review ;
            let review_count;
            let starRatesBar= [0,0,0,0,0];

            reviews.forEach((review)=>{
                if(review.rating === 1)  starRatesBar[4] += 1;
                if(review.rating === 2)  starRatesBar[3] += 1;
                if(review.rating === 3)  starRatesBar[2] += 1;
                if(review.rating === 4)  starRatesBar[1] += 1;
                if(review.rating === 5)  starRatesBar[0] += 1;
                 
                totalRating += review.rating
            })

            total_review = reviews.length
            avg_rating_out = (totalRating / Math.max(1,reviews.length)).toFixed(2)
        
            
    
            // let pensentage = ((star /total_review).toFixed(2) * 100).toString() 
            let showBar =  null;

            if(reviews.length > 0) {
                showBar = (
                    starRatesBar.map((star,i)=>(
                        <div className="rating-bar-container" key={i}>
                            <span className = "progress-show-stars">{5 - i} star</span>
                            <div id="progressbar" >
                                <div style={{"width": `${((star /total_review).toFixed(2) * 100).toString()+ "%" }` }}></div>
                            </div>
                       
                            <span className="progress-show-percent">{((star /total_review).toFixed(2) * 100).toString()+ "%"}</span>
                        </div>
                    ))
                    )
                review_count =  "(" + avg_rating_out.toString() + " rating" + ", " + reviews.length.toString() + " reviews" + ")"             
                avg_rating = ( avg_rating_out / 5 * 100).toString()+"%"
                }else{
                    showBar = (
                        starRatesBar.map((star,i)=>(
                            <div className="rating-bar-container" key={i}>
                                <span  className = "progress-show-stars" >{5 - i} star</span>
                                <div id="progressbar" >
                                    <div style={{"width":  "0%" }}></div>
                                </div>
                           
                                <span className="progress-show-percent">{"0%"}</span>
                            </div>
                        ))
                        ) 
                    review_count = "(0 rating, 0 reviews)"
                    avg_rating = "0%"
                }
                

            return(


            <div id="bsp-container">

                <div id="bsp-container-first">
                    <div>
                        <img id="lookInside_bookShow" src={window.lookInside_bookShow} alt="Look Inside"/>
                        <img id="showPage-bookImg" src={book.image_url}/>
                    </div>
                    <div className="bsp-detail">
                        <p className="bsp-title">{book.title}</p>
                        <p className="bsp-publication">{this.handleDate(book.publication_date)}</p>
                        <span className ="font-for- author">by </span>
                        <span className="bsp-author">{book.author} </span>
                        <span className ="font-for-author">(Author)</span>
               
<div className="rating-star-min-width">
    <div className="rating-star-container">
        <div className="star-ratings-css">
            <div className="star-ratings-css-top" style={{"width":  `${avg_rating}` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        </div> 
        <p className="review-count-top showpage">{total_review} ratings</p>
    </div>

</div>

                        <div className="book-catego">
                            <span>Category: </span>
                            <span className="bsp-catogory">{book.category}</span>

                        </div>
            
                        <p className="diff-price"> See all formats and editions</p>

                        <ul className="bsp-prices">
                           { book.prices.map((formatPrice,idx)=> {
                            //    debugger
                               return (
                               <li key={idx}>
                        
                                   {/* <button className="price-btn" value={formatPrice} onClick={this.handlePrice}>
                                       <span className="book-show-format">{formatPrice.book_format}</span>
                                        <span className="book-show-price">{"$"+ Number.parseFloat(formatPrice.price).toFixed(2)}</span>
                                    </button> */}


                                   <button className="price-btn" value={[formatPrice.book_format, formatPrice.price]} onClick={this.handlePrice}>{formatPrice.book_format}
                                   <br/>{  "$"+ Number.parseFloat(formatPrice.price).toFixed(2)}</button>
              
                               </li>
                           )})}
                        </ul>
               
                    </div>

                    <div id="addCartContainer">
                        <p className="SelectForm">{this.state.format}: </p>
                        <span className="bsp-price-color">Price: { "$ "+ Number.parseFloat(parseFloat(this.state.price)).toFixed(2)}</span>
                       
                        
                        <p className="freeShipping">& FREE shipping</p>
                        <p className="inStock-color">In Stock</p>
                        <img id="dropDownQuantity" src={window.dropDownQuantity} alt="quantity"/>
                        <img id="addToCart-btn" src={window.addToCart} alt="add to cart"/>
                        <img id="addToCart-btn" src={window.buyNow} alt="buy now"/>
                        <p className="secure-trans">🔒 &nbsp;Secure transaction</p>
                        <p className="shipFrom">ship from &nbsp;&nbsp;Amazen.com</p>
                        <p className="soldBy">sold by &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Amazen.com</p>
                        <img id="addToCart-btn" src={window.addToList} alt="Add to List"/>
                    </div>

                </div>

                <div id="bsp-container-secend">
                    
                    <p className="author-bio-name">About the Book</p>
                    <p className="author-bio-p">{book.description}</p>
               
                   
                   {author_bio}

                </div>

                <div id="bsp-container-third">

                    <div id="book-reviews-container-left">

                        <h2>Customer reviews</h2>
                        
                
                                       
<div className="rating-star-min-width">
    <div className="rating-star-container">
        <div className="star-ratings-css-review bigger">
            <div className="star-ratings-css-top" style={{"width":  `${avg_rating}` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        </div> 
        <p className="review-count bigger">{avg_rating_out} out of 5</p>
    </div>

</div>

<p className="givenSpace">{total_review} global ratings</p>

{ showBar }

<a className="rating-cal" href="https://github.com/Lijun-Gan/Amazen">How are ratings calculated?</a>


                        <p className="title-to-review">Review this Product</p>
                        <p className="share-thoughts">Share your thoughts with other customers</p>


                        <Link to={`/books/${book.id}/create-review`}>
                            <p className="postReview">Write a customer review</p>
                        </Link>
                    </div>



                    <div id="book-reviews-container-right">
                        <p className="us-top-reviews">Top reviews from the United States</p>
                        <ul>
                            {reviews.map((review,idx)=>(
                                <li key={idx}>
                          
         
                                    <div id="PictureText">
                                        <img id="reviewUser-pic" src={window.userPic_review} alt="user pic"/>
                                        <span className="pictureText-text-user">{review.review_author}</span>
                                    </div>

                                    <div className="rating-star-container">
                                        {/* {this.handleRating(review.rating)} */}

     <div className="star-ratings-css">
        <div className="star-ratings-css-top" style={{"width":  `${(review.rating/ 5 * 100).toString()+"%"}` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
    </div> 
    
                                        <span className="bsp-PictureText-title">{review.title}</span>
                                    </div>

                                    <p className="reviewDateNBody">Reviewed in the United States on {this.handleDate(review.created_at)}</p>
                                    <p className="reviewDateNBody">{review.body}</p>

                                    {review.user_id === this.props.currentUser ? 
                                    (
                                        <div className="delete-edit-btn" >
                                            {/* <button className="editReview-btn" onClick={(()=>{this.props.updateReview(review)})} >Edit</button> */}
                                            <Link to={`/reviews/${review.id}/edit`}>
                                                <p className="editReview-btn">Edit</p>
                                            </Link>
                                            <button className="deleteReview-btn" onClick={(()=>{this.props.deleteReview(review)})} >Detete</button>
                                        </div>

                                    ) : null}   
                                </li>
                            ))}
                        </ul>
                        
                    </div>
                </div>

            </div>            

        )}
    } 
}
  


export default BookShow;