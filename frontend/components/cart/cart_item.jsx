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
             
            this.setState({
                quantity: e.target.value
            })
             
    
            let cartBooks = JSON.parse(localStorage.getItem(this.props.userId ))
             
               cartBooks[cartId].quantity = e.target.value;
        
            localStorage.setItem(this.props.userId , JSON.stringify(cartBooks));  

            this.props.receiveCart(cartBooks[cartId])
        }    

    }


    deleteOneItem(cartId) {
         


        return(e)=>{
            e.preventDefault
             
      

            let cartBooks = JSON.parse(localStorage.getItem(currentUser.id ))
            delete cartBooks[cartId];
             
            
            localStorage.setItem(currentUser.id , JSON.stringify(cartBooks));

             
            this.props.removeCart(cartId)
             
    
        }
    }



    render() {
        const { cartBook } = this.props;
         

        return (
            <div className="shopping-cart-item">
                 

<div className="cart-book-info-container">

        <div className="carts-books-img">
            <Link to={`/books/${cartBook.book_id}`}>
            <img className="cart-book-img" src={cartBook.image_url}></img>
            </Link>
        </div>

<div className="cart-book-info">

            <Link to={`/books/${cartBook.book_id}`}>
                <span className='carts-books-title'>{cartBook.title}</span>
            </Link>
              
                <span className="cart-book-author">by {cartBook.author}</span>
                <p className="cart-book-format">{cartBook.format}</p>
                
            <div id="big-box">

            </div>
         <div className="cart-book-in-stock-container">
                <p className="carts-book-in-stock">In Stock</p>
            
                <select className="book-quantity-select-cart" onChange={this.handleBookQuantity(cartBook.book_id.toString()+ "_" + cartBook.format)} value={this.state.quantity} >
                    <option value="1" >Qty: &nbsp;  1</option>
                    <option value="2" >Qty: &nbsp;  2</option>
                    <option value="3" >Qty: &nbsp;  3</option>
                    <option value="4" >Qty: &nbsp;  4</option>
                </select>
            
            <button className="deleteOneItem"  onClick={this.deleteOneItem(cartBook.book_id.toString() + "_" + cartBook.format)}>Delete</button>
           
        </div>
</div>

                <p className="cart-price">$ {cartBook.price}</p>
           

        </div>

               
            </div>
        );
    }
}

export default CartItem;