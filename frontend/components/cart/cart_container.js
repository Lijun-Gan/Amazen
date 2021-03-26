import { connect } from 'react-redux';
import Cart from './cart';
import {createCart} from '../../actions/cart_actions'

const mapStateToProps = (state) => {
    return {
       currentUserId: state.session.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCart: (cart) => dispatch(createCart(cart))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)