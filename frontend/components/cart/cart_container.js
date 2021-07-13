import { connect } from 'react-redux';
import Cart from './cart';
import {removeCart, receiveCart, createOrder} from '../../actions/cart_actions'

const mapStateToProps = (state) => {
    // return {
    //    currentUserId: state.session.id,
       
    // }
    
    let cartsBook = [];

    let userId = null;
    
    if(state.session.id !== undefined){
         
        userId = state.session.id;

        if(localStorage.getItem(userId) !== null && Object.values(JSON.parse(localStorage.getItem(userId)).cartItems).length > 0){
          
             
            cartsBook = JSON.parse(localStorage.getItem(userId)).cartItems
            
        }
        return ({
            currentUserId: userId,
            cartBooks: cartsBook,
            prime: state.prime,
        })
    }
}
    
const mapDispatchToProps = (dispatch) => {
    return {
        removeCart: (cartId) => dispatch(removeCart(cartId)),
        receiveCart: (cart) => dispatch(receiveCart(cart)),
        createOrder: (cart) => dispatch(createOrder(cart)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)