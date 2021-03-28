import React from 'react';
import { Link } from 'react-router-dom';

class CartItem extends React.Component {
    constructor(props) {
        super(props);

        this.state =  this.props.cartBook;

        // this.handleBookQuantity =  this.handleBookQuantity.bind(this)
        // this.deleteOneItem = this.deleteOneItem.bind(this)
    }

    handleBookQuantity(cartId){

        return (e)=>{

            e.preventDefault()
            debugger
            this.setState({
                quantity: e.target.value
            })
            debugger
    
            let cartBooks = JSON.parse(localStorage.getItem(currentUser.id ))
            debugger
               cartBooks[cartId].quantity = e.target.value;
        
            localStorage.setItem(currentUser.id , JSON.stringify(cartBooks));  

            this.props.receiveCart(cartBooks[cartId])
        }    

    }


    deleteOneItem(cartId) {
        debugger


        return(e)=>{
            e.preventDefault
            debugger
      

            let cartBooks = JSON.parse(localStorage.getItem(currentUser.id ))
            delete cartBooks[cartId];
            debugger
            
            localStorage.setItem(currentUser.id , JSON.stringify(cartBooks));

            debugger
            this.props.deleteCart(cartId)
            debugger
    
     

        }
    }

    render() {
        const { cartBook } = this.props;
        debugger

        return (
            <div className="shopping-cart-item">
                 

<div className="cart-book-info">

        <div className="carts-books-img">
            <Link to={`/books/${cartBook.book_id}`}>
            <img src={cartBook.image_url}></img>
            </Link>
        </div>

<div className="carts-books-info">

            <Link to={`/books/${cartBook.book_id}`}>
                <span className='carts-books-title'>{cartBook.title}</span>
                <p className="cart-price">$ {cartBook.price}</p>
            </Link>
                <p>{cartBook.format}</p>
                
            <div id="big-box">

            </div>
         <div className="cart-book-in-stock-container">
                <p className="carts-book-in-stock">In Stock</p>
            
                <select className="book-quantity-select" onChange={this.handleBookQuantity(cartBook.book_id.toString()+ "_" + cartBook.format)} value={this.state.quantity} >
                    <option value="1" >Qty: 1</option>
                    <option value="2" >Qty: 2</option>
                    <option value="3" >Qty: 3</option>
                    <option value="4" >Qty: 4</option>
                </select>

            </div>
</div>
           
            <button className="deleteOneItem"  onClick={this.deleteOneItem(cartBook.book_id.toString() + "_" + cartBook.format)}>Delete</button>

        </div>

               
            </div>
        );
    }
}

export default CartItem;