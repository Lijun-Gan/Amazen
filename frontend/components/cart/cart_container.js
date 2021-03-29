import { connect } from 'react-redux';
import Cart from './cart';
import {createCart, deleteCart, receiveCart} from '../../actions/cart_actions'

const mapStateToProps = (state) => {
    // return {
    //    currentUserId: state.session.id,
       
    // }
    
    let cartsBook = [];
    if(state.session.id !== undefined){
         
        let userId = state.session.id;

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
        deleteCart: (cartId) => dispatch(deleteCart(cartId)),
        receiveCart: (cart) => dispatch(receiveCart(cart))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)