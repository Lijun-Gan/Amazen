import { connect } from 'react-redux';
import Cart from './cart';
import {createCart} from '../../actions/cart_actions'

const mapStateToProps = (state) => {
    return {
       currentUserId: state.session.id,
       
    }
    
    // if(state.session.id !== undefined){
    //     let cartsBook = [];
    //     let userId = state.session.id;

    //     if(localStorage.getItem(userId) !== null){
    //         cartsBook = Object.values(JSON.parse(localStorage.getItem(userId )))
    //     }
    //     return ({
    //         currentUserId: userId,
    //         cartsBook: cartsBook
    //     })
    // }
}
    
const mapDispatchToProps = (dispatch) => {
    return {
        createCart: (cart) => dispatch(createCart(cart))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)