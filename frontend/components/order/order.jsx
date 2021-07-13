import React from 'react';
import {Link} from 'react-router-dom';

class Order extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ""
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleCart = this.handleCart.bind(this);
        this.hanldeOrder = this.hanldeOrder.bind(this);
        this.handleRedirectBookPage = this.handleRedirectBookPage.bind(this);
    }

    componentDidMount(){
        // this.props.fetchBooks().then(()=>{
            this.props.fetchOrders()
            // .then(()=>{
        //         this.props.fetchProfile(this.props.currentUserId)
        //     })
        // })
    }

    // componentWillUnmount(){
    //     this.props.clearOrderState();
    // }

    handleCart(book){

        return (e)=>{

            e.preventDefault();

            if(!this.props.currentUserId){
                this.props.history.push("/signin")
            }

            const savedCart = localStorage.getItem(this.props.currentUserId);

            let cart = {"cartItems":{} , "prices": {}};

            // let cart = {};

            if (savedCart) {
    
                cart = JSON.parse(savedCart);
            }

            let cartItem = book
            let uniqueId = cartItem.book_id.toString() + "_" + cartItem.format

            cart["cartItems"][uniqueId] = cartItem

            localStorage.setItem(this.props.currentUserId, JSON.stringify(cart));

            this.props.receiveCart(cartItem)
            this.props.history.push('/cart')
        }
    };

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

    hanldeOrder(orderId){
        return (e)=>{

            e.preventDefault();

            this.props.deleteOrder(orderId)
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

      handleSubmit(action){


          return (e)=>{
              e.preventDefault()

              if(action === "submit"){

                  this.setState({
                      search: e.target.search.value
                  })
              
              }else{
   
                  document.getElementById("clear-search").value = "";
                  this.setState({
                    search: ""
                })
              }

          }
      }

      handleInput(e){
          if(e.target.value === ""){

              this.setState({search: e.target.value});
          }
      }

    render(){
        // const books = this.props.books;
        // const prices = this.props.prices;

        const{ orders } = this.props;

        // const bookIds = Object.keys(books);
        // const orderIds = Object.keys(orders);

        // if(Object.keys(orders).length <1 ){
      
        //     return (
        //         <h1>Loading......</h1>
        //     )

        // }else{

        let orderItems = Object.values(orders)
        if(orderItems.length > 0 ){
            orderItems = orderItems.filter(order=>{
 
                    if( order.title && order.title.toUpperCase().includes(this.state.search.toUpperCase())){
                        return order
                    }
                })
        } 
            

        return(
            <div className="order-outer-container">
                <div className="order-search-div">

                    <h1 className="your-orders">Your Orders</h1>

                    <form className="nav-search-bar-with-icon" onSubmit={this.handleSubmit("submit")}>
                        <div className="order-margin-auto">
                            <img className="order-search-icon" src={window.search_icon} alt="Search" />
                            <input className="order-search-bar" id="clear-search" type="text" name="search" onChange={this.handleInput} placeholder="Search all orders" autoComplete="off"/>
                            {this.state.search ? <p className="order-search-close" onClick={this.handleSubmit("close")}>✕</p> : null }
                        </div>
                        <button className="order-search-icon-btn" type="submit">Search Order</button>
                
                    </form>  

                </div>


                <ul className="order-ul">
                    {orderItems.reverse().map((order,idx) =>{
                        
                        return(
                            <li key={idx} className="item-container">

                                <div className="item-header">
                                    <div className="display-block">
                                        <p className="display-block-top">ORDER PLACED</p>
                                        <p className="display-block-bottom">{this.handleDate(order.created_at)}</p>   
                                    </div>
                                    <div className="display-block">
                                        <p className="display-block-top">TOTAL</p>
                                        {/* {console.log(order.price_id, books["4"],prices["1"], orders["20"], prices[order.price_id] )} */}
                                        <p className="display-block-bottom">$ {order.discount ? Number.parseFloat(parseFloat(order.price * 0.75 + 0.99)).toFixed(2) * order.quantity : order.price * order.quantity }</p>   
                                    </div>
                                    <div className="display-block">
                                        <p className="display-block-top">SHIP TO</p>
                                        {/* {console.log(order.price_id, books["4"],prices["1"], orders["20"], prices[order.price_id] )} */}
                                        <p className="display-block-bottom-last">{this.props.user.full_name ? this.props.user.full_name : this.props.user.username }</p>   
                                    </div>

                          
                                    <p className="order-num">ORDER # {order.id}</p>
                
                                </div>


                                <div className="item-body">
                                   

         {/* {} */}
                  {/* <Link className="order-title" to={`/books/${order.book_id}`}> */}
                  <button className="order-title" onClick={this.handleRedirectBookPage(order)}>
                    <img className="order-pic" src={order.image_url} alt="book img"/>
                    {order.quantity > 1 ? <p className="order-quant">{order.quantity}</p> : null}
                  </button>
                  {/* </Link> */}

                    <div className="wl-info">
                        
                        {/* <Link className="order-title" to={`/books/${order.book_id}`}> */}
                        <button className="order-title" onClick={this.handleRedirectBookPage(order)}>
                        {order.title}
                        </button>
                        {/* </Link> */}
                        <p className="order-author">{order.author} ({order.format})</p>
                        
                        <img className="buyAgain" src={window.buyAgain} alt="buyAgain pic"/>
                        <button className='order-add-to-cart-button' onClick={this.handleCart({title: order.title, image_url:order.image_url, author: order.author,  quantity: 1, format: order.book_format ,price: order.price, book_id: order.book_id, price_id: order.price_id, discount: order.discount })}>Add to Cart</button>
       
                    </div>
                    <div className="wl-btn">
                        <button className='wl-add-to-cart-button' onClick={this.hanldeOrder(order.id)}>Cancel / Return Item</button>
                        <br/>

                        {/* <Link to={Object.keys(this.props.reviewedBookIds).includes(order.book_id.toString()) ?  `/reviews/${this.props.reviewedBookIds[order.book_id]}/edit` : `/books/${order.book_id}/create-review` }> */}
                        <Link to={order.hasReview ?  `/reviews/${order.review_id}/edit` : `/books/${order.book_id}/create-review` }>
                            {/* {console.log(this.props.reviewedBookIds, Object.keys(this.props.reviewedBookIds),Object.keys(this.props.reviewedBookIds).includes(order.book_id.toString()), order.book_id,this.props.reviewedBookIds[order.book_id])} */}
                            <p className="order-write-review">Write a product review</p>
                        </Link>
                        <Link to="/contact">
                            <p className="order-write-review">Get product support</p>
                        </Link>
                        {/* <button className="deleteList" >Write a product review</button> */}
                    </div>

                    {/* {} */}
                                   
                                </div>
                            </li>
                        )


                    })

                    }
                    
                    <h2 className="crossline"><span id="wl-end-list">End of list</span></h2>
                </ul>
            </div>
         )
        }
    // }

}

export default Order;