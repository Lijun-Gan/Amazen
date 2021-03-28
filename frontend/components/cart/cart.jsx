import React from 'react';
import CartItem from './cart_item';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     cartBooks: this.props.cartBooks
        // }
        
        this.state = {
            cartBooks: JSON.parse(localStorage.getItem(this.props.currentUserId)),
        };

        this.deleteAllItems = this.deleteAllItems.bind(this);
        // this.deleteOneItem = this.deleteOneItem.bind(this);
        this.handleCheckOut = this.handleCheckOut.bind(this);
    }

    deleteAllItems() {
        localStorage.clear();
        this.props.history.push('/')
    }

    handleCheckOut() {
        // let books = Object.values(this.state.books);

        this.state.cartBooks.map((book) => {
            this.props.createCart({ user_id: this.props.currentUserId, book_id: book.id, quantity: book.quantity});
        });

        localStorage.clear();
        this.setState({
            cartBooks: [],
        });
        // return <Redirect to="/" />;
        this.props.history.push("/")

    }


    render(){

        // if (this.state.books === null || Object.values(this.state.books) < 1) {
        //     // return <Redirect to="/" />;
        // }


        debugger
        if (this === undefined || this.state.cartBooks === null || Object.values(JSON.parse(localStorage.getItem(currentUser.id ))).length < 1){
          
            debugger
           return (
                <div className="empty-cart-page">
                    <h1 className="cart-empty">Your Amazen Cart is empty.</h1>
                    
                   <Link to='/'>
                   <i id="continue-shopping">Continue shopping</i></Link>
                </div>
            )
        }

    

        let subTotal = 0;
        let quantity = 0;

        Object.values(JSON.parse(localStorage.getItem(currentUser.id ))).forEach(cartBook => {
            quantity = quantity + Number(cartBook.quantity);
            debugger
            subTotal = subTotal + cartBook.price * Number(cartBook.quantity)
        });

        subTotal = "$" + subTotal.toString();
        debugger

        return (    


            <div id="shopping-cart-page-container">


            

                        <h1 className="carts-books-subtotal-tag-left">Shopping Cart</h1>
                        <button className="delete-all-book" onClick={this.deleteAllItems}>Deselect all items</button>
                        
                        <div className="price-at-end">

                         <p className="cart-page-price-tag">Price</p>

                        </div>


                    <div className="carts-books-list">

                               
                        <ul>
                            {Object.values(JSON.parse(localStorage.getItem(currentUser.id ))).map((cartBook,idx)=>(
                                <li key={idx}>
                                    {<CartItem  cartBook={cartBook} subTotle={subTotal}  deleteCart={this.props.deleteCart} receiveCart={this.props.receiveCart} />}
                                    {/* deleteOneItem={this.deleteOneItem(cartBook.book_id.toString() + "_" + cartBook.format)} */}
                                </li>
                            ))}
                        </ul>
                    </div>





            <div className="cart-page-right-side-container">

                <div className="sub-total">
                    <span className="carts-books-subtotal-tag-left">Subtotal ({quantity} items):</span>
                  
                    <span className="carts-books-subtotal-left">{subTotal}</span>

                </div>
                    <button className="carts-checkout" onClick={this.handleCheckOut}>Proceeed to checkout</button>

            </div>



            

                    
       
       </div>




        )

        }
}


export default Cart;

  
