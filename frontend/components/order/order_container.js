import { connect } from 'react-redux';
import Order from './order';
import {fetchOrders, receiveCart, deleteOrder} from '../../actions/cart_actions';
import {fetchBooks} from '../../actions/book_actions';
import { fetchProfile } from "../../actions/profile_actions";


const mapStateToProps = (state) => {
    let bookIds = [];
    // let reviewedIds = [];

    if(state.entities.profile.reviewedBookIds){
        bookIds = state.entities.profile.reviewedBookIds
        // reviewedIds = state.entities.profile.reviewIds
    }
    
   return {
       orders: state.entities.orders,
       books: state.entities.books,
       prices: state.entities.prices,
       currentUserId: state.session.id,
       reviewedBookIds: bookIds,
    //    reviewIds: reviewedIds
   }
}
    
const mapDispatchToProps = (dispatch) => {
    
    return {
        fetchBooks: ()=>dispatch(fetchBooks()),
        fetchOrders: ()=>dispatch(fetchOrders()),
        receiveCart: (cart)=>dispatch(receiveCart(cart)),
        deleteOrder: (orderId)=>dispatch(deleteOrder(orderId)),
        fetchProfile: (userId) => dispatch(fetchProfile(userId)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)