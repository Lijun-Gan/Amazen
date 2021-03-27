import React from 'react';
import CartItem from './cart_item';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: JSON.parse(localStorage.getItem(this.props.currentUserId)),
        };

        this.deleteAllItems = this.deleteAllItems.bind(this);
        this.deleteOneItem = this.deleteOneItem.bind(this);
        this.handleCheckOut = this.handleCheckOut.bind(this);
    }

    deleteAllItems() {
        localStorage.clear();
        this.props.history.push('/')
    }

    deleteOneItem(bookId) {
        return()=>{

            delete this.state.books[bookId];
    
            localStorage.setItem(this.props.currentUserId, JSON.stringify(this.state.books));
            this.setState({
                books: this.state.books,
            });
        }
    }

    handleCheckOut() {
        // let books = Object.values(this.state.books);

        this.state.books.map((book) => {
            this.props.createCart({ user_id: this.props.currentUserId, book_id: book.id, quantity: book.quantity});
        });

        localStorage.clear();
        this.setState({
            books: [],
        });
        // return <Redirect to="/" />;
        this.props.history.push("/")

    }


    render(){

        // if (this.state.books === null || Object.values(this.state.books) < 1) {
        //     // return <Redirect to="/" />;
        // }


    //     debugger
        if (this === undefined || this.state.books === null || Object.values(this.state.books) < 1){
          
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

        Object.values(this.state.books).forEach(book => {
            quantity = quantity + Number(book.quantity);
            debugger
            subTotal = subTotal + book.price * book.quantity
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
                            {Object.values(this.state.books).map((book,idx)=>(
                                <li key={idx}>
                                    {<CartItem deleteOneItem={this.deleteOneItem} book={book} subTotle={subTotal} />}
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

  
