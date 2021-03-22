import React from 'react';
import NavBar from '../../home_page/navigation';
import Footer from '../../home_page/footnote';


class BookShow extends React.Component {
    constructor(props) {
      super(props);
      this.state = ({
          format: 'Select format ',
          price: '0.00'
      })
      this.handlePrice = this.handlePrice.bind(this)
    }
  
    componentDidMount(){
        

      this.props.fetchBook(this.props.match.params.id)
    }

    handlePrice(e){
        
        const book_format_price = e.target.value.split(",")
        this.setState({
            format: book_format_price[0],
            price: book_format_price[1]
        })
    }

    handleRating(rating){
        if(rating === 5){
           return  <img id="ReviewStars" src={window.five_star} alt="rating"/>
        }
        if(rating === 4){
           return  <img  id="ReviewStars" src={window.four_star} alt="rating"/>
        }
        if(rating === 3){
           return  <img id="ReviewStars" src={window.three_star} alt="rating"/>
        }
        if(rating === 2){
           return  <img id="ReviewStars" src={window.two_star} alt="rating"/>
        }
        if(rating === 1){
           return  <img  id="ReviewStars" src={window.one_star} alt="rating"/>
        }
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
        let show_page = "page broken"
        // let show_page = <img src={ window.page_broken} alt="page broken"/>  
        if (this.props.book){
            const {book} = this.props
            let author_bio;
  

            if (book.biography ){
                author_bio = (
                    <div>
                        <p className="author-bio-name">About the Author: </p>
                        <p className="author-bio-p">{book.biography}</p>
                    </div>
                ) 
            }


        
            show_page = (

            <div id="bsp-container">

                <div id="bsp-container-first">
                    <div>
                        <img id="lookInside_bookShow" src={window.lookInside_bookShow} alt="Look Inside"/>
                        <img id="showPage-bookImg" src={book.image_url}/>
                    </div>

                    <div className="bsp-detail">
                        <p className="bsp-title">{book.title}</p>
                        <p className="bsp-publication">{this.handleDate(book.publication_date)}</p>
                        <span>by </span>
                        <span className="bsp-author">{book.author} (Author)</span>
                        <img id="fiveStar" src={window.avg_star} alt="rating"/>
                        <div className="book-category">
                            <span>Category: </span>
                            <span className="bsp-catogory">{book.category}</span>

                        </div>
            
                        <p className="diff-price"> See all formats and editions</p>

                        <ul className="bsp-prices">
                           { book.prices.map((formatPrice)=> {
                               return (
                               <li key={formatPrice.id}>
                                   <button className="price-btn" value={[formatPrice.book_format, formatPrice.price]} onClick={this.handlePrice}>{formatPrice.book_format}<br/>{  "$"+ Number.parseFloat(formatPrice.price).toFixed(2)}</button>
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
                    <h2>Customer reviews</h2>
                    
                    <button className="postReview">Write a customer review</button>
                    <div id="book-reviews-container-left">

                    </div>

                    <div id="book-reviews-container-right">
                        <ul>
                            {book.reviews.map((review)=>(
                                <li key={review.id}>
                          
                                    {review.user_id === this.props.currentUser ? 
                                    (
                                        <div>
                                            <button className="editReview-btn" onClick={(()=>{this.props.updateReview(review)})} >Edit</button>
                                            <button className="deleteReview-btn" onClick={(()=>{this.props.deleteReview(review)})} >Detete</button>
                                        </div>
                                    ) : null}   
                                    <div id="PictureText">
                                        <img id="reviewUser-pic" src={window.userPic_review} alt="user pic"/>
                                        <span className="PictureText-text">{review.review_author}</span>
                                    </div>

                                    <div id="PictureText">
                                        {this.handleRating(review.rating)}
                                        <span className="PictureText-title">{review.title}</span>
                                    </div>

                                    <p className="reviewDateNBody">reviewed on {this.handleDate(review.created_at)}</p>
                                    <p className="reviewDateNBody">{review.body}</p>
                                    
                                </li>
                            ))}
                        </ul>
                        
                    </div>
                </div>

            </div>            







        )}
        return (
            <div>
                <NavBar />
                {show_page}
                <Footer />
            </div>
        )
    } 
}
  


export default BookShow;