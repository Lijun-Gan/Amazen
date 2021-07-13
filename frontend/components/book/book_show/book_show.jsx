import React from 'react';
import {Link} from "react-router-dom";


class BookShow extends React.Component {
    constructor(props) {
      super(props);

      this.state = ({
        //   book: this.props.book,
        //   format: 'Select format',
        //   price: '0.00',
          format: this.props.format,
          price: this.props.price,
          quantity: '1',
          checkOut: false,
          review_err: "",
          wishlist_err: "",
          
      })
      this.handlePrice = this.handlePrice.bind(this)
      this.handleCart = this.handleCart.bind(this)
      this.handleBookQuantity = this.handleBookQuantity.bind(this)
      this.handleBuyNow = this.handleBuyNow.bind(this)
      this.addToWishlist = this.addToWishlist.bind(this)
      this.handleBtn = this.handleBtn.bind(this)
      this.handDelivery = this.handDelivery.bind(this)

      this.wrapperRef = React.createRef();
    //   this.setWrapperRef = this.setWrapperRef.bind(this);
      this.handleClickOutside = this.handleClickOutside.bind(this);
    }


    componentDidMount(){
        document.addEventListener('mousedown', this.handleClickOutside);
  
        // this.props.fetchBooks().then(()=>{
            this.props.fetchBook(this.props.match.params.id)
            
        // }) 
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
            // alert('You clicked outside of me!');
            if(this.state.showReviewBtn){

                const id = this.wrapperRef.current.id.slice(0,-1) + "book"
                let popup = document.getElementById(id);
                popup.classList.toggle("show");
         
    
                this.setState({showReviewBtn: !this.state.showReviewBtn });

            }
        }
    }

    handleBtn(id){
        return(e)=>{

            let popup = document.getElementById(id);
            popup.classList.toggle("show");
     

            this.setState({showReviewBtn: !this.state.showReviewBtn });

        }
    }
  
    handleCart(e){
      

        e.preventDefault();

        if(!this.props.currentUserId){
            this.props.history.push("/signin")
        }
    

        const savedCart = localStorage.getItem(this.props.currentUserId);
        // let cart = {};
        let cart = {"cartItems":{} , "prices": {}};

        if (savedCart) { 
           cart = JSON.parse(savedCart);
        }

        

        let cartItem = {title:this.props.book.title, image_url:this.props.book.image_url, author: this.props.book.author,  quantity: this.state.quantity, format: this.state.format ,price: this.state.price, book_id: this.props.book.id, price_id: this.props.book.prices[this.state.format]["id"], discount: this.props.book.prices[this.state.format].discount}
        let uniqueId = this.props.book.id.toString() + "_" + this.state.format

        cart["cartItems"][uniqueId] = cartItem

        
    
        localStorage.setItem(this.props.currentUserId, JSON.stringify(cart));

        // let sub_total = Number(this.state.quantity) * parseFloat(this.state.price)

        this.props.receiveCart(cartItem)
        this.props.history.push('/cart')

        // this.props.receiveCart({user_id: currentUser.id, book_id: this.props.book.id, quantity: Number(this.state.quantity) }).then(()=>(this.props.history.push("/cart")))
       
    };


    handleBookQuantity(e){
        e.preventDefault();
     
        this.setState({
            quantity: e.target.value
        })
    }

    handlePrice(e){
        const book_format_price = e.currentTarget.value.split(",")

        
        const savedCart = localStorage.getItem(this.props.currentUserId);
        // let cart = {};
        let cart = {"cartItems":{} , "prices": {}};
     
        if (savedCart) { 
           
            cart = JSON.parse(savedCart);
            
        }
        
        // cart[this.props.book.id.toString()] = { format: book_format_price[0], price:book_format_price[0]}
        cart["prices"][this.props.book.id.toString()] = { format: book_format_price[0], price:book_format_price[1]}
        
        localStorage.setItem(this.props.currentUserId, JSON.stringify(cart));
        
      

        this.setState({
            format: book_format_price[0],
            price: book_format_price[1], 
        })
    }

    addToWishlist(){

        let priceId;
        Object.values(this.props.book.prices).forEach((price)=>{
            if(price.book_format === this.state.format) priceId = price.id
        })

        this.props.createWishlist({book_id: this.props.book.id, price_id: priceId })
        this.props.history.push("/wishlist")
    }

    handDelivery(){
 
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
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            
            const today = new Date(new Date().getTime()+(2*24*60*60*1000))

            const weekDay = days[today.getDay()]
            const monthName = months[today.getMonth()]
            const date = today.getDate()
           
            return `${weekDay}, ${monthName} ${date}`
    
   
    }

    formatDate(useDate){
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

        const d = new Date(useDate)
            const monthName = months[d.getMonth()]
            const year = d.getFullYear() 
            const date = d.getDate()
       
        return `${monthName} ${date}, ${year}`

    }



    handleDate(unformatedDate){

        if(unformatedDate.update === unformatedDate.create){
           
            // const d = new Date(unformatedDate.update )
            // const monthName = months[d.getMonth()]
            // const year = d.getFullYear() 
            // const date = d.getDate()
            // return `Reviewed in the United States on ${monthName} ${date}, ${year}`
            return "Reviewed in the United States on " +  this.formatDate(unformatedDate.update)
        }else{
            // const d = new Date(unformatedDate.create )
            // const monthName = months[d.getMonth()]
            // const year = d.getFullYear() 
            // const date = d.getDate()
            // return `Updated in the United States on ${monthName} ${date}, ${year}`
            return "Updated in the United States on " +  this.formatDate(unformatedDate.create)

        }

    }



    handleBuyNow(){

       
        let cartItem = {title:this.props.book.title, image_url:this.props.book.image_url, author: this.props.book.author,  quantity: this.state.quantity, format: this.state.format, price: this.state.price, book_id: this.props.book.id, price_id: this.props.book.prices[this.state.format]["id"] }

        // this.props.receiveCart(cartItem)

        this.props.createOrder(cartItem).then(()=>{

            this.props.history.push('/order-confirmation')
            
        })

        // this.setState({checkOut:true}) 
        // setTimeout(() => {this.setState({checkOut:false});}, 2000);
    }



    render(){  

        let show_page = <h1>Loading......</h1>

        if(this.props.book === undefined ||  this.props.reviews === undefined || this.props.book.prices === undefined)  return show_page
        if (this.props.book){
            const {book, reviews, prime} = this.props
            let author_bio;

            if(this.state.price === '0.00'){
                this.state.price =  Object.values(book.prices)[0].price
                this.state.format = Object.values(book.prices)[0].book_format
            }
  
            if (book.biography ){
                author_bio = (
                    <div>
                        <p className="author-bio-name">About the Author: </p>
                        <p className="author-bio-p">{book.biography}</p>
                    </div>
                ) 
            }

            const prices =  book.prices;
      
         

            // let avg_rating = (book.avg_rating / 5 * 100).toString()+"%"
            // let review_count = "(" + book.avg_rating.toString() + " rating" + ", " + book.reviews.length.toString() + " reviews" + ")"
            
            let totalRating  = 0;
            let avg_rating_out 
            let avg_rating 
            let total_review ;
         
            let starRatesBar= [0,0,0,0,0];
        
            let currentUser_reviewId = "";

            reviews.forEach((review)=>{
                if(review.rating === 1)  starRatesBar[4] += 1;
                if(review.rating === 2)  starRatesBar[3] += 1;
                if(review.rating === 3)  starRatesBar[2] += 1;
                if(review.rating === 4)  starRatesBar[1] += 1;
                if(review.rating === 5)  starRatesBar[0] += 1;
                 
                totalRating += review.rating
                if (review.user_id === this.props.currentUserId) currentUser_reviewId = review.id
            })

            total_review = reviews.length
            avg_rating_out = (totalRating / Math.max(1,reviews.length)).toFixed(2)
            let review_count;
            
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

<div>

                <p className={ this.state.checkOut ? "on-the-way" : "not-show"}>✅ &nbsp; Your order is on the way!</p>

            <div id="bsp-container">
                <div id="bsp-container-first">
                    <div>
                        <img id="lookInside_bookShow" src={window.lookInside_bookShow} alt="Look Inside"/>
                        <img id="showPage-bookImg" src={book.image_url}/>
                    </div>
                    <div className="bsp-detail">
                        {/* <div className="bsp-title-publication"> */}
                            <span className="bsp-title">{book.title}</span>
                            <span className="bsp-publication">{this.state.format} - {this.formatDate(book.publication_date)}</span>
                        {/* </div> */}
                       <p className="bsp-space"></p>
                        <span className ="font-for- author">by </span>
                        <span className="bsp-author">{book.author} </span>
                        <span className ="font-for-author">(Author)</span>

               {/* {} */}
                        <div className="rating-star-min-width">
                            <div className="rating-star-container-bookShow-top">
                                <div className="star-ratings-css">
                                    <div className="star-ratings-css-top" style={{"width":  `${avg_rating}` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                                    <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                                </div> 
                                <p className="review-count-top showpage">{total_review} ratings</p>
                            </div>
                        </div>
                {/* {} */}

                        <div className="book-catego">
                            <span>Category: </span>
                            <span className="bsp-catogory">{book.category}</span>

                        </div>
            
                        <p className="diff-price"> See all formats and editions</p>

                        <ul className="bsp-prices">
                           { Object.values(book.prices).map((formatPrice,idx)=> {
                         
                               return (
                               <li key={idx}>
                                   <button className={formatPrice.book_format=== this.state.format ? "price-btn change": "price-btn"} value={[formatPrice.book_format, formatPrice.price]} onClick={this.handlePrice}>
                                        <p className={formatPrice.book_format=== this.state.format ?  "book-show-format" : "nothing"}> { formatPrice.book_format === "Audiobook"? <span> <img style={{width: 20}} src={window.audible} alt="audible logo" /></span> : null} {formatPrice.book_format}</p>
                                        <div className="book-show-price-prime">
                                            {/* <p className={formatPrice.book_format=== this.state.format ?  "book-show-price" : "nothing"} > {"$" + Number.parseFloat(formatPrice.price).toFixed(2)}  {(prime[book.id] && ["Paperback", "Audio CD", "Hardcopy"].includes(formatPrice.book_format)) ? <span className="noSpanSpace"><span className="book-show-check-color">✓</span> <span className="book-show-prime-color">prime</span> </span> : null} </p>  */}
                                            <p className={formatPrice.book_format=== this.state.format ?  "book-show-price" : "nothing"} > ${formatPrice.discount? Number.parseFloat(parseFloat(formatPrice.price * 0.75 + 0.99)).toFixed(2) :  Number.parseFloat(formatPrice.price).toFixed(2)}  
                                          
                                            {(prime[book.id] && ["Paperback", "Audio CD", "Hardcopy"].includes(formatPrice.book_format)) ? <span className="noSpanSpace"><span className="book-show-check-color">✓</span> <span className="book-show-prime-color">prime</span> </span> : null} </p> 
                                        </div>
                                    </button>
                                    
                
                               </li>
                           )})}
                        </ul>
                        {/* <p className="author-bio-name">About the Book</p> */}
                        <p className="about-book">{book.description}</p>
               
                    </div>

                    <div id="addCartContainer">
                        
                            {/* {formatPrice.discount? Number.parseFloat(parseFloat(formatPrice.price * 0.75 + 0.99)).toFixed(2) :  Number.parseFloat(formatPrice.price).toFixed(2)}  */}
                           {prices[this.state.format].discount ? 
                     <div>
                            <div className="bsp-form-price">
                                <p className="SelectForm">{this.state.format + ":"} </p>
            
                                 <p className="bsp-price-color">{ "$"+ Number.parseFloat(parseFloat(this.state.price * 0.75 + 0.99)).toFixed(2)}</p>
                            </div> 

                                
                            <div className="listPirce">
                                    <span>List Price: </span>
                                    <span className="listPirce-cross">{ "$"+ Number.parseFloat(parseFloat(this.state.price)).toFixed(2)}</span>
                                    <p>Save: ${Number.parseFloat(parseFloat(this.state.price * 0.25 - 0.99)).toFixed(2)} (25%)</p>
                             
                            </div>
                    </div>:  
                            <div className="bsp-form-price">
                                <p className="SelectForm">{this.state.format + ":"} </p>
                                
                                <p className="bsp-price-color">{ "$"+ Number.parseFloat(parseFloat(this.state.price)).toFixed(2)}</p>
                            
                            </div>
                            } 
                               
    
                        {(prime[book.id] && ["Paperback", "Audio CD", "Hardcopy"].includes(this.state.format)) ? 
                       
                        <div>
                            <div className="prime-big">
                                <span className="check-color-big">✓</span> <span className="prime-color-big">prime</span> 
                                {/* <p className="freeShipping">& FREE Return</p> */}
                            </div> 

                            <p className="delivery-date">FREE Delivery by <span style={{fontWeight: "bold"}}>{this.handDelivery()}</span> for prime members</p>
                        </div>

                        : null}

                        <p className="inStock-color">In Stock</p>

            {/*  */}
                        <select className="book-quantity-select" onChange={this.handleBookQuantity} value={this.state.quantity}>
                            <option value="1">Qty: 1</option>
                            <option value="2">Qty: 2</option>
                            <option value="3">Qty: 3</option>
                            <option value="4">Qty: 4</option>
                        </select>

                                
            {/*  */}

                        <div className="addCartBtn-container">

                            {/* <button className='addToCart-btn'>Add to Cart</button> */}
                            <button className='add-to-cart-button' onClick={this.handleCart}>
                            <img className="add-to-cart-pic" src={window.addToCart} alt="add to cart"/>
                            <span className="cart-span"> Add to Cart</span>
                        
                            </button>
                            
                            <p className="givenSmallSpace"></p>

                            <button className='buy-now-button'>
                            <img className="add-to-cart-pic" src={window.buyNowCart} alt="buyNowCart"/>
                            <span className="buynow-span" onClick={this.handleBuyNow}>  Buy Now</span>
                        
                            </button>
                                                <p className="secure-trans">🔒 &nbsp;Secure transaction</p>

                                            
                                                <p className="shipFrom">ship from &nbsp;&nbsp;Amazen.com</p>
                                                <p className="soldBy">sold by &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Amazen.com</p>
                                                {/* <img id="addToCart-btn" src={window.addToList} alt="Add to List"/> */}
                                                <button className='addToList' onClick={this.addToWishlist}>Add to List</button>
                        </div>


                    </div>

                </div>

                <div id="bsp-container-secend">
                    
                   
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
                                <p className="grobal-review-count">{avg_rating_out} out of 5</p>
                            </div>

                        </div>

                        <p className="givenSpace">{total_review} global ratings</p>

                        { showBar }

                        <a className="rating-cal" href="https://github.com/Lijun-Gan/Amazen">How are ratings calculated?</a>


                        <p className="title-to-review">Review this Product</p>
                        <p className="share-thoughts">Share your thoughts with other customers</p>


                        <Link to={currentUser_reviewId === "" ?  `/books/${book.id}/create-review` : `/reviews/${currentUser_reviewId}/edit` }>
                            <p id="postReview">Write a customer review</p>
                        </Link>
                    </div>



                    <div id="book-reviews-container-right">
                        <p className="us-top-reviews">Top reviews from the United States</p>
                        <ul>
                            {reviews.slice().reverse().map((review,idx)=>(
                                <li key={idx} className="book-review-li">
                          
         
                                    <div id="PictureText">
                                        <img id="reviewUser-pic" src={window.userPic_review} alt="user pic"/>
                                        <span className="pictureText-text-user">{review.review_author}</span>
                                        {review.user_id === this.props.currentUserId ? 
                                        (<div ref={this.wrapperRef}  id={review.id + "$"} className="tooltip" onClick={this.handleBtn(review.id + "book")}>
                                            <img src={window.threeDots} alt="hide delete" className="threeDots-pic"/>

                                            {/* <div className="tooltiptext" style={{visibility: this.state.showReviewBtn? 'visible' : 'hidden' }}> */}
                                            <div className="tooltiptext" id={review.id + "book"}>
                                                    <Link to={`/reviews/${review.id}/edit`}>
                                                        <p className="profile-editReview-btn">Edit review</p>
                                                    </Link>
                                                        <button className="profile-deleteReview-btn" onClick={()=>this.props.deleteReview(review)} >Detete review</button>

                                            </div>
                                        </div>)
                                        : null }

                                    </div>

                                    <div className="rating-star-container">
                                        {/* {this.handleRating(review.rating)} */}

                                    <div className="star-ratings-css-reviewbottom">
                                        <div className="star-ratings-css-top" style={{"width":  `${(review.rating/ 5 * 100).toString()+"%"}` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                                        <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                                    </div> 
                                    
                                        <span className="bsp-PictureText-title">{review.title}</span>
                                    </div>

                                    <p className="reviewUS">{this.handleDate({create: review.created_at, update: review.updated_at})}</p>
                                    <p className="reviewBody">{review.body}</p>

                                    {/*                                    
                                    {review.user_id === this.props.currentUserId ? 
                                    (
                                        <div className="delete-edit-btn" >
                                            <Link to={`/reviews/${review.id}/edit`}>
                                                <p className="editReview-btn">Edit</p>
                                            </Link>
                                            <button className="deleteReview-btn" onClick={(()=>{this.props.deleteReview(review)})} >Detete</button>
                                        </div>

                                    ) : null}    */}

                                </li>
                            ))}
                        </ul>
                        
                    </div>  
                </div>

            </div>  
</div>         

        )}
    } 
}
  


export default BookShow;