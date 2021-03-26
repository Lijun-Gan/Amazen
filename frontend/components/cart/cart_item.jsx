import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { book , deleteOneItem} = this.props;
   

        return (
            <div className="shopping-cart-item">
                 

<div className="cart-book-info">

        <div className="carts-books-img">
            <Link to={`/books/${book.id}`}>
            <img src={book.image_url}></img>
            </Link>
        </div>

<div className="carts-books-info">

            <Link to={`/books/${book.id}`}>
                <span className='carts-books-title'>{book.title}</span>
                <p className="cart-price">$ {book.price}</p>
            </Link>
                <p>{book.format}</p>
                
            <div id="big-box">

            </div>
         <div className="cart-book-in-stock-container">
                <p className="carts-book-in-stock">In Stock</p>
            
                <select className="book-quantity-select" >
                    <option value="1" >Qty: 1</option>
                    <option value="2" >Qty: 2</option>
                    <option value="3" >Qty: 3</option>
                    <option value="4" >Qty: 4</option>
                </select>

            </div>
</div>
           
            <button className="deleteOneItem"  onClick={deleteOneItem(book.id)}>Delete</button>

        </div>

               
            </div>
        );
    }
}

export default CartItem;