import {connect} from 'react-redux';
import Wishlist from './wishlist';
import {fetchBooks} from '../../actions/book_actions'
import { fetchWishlists, deleteWishlist , clearWishlistState} from '../../actions/wishlist_actions';
import {receiveCart} from '../../actions/cart_actions'

const mapStateToProps=(state,ownProps)=>{
     

    return({
        books: state.entities.books ,
        wishlists: state.entities.wishlists,
        currentUserId: state.session.id
    })
}

const mapDispatchToProps=(dispatch)=>{
    return({
        fetchBooks: ()=>dispatch(fetchBooks()),
        fetchWishlists: ()=>dispatch(fetchWishlists()),
        clearWishlistState: ()=>dispatch(clearWishlistState()),
        deleteWishlist: (id)=>dispatch(deleteWishlist(id)),
        receiveCart: (cart)=>dispatch(receiveCart(cart))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Wishlist)
