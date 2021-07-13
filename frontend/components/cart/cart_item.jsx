import React from 'react';
import { Link } from 'react-router-dom';

class CartItem extends React.Component {
    constructor(props) {
        super(props);

        this.state =  this.props.cartBook;

        this.handleBookQuantity =  this.handleBookQuantity.bind(this)
        this.deleteOneItem = this.deleteOneItem.bind(this);
        this.handleRedirectBookPage = this.handleRedirectBookPage.bind(this);
    }

    handleBookQuantity(cartId){

        return (e)=>{

            e.preventDefault()
             
            this.setState({
                quantity: e.target.value
            })
            let cartBooks = JSON.parse(localStorage.getItem(this.props.userId ))
             
               cartBooks["cartItems"][cartId].quantity = e.target.value;
        
            localStorage.setItem(this.props.userId , JSON.stringify(cartBooks));  
            console.log("handle quantity", cartBooks["cartItems"][cartId])
            this.props.receiveCart(cartBooks["cartItems"][cartId])
        }    

    }


    deleteOneItem(cartId) {
         


        return(e)=>{
            e.preventDefault
            let cartBooks = JSON.parse(localStorage.getItem(this.props.userId ))
            delete cartBooks["cartItems"][cartId];
             
            localStorage.setItem(this.props.userId , JSON.stringify(cartBooks));
            this.props.removeCart(cartId)
        }
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


    render() {
        
        const { cartBook } = this.props;
         
        return (
            <div className="shopping-cart-item">
                 

    <div className="cart-book-info-container">

        <div className="carts-books-img">
            {/* <Link to={`/books/${cartBook.book_id}`}> */}
            <button onClick={this.handleRedirectBookPage(cartBook)}>

            <img className="cart-book-img" src={cartBook.image_url}></img>
            </button>
            {/* </Link> */}
        </div>

        <div className="cart-book-info">

            {/* <Link to={`/books/${cartBook.book_id}`}> */}
                <button onClick={this.handleRedirectBookPage(cartBook)}>
                    <p className='carts-books-title'>{cartBook.title}</p>
                </button>
            {/* </Link> */}
              
                <p className="cart-book-author">by {cartBook.author}</p>
                <p className="cart-book-format">{cartBook.format}</p>
                
            <div id="big-box">

            </div>
         <div className="cart-book-in-stock-container">
                <p className="carts-book-in-stock">In Stock</p>

                {(this.props.prime[cartBook.book_id] && ["Paperback", "Audio CD", "Hardcopy"].includes(cartBook.format)) ? 
                        
                        <div className="prime-big">
                            <span className="check-color-big">✓</span> <span className="prime-color-big">prime</span> 
                        </div> 


                : null}
            
                <select className="book-quantity-select-cart" onChange={this.handleBookQuantity(cartBook.book_id.toString()+ "_" + cartBook.format)} value={this.state.quantity} >
                    <option value="1" >Qty: &nbsp;  1</option>
                    <option value="2" >Qty: &nbsp;  2</option>
                    <option value="3" >Qty: &nbsp;  3</option>
                    <option value="4" >Qty: &nbsp;  4</option>
                </select>
            
            <button className="deleteOneItem"  onClick={this.deleteOneItem(cartBook.book_id.toString() + "_" + cartBook.format)}>Delete</button>
           
        </div>
    </div>

                <p className="cart-price">$ { cartBook.discount?  Number.parseFloat(parseFloat(cartBook.price * 0.75 + 0.99)).toFixed(2) : cartBook.price }</p>
           

        </div>

               
            </div>
        );
    }
}

export default CartItem;