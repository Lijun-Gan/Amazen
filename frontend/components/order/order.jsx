import React from 'react';
import {Link} from 'react-router-dom';

class Order extends React.Component {
    constructor(props) {
        super(props);

        this.handleDate = this.handleDate.bind(this);
        this.handleCart = this.handleCart.bind(this);
        this.hanldeOrder = this.hanldeOrder.bind(this);
    }

    componentDidMount(){
        this.props.fetchBooks().then(()=>{
            this.props.fetchOrders().then(()=>{
                this.props.fetchProfile(this.props.currentUserId)
            })
        })
    }

    handleCart(book){

        return (e)=>{

            e.preventDefault();

            if(!this.props.currentUserId){
                this.props.history.push("/signin")
            }

            const savedCart = localStorage.getItem(this.props.currentUserId);
            let cart = {};

            if (savedCart) {
    
                cart = JSON.parse(savedCart);
            }

            let cartItem = book
            let uniqueId = cartItem.book_id.toString() + "_" + cartItem.format

            cart[uniqueId] = cartItem

            localStorage.setItem(this.props.currentUserId, JSON.stringify(cart));

            this.props.receiveCart(cartItem)
            this.props.history.push('/cart')
        }
    };

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

    render(){
        const books = this.props.books;
        const prices = this.props.prices;
        
        return(
            <div className="order-outer-container">
                <h1 className="your-orders">Your Orders</h1>

                <ul className="order-ul">
                    {Object.values(this.props.orders).reverse().map((order,idx) =>{
                        return(
                            <li key={idx} className="item-container">

                                <div className="item-header">
                                    <div className="dispaly-block">
                                        <p className="dispaly-block-top">ORDER PLACED</p>
                                        <p className="dispaly-block-bottom">{this.handleDate(order.created_at)}</p>   
                                    </div>
                                    <div className="dispaly-block">
                                        <p className="dispaly-block-top">TOTAL</p>
                                        <p className="dispaly-block-bottom">$ {prices[order.price_id].price}</p>   
                                    </div>

                          
                                    <p className="order-num">ORDER # {order.id}</p>
                
                                </div>


                                <div className="item-body">
                                   

         {/* {} */}
                  <Link className="order-title" to={`/books/${order.book_id}`}>
                  <img className="order-pic" src={books[order.book_id].image_url} alt="book img"/>
                  </Link>

                    <div className="wl-info">
                        
                        <Link className="order-title" to={`/books/${order.book_id}`}>
                        {books[order.book_id].title}
                        </Link>
                        <p className="order-author">{books[order.book_id].author} ({prices[order.price_id].book_format})</p>
                        
                        <img className="buyAgain" src={window.buyAgain} alt="buyAgain pic"/>
                        <button className='order-add-to-cart-button' onClick={this.handleCart({title: books[order.book_id].title, image_url: books[order.book_id].image_url, author: books[order.book_id].author,  quantity: 1, format: prices[order.price_id].book_format ,price: prices[order.price_id].price, book_id: order.book_id, price_id: order.price_id })}>Add to Cart</button>
       
                    </div>
                    <div className="wl-btn">
                        <button className='wl-add-to-cart-button' onClick={this.hanldeOrder(order.id)}>Return Item</button>
                        <br/>

                        <Link to={Object.keys(this.props.reviewedBookIds).includes(order.book_id.toString()) ?  `/reviews/${this.props.reviewedBookIds[order.book_id]}/edit` : `/books/${order.book_id}/create-review` }>
                            {/* {console.log(this.props.reviewedBookIds, Object.keys(this.props.reviewedBookIds),Object.keys(this.props.reviewedBookIds).includes(order.book_id.toString()), order.book_id,this.props.reviewedBookIds[order.book_id])} */}
                            <p className="order-write-review">Write a product review</p>
                        </Link>
                        {/* <button className="deleteList" >Write a product review</button> */}
                    </div>

                    {/* {} */}
                                   
                                </div>
                            </li>
                        )


                    })

                    }

                </ul>
            </div>
        )
    }

}

export default Order;