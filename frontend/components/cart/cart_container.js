import { connect } from 'react-redux';
import Cart from './cart';
import {createCart, removeCart, receiveCart} from '../../actions/cart_actions'

const mapStateToProps = (state) => {
    // return {
    //    currentUserId: state.session.id,
       
    // }
    
    let cartsBook = [];

    let userId = null;
    
    if(state.session.id !== undefined){
         
        userId = state.session.id;

        if(localStorage.getItem(userId) !== null){
             
            cartsBook = JSON.parse(localStorage.getItem(userId ))
        }
        return ({
            currentUserId: userId,
            cartBooks: cartsBook
        })
    }
}
    
const mapDispatchToProps = (dispatch) => {
    return {
        createCart: (cart) => dispatch(createCart(cart)),
        removeCart: (cartId) => dispatch(removeCart(cartId)),
        receiveCart: (cart) => dispatch(receiveCart(cart))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)