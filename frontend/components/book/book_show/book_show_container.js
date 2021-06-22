import {connect} from 'react-redux';
import BookShow from './book_show';
import {fetchBook} from '../../../actions/book_actions'
import { deleteReview,updateReview } from '../../../actions/review_actions';
import {receiveCart, createOrder} from '../../../actions/cart_actions';
import { createWishlist } from '../../../actions/wishlist_actions';

const mapStateToProps=(state,ownProps)=>{
     

    let bookReviews = [];
    let allReviews;
    // let book_prices = [];
     
    const oneBook = state.entities.books[ownProps.match.params.id];
     
    if(Object.keys(oneBook !== undefined && state.entities.reviews).length !== 0 && state.entities.reviews !== undefined && oneBook.reviewIds !== undefined ){
         
        allReviews = state.entities.reviews
        oneBook.reviewIds.forEach((id)=>{ 
            bookReviews.push(allReviews[id])
        })
        // book_prices = Object.values(state.entities.prices)
       
    }

    return({
        book: oneBook,
        reviews: bookReviews,
        // prices: book_prices,
        // prices: state.entities.prices,
        currentUserId: state.session.id,
        
    })
}

const mapDispatchToProps=(dispatch)=>{
    return({
        fetchBook: (id)=>dispatch(fetchBook(id)),
        deleteReview: (review)=>dispatch(deleteReview(review)),
        updateReview: (review)=>dispatch(updateReview(review)),
        receiveCart: (cart)=>dispatch(receiveCart(cart)),
        createWishlist: (wishlist)=>dispatch(createWishlist(wishlist)),
        createOrder: (cart) =>dispatch(createOrder(cart))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(BookShow)
