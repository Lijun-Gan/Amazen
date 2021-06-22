import React from 'react';
import {Link} from 'react-router-dom';

class Wishlist extends React.Component {

  constructor(props) {
    super(props);

    this. handleCart = this.handleCart.bind(this)
    this.handleDate = this.handleDate.bind(this)
  }

  componentDidMount(){
      
    this.props.fetchBooks().then(()=>{

      this.props.fetchWishlists()
    })
  }

  handleCart(cartItem){
      return() =>{

          const savedCart = localStorage.getItem(this.props.currentUserId);
          let cart = {};
      
          if (savedCart) {
              cart = JSON.parse(savedCart);
          }
      
     
          let uniqueId = cartItem.book_id + "_" + cartItem.format
          
          cart[uniqueId] = cartItem
      
      
          localStorage.setItem(this.props.currentUserId, JSON.stringify(cart));
      
        
          this.props.receiveCart(cartItem)
          this.props.history.push('/cart')
      }

};

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
      if (this === undefined || this.props.books == undefined){
          return <h1>loading......</h1>
      }
      const {wishlists, books, deleteWishlist} = this.props

      return(

        <div className="wishlist-page">
            <h3 className="wl-h3">Wish List</h3>
        <div className="wishlist-container">

            <ul >
            {Object.values(wishlists).reverse().map((wishlist,idx)=>{
            
            return(

              <li key={idx} className="wishlist-items">
                   <Link className="wl-title" to={`/books/${wishlist.book_id}`}>
                  <img className="wishlist-pic" src={books[wishlist.book_id].image_url} alt="book img"/>
                  </Link>

                    <div className="wl-info">
                        
                        <Link className="wl-title" to={`/books/${wishlist.book_id}`}>
                        {books[wishlist.book_id].title}
                        </Link>
                        <p className="wl-author">by {wishlist.author} ({wishlist.format})</p>
                        
                        <div className="wl-rating-star-container">
    <div className="star-ratings-css-home-page">
        <div className="star-ratings-css-top" style={{"width": `${( books[wishlist.book_id].avg_rating / 5 * 100).toString()+"%"}` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
    </div> 
    <p className="review-count-home-page">{books[wishlist.book_id].total_reviews}</p>
    {/* book.reviewIds.length */}
</div>
                <span className="wl-price">{ "$"+ Number.parseFloat(parseFloat(books[wishlist.book_id].price)).toFixed(2)}</span>
                <span className="wl-delivery">Free Delivery</span>
       

                    </div>
                    <div className="wl-btn">
                        <p className="wl-date">Item added {this.handleDate(wishlist.created_at)}</p>
                        <button className='wl-add-to-cart-button' onClick={this.handleCart({title: books[wishlist.book_id].title, image_url:books[wishlist.book_id].image_url, author: wishlist.author,  quantity: 1, format: wishlist.format ,price: wishlist.price, book_id: wishlist.book_id})}>Add to Cart</button>
                        <br/>
                        <button className="deleteList" onClick={()=>deleteWishlist(wishlist.id)}>Delete</button>
                    </div>
              </li>
                
            )})}
            </ul>
        
        </div>
        </div>
        
      )
      
  }
}

export default Wishlist;