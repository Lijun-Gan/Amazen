import React from 'react';
import {Link} from 'react-router-dom';

class Wishlist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this. handleCart = this.handleCart.bind(this)
    this.handleDate = this.handleDate.bind(this)
    this.handleRedirectBookPage = this.handleRedirectBookPage.bind(this)
  }

  componentDidMount(){
      
    // this.props.fetchBooks().then(()=>{

      this.props.fetchWishlists()
    // })
  }

  // componentWillUnmount(){
  //   this.props.clearWishlistState()
  // }

  handleCart(cartItem){
      return() =>{

          const savedCart = localStorage.getItem(this.props.currentUserId);

          let cart = {"cartItems":{} , "prices": {}};

          // let cart = {};
      
          if (savedCart) {
              cart = JSON.parse(savedCart);
          }
      
     
          let uniqueId = cartItem.book_id + "_" + cartItem.format
          
          cart["cartItems"][uniqueId] = cartItem
      
      
          localStorage.setItem(this.props.currentUserId, JSON.stringify(cart));
      
        
          this.props.receiveCart(cartItem)
          this.props.history.push('/cart')
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

  handleRedirectBookPage(book){
    return(e)=>{

        e.preventDefault();

        const savedCart = localStorage.getItem(this.props.currentUserId);
        // let cart = {};
        let cart = {"cartItems":{} , "prices": {}};
    
        if (savedCart) { 
        
            cart = JSON.parse(savedCart);
            
        }
        
        cart["prices"][book.book_id.toString()] = { format: book.format, price: book.price}
        
        localStorage.setItem(this.props.currentUserId, JSON.stringify(cart));
    
    
       this.props.history.push(`/books/${book.book_id}`);
    }
 
  
  }

  handleClose(e){


    // return (e)=>{
        e.preventDefault()

        // if(action === "submit"){

            // this.setState({
            //     search: this.state.search
            // })
        
        // }else{

        //     document.getElementById("clear-search").value = "";
            this.setState({
              search: ""
          })
        // }

    // }
  }

  handleInput(e){

      this.setState({
        search: e.target.value
    })

  }


  render(){
      // if (this === undefined || this.props.books == undefined || Object.keys(this.props.wishlists).length <1 ){
      // if (Object.keys(this.props.wishlists).length < 1 ){
      //     return <h1>loading......</h1>
      // }
      const {wishlists,  deleteWishlist } = this.props

      let wishItems = Object.values(wishlists)
      if(wishItems && wishItems.length > 0 ){

        wishItems = wishItems.filter(wish=>{
          if(wish.title && wish.title.toUpperCase().includes(this.state.search.toUpperCase())){
            
              return wish

              }
          })
      }

      return(

        <div className="wishlist-page">

          <div className="wl-search-div">
            <h3 className="wl-h3">Wish List</h3>

            <form className="nav-search-bar-with-icon" onSubmit={this.handleSubmit}>
                <div className="order-margin-auto">
                    <img className="order-search-icon" src={window.search_icon} alt="Search" />
                    <input className="wl-search-bar" id="clear-search" type="text" name="search" onChange={this.handleInput} placeholder="Search by book title" autoComplete="off" value={this.state.search}/>
                    {this.state.search ? <p className="wl-search-close" onClick={this.handleClose}>✕</p> : null}
                </div>
                {/* <button className="wl-search-icon-btn" type="submit">Search</button> */}
                
              </form>  
          </div>

        <div className="wishlist-container">

            <ul >
            {wishItems.reverse().map((wishlist,idx)=>{
            
            return(

              <li key={idx} className="wishlist-items">
                   {/* <Link className="wl-title" to={`/books/${wishlist.book_id}`}> */}
                  <button className="wl-title" onClick={this.handleRedirectBookPage(wishlist)}> 
                    <img className="wishlist-pic" src={wishlist.image_url} alt="book img"/>
                  </button>
                  {/* </Link> */}

                    <div className="wl-info">
                        
                        {/* <Link className="wl-title" to={`/books/${wishlist.book_id}`}> */}
                        <button className="wl-title" onClick={this.handleRedirectBookPage(wishlist)}> 
                          {wishlist.title}
                        </button>
                        {/* </Link> */}
                        <p className="wl-author">by {wishlist.author} ({wishlist.format})</p>
                        

                        <div className="wl-rating-star-container">
                          <div className="star-ratings-css-home-page">
                              <div className="star-ratings-css-top" style={{"width": `${( wishlist.avg_rating / 5 * 100).toString()+"%"}` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                              <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                          </div> 
                          <p className="review-count-wishlist-page">{wishlist.total_reviews}</p>
                          {/* book.reviewIds.length */}
                        </div>


                        <div className="wishlist-prime">
                          <span className="wl-price">{ wishlist.discount ? "$"+ Number.parseFloat(parseFloat(wishlist.price * 0.75 + 0.99)).toFixed(2): "$"+ Number.parseFloat(parseFloat(wishlist.price)).toFixed(2)}</span>
                          {/* <span className="wl-delivery">Free Delivery</span> */}
                
                          {(this.props.prime[wishlist.book_id] && ["Paperback", "Audio CD", "Hardcopy"].includes(wishlist.format)) ? 
                        
                            <div className="prime-big">
                                <span className="check-color-big">✓</span> <span className="prime-color-big">prime</span> 
                            </div> 


                            : null}
                        </div>

                    </div>
                    <div className="wl-btn">
                        <p className="wl-date">Item added {this.handleDate(wishlist.created_at)}</p>
                        <button className='wl-add-to-cart-button' onClick={this.handleCart({title: wishlist.title, image_url:wishlist.image_url, author: wishlist.author, price_id: wishlist.price_id,  quantity: 1, format: wishlist.format ,price: wishlist.price, book_id: wishlist.book_id, discount: wishlist.discount})}>Add to Cart</button>
                        <br/>
                        <button className="deleteList" onClick={()=>deleteWishlist(wishlist.id)}>Delete</button>
                    </div>
              </li>
                
            )})}

            {/* <p className="wl-end-list"></p> */}

            <h2 className="crossline"><span id="wl-end-list">End of list</span></h2>
            </ul>
        
        </div>
        </div>
        
      )
      
  }
}

export default Wishlist;